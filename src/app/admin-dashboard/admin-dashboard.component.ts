import { Agent } from './../model/agent';
import { FirstServiceService } from './../chatServices/first-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { url } from 'node:inspector';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  userID: String = '';
  password: String = '';
  url: string = ''
  companiesList = [];
  agents = []

  constructor(public servi: FirstServiceService,
    public router: Router, public db: AngularFirestore,
    private notif: NotificationsService
  ) {



  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    var companyLink: string
    //1-fel lawel ntala3 el link ou el el lista mta3 el agentch .. ntale3ha bel id mta3 el auth 
    //2-lazem ntala3 el lista mta3 el agentch bech najem naamal 3laha modufication ki nzid agent
    this.db.collection('companies').doc(this.servi.userID).ref.get()
    .then(doc => {
      if (doc.exists) {
        companyLink = doc.data()["link"]
        this.agents = doc.data()["agents"]
        console.log(companyLink);
        if (this.url === "") {
          this.url = "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
        }
        var data: Agent = { url: this.url, userID: form.value.userID, password: form.value.password, link: doc.data()["link"]}
   this.servi.addAgent(data)
      .then(ag => {
        this.agents.push(ag.id)
        this.servi.updateCompany(this.servi.userID, this.agents)
          .then(done => {
            this.success("Agent successfulu added")
            form.resetForm()
          })
          .catch(err => console.log(err))


      })
      .catch(err => console.log(err))
      }
      else {
        console.log("There is no document!");
      }
    })
    .catch(function (error) {
      console.log("There was an error getting your document:", error);
    });


   
    // console.log(data);

    // this.servi.addAgent(data)
    //   .then(ag => {
    //     this.agents.push(ag.id)
    //     this.servi.updateCompany(this.servi.userID, this.agents)
    //       .then(done => {
    //         this.success("Agent successfulu added")
    //         form.resetForm()
    //       })
    //       .catch(err => console.log(err))


    //   })
    //   .catch(err => console.log(err))
  }
  success(msg) {
    this.notif.success('success', msg, {
      position: ["bottom", "left"],
      timeOut: 4000,
      animate: 'fade',
      showProgressBar: false
    });
  }
}

