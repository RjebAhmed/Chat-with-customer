import { NgForm } from '@angular/forms';
import { FirstServiceService } from './../chatServices/first-service.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/Customer';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-logincustomer',
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent implements OnInit {
  customerID: String = '';
  password: String = '';
  url: String = '';
  sh: boolean = true
  state: string = "Log in now";
  constructor(

    private activatedRoute: ActivatedRoute,
    public db: AngularFirestore,
    private router: Router,
    private fs: FirstServiceService,
    private notif: NotificationsService
  ) {
    this.getdata()

  }

  ngOnInit(): void {
    // console.log((location.pathname).length);

    console.log(location.pathname.substr(6, (location.pathname.length - 12)))

  }
  onSubmit(form) {

  }
  getdata() {
    let id = location.pathname.substr(6, (location.pathname.length - 12))
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
  register(form: NgForm) {
    console.log(form.value);
    var customer: Customer = form.value;
    this.fs.addCustomer(customer)
      .then(cos => {
        this.state = "log in now"
        this.sh = !this.sh
      })
      .catch(err => console.log(err))
  }
  login(form: NgForm) {

    let link = location.pathname.substr(6, (location.pathname.length - 12));
    this.verifLogin(this.customerID, this.password, link)
  }
  show() {
    this.state = "sign up now"
    this.sh = !this.sh
  }
  error(msg) {
    this.notif.error('error', msg, {
      position: ["bottom", "left"],
      timeOut: 4000,
      animate: 'fade',
      showProgressBar: false
    });
  }
  verifLogin(userID, password, link) {
    return this.db.collection(`Customers`)
      .snapshotChanges().subscribe(res => {
        res.map(test => {
          if (password === test.payload.doc.data()["password"] && (userID === test.payload.doc.data()["customerID"] ))  {
            console.log("yeeesss");
            this.router.navigate([`chat/` + link], { state: { who: true, id: test.payload.doc.id } });
          }
          else {
            console.log("noooo");

          }
        })
        this.error("user id or password aren't correct")

        // if (res.length > 0) {
        //   console.log("aaaaaaaaaa");

        //   this.router.navigate([`chat/` + link])
        //   console.log("aaaaaaaaaa");

        //   res.map(e => {
        //     console.log("zzzzzzzzzzzzzzzz");

        //     this.router.navigate([`chat/` + link], { state: { who: true, id: e.payload.doc.id } });
        //   })


        // }
        // else {
        //   this.error("user id or password aren't correct")
        //   console.log("aaaazaa");

        // }
      });
  }
}
