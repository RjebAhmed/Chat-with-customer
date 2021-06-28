import { FirstServiceService } from './../chatServices/first-service.service';
import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChildren('selector') item: QueryList<ElementRef>;
  myDate = new Date();
  im: string = ""
  name: string = ""
  public id: string;
  qui: any;
  myArray = []
  agents = []
  chat = []
  msg = '';
  customersLIst = []
  who: boolean
  selectedChat = ""
  allCustomers = []
  finalCustomer = []
  constructor(private activatedRoute: ActivatedRoute,
    public db: AngularFirestore,
    private router: Router,
    private fs: FirstServiceService

  ) {


    this.getdata()
    this.qui = this.router.getCurrentNavigation().extras.state // should log out 'bar'
    console.log(this.qui);

    // ******************* customer or agent*************************
    if (this.qui) {
      this.who = this.qui.who
    } else {
      this.router.navigate(['notfound']);
    }
    this.getCompanyAgents()


    this.filterList()
    for (const i in this.customersLIst) {
      if (!this.finalCustomer.includes(i["customerID"])) {
        this.finalCustomer.push(i["customerID"]);
      }
      else {
        console.log("noooooooo");

      }
    }

  }
  ngOnInit(): void {
    this.filterList()

    this.getCompanyAgents()
    for (const i in this.customersLIst) {
      if (!this.finalCustomer.includes(i["customerID"])) {
        this.finalCustomer.push(i["customerID"]);
      }
      else {
        console.log("noooooooo");

      }
    }


  }
  getCompanyAgents() {
    this.db.collection("Agents", ref =>
      ref.where('link', "==", location.pathname.substr(6)))
      .snapshotChanges().subscribe(res => {
        if (res.length > 0) {
          this.agents = res.map(e => {

            return {

              id: e.payload.doc.id,
              url: e.payload.doc.data()["url"],
              userID: e.payload.doc.data()["userID"]
            }


          })
        }
        else {
          console.log("Does not exist.");

        }
      });
  }
  addMsg() {
    var current = new Date();
    let conv = { agentID: this.selectedChat, customerID: this.qui.id, content: this.msg, time: current.getTime(), sender: this.who }

    if (!this.who) {
      let conv = { agentID: this.qui.id, customerID: this.selectedChat, content: this.msg, time: current.getTime(), sender: this.who }
      this.fs.addConversation(conv)

      this.getConv(this.selectedChat)
    }

    this.fs.addConversation(conv)

    this.getConv(this.selectedChat)


  }


  getdata() {
    let id = location.pathname.substr(6);
    let companiesNames = []
    const collectionRef = this.db.collection('companies');
    const collectionInstance = collectionRef.valueChanges();
    collectionInstance.subscribe(ss => {
      ss.forEach(element => companiesNames.push(element["link"]))
      if (!companiesNames.includes(id)) {
        this.router.navigate(['notfound']);

      }
    })
  }
  selected(i) {

    this.item.toArray().forEach(element =>
      element.nativeElement.classList.remove('selected'));
    this.item.toArray()[i].nativeElement.classList.add("selected");
    let dateTime = new Date();


  }
  getConv(conv) {
    this.im=conv["url"]
    this.name=conv["customerID"]

    console.log(conv);
    console.log(conv[1]);

    var agID = this.qui.id
    var cusID = conv["id"]
    if (this.who) {
      this.name=conv["userID"]

      agID = conv["id"]
      cusID = this.qui.id

    }
    this.chat = []
    this.selectedChat = conv["id"];
    this.db.collection("Conversations", ref =>
      ref.where('agentID', "==", agID).where('customerID', "==", cusID).orderBy("time")
    )
      .snapshotChanges().subscribe(res => {
        if (res.length > 0) {
          this.chat = res.map(e => {

            return {
              id: e.payload.doc.id,
              agentID: e.payload.doc.data()["agentID"],
              customerID: e.payload.doc.data()["customerID"],
              msg: e.payload.doc.data()["content"],
              time: e.payload.doc.data()["time"],
              sender: e.payload.doc.data()["sender"]

            }


          })
        }
        else {
          console.log("Does not exist.");

        }
      });

  }
  getAllCustomers() {
    this.db.collection("Customers").snapshotChanges().subscribe(res => {
      this.allCustomers = res.map(e => {
        return {
          id: e.payload.doc.id,
          customerID: e.payload.doc.data()["userID"],
          url: e.payload.doc.data()["url"]

        }

      }
      )


    })

    this.allCustomers.push({ customerID: "5aE18P2Ls5kGEovXJKkD" })


  }
  test() {
    console.log(this.allCustomers);
    console.log(this.customersLIst);
    console.log(this.finalCustomer);
  }
  getCustomers() {

    this.db.collection("Conversations", ref => ref.where('agentID', "==", this.qui.id))
      .snapshotChanges().subscribe(res => {
        if (res.length > 0) {
          this.customersLIst = res.map(e => {

            return {
              customerID: e.payload.doc.data()['customerID']
            }
          })
        }
        else {
          console.log("dosent exist");

        }
      })
  }

  filterList() {
    this.getCustomers()
    this.getAllCustomers()
  }

}
