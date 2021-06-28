import { AngularFireAuth } from '@angular/fire/auth';
import { Company } from './../model/company';
import { Router, } from '@angular/router';
import { FirstServiceService } from './../chatServices/first-service.service';
import { Component, OnInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { NotificationsService } from 'angular2-notifications';
import { error } from 'node:console';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  companyName: String = '';
  email: String = '';
  password: String = '';
  errMsg = '';
  constructor(public serv: FirstServiceService,
    public router: Router,
    private notif: NotificationsService) {

  }

  ngOnInit(): void {
    console.log(this.serv.isUser);

  }
  onSubmit(form: NgForm) {

    let formData = form.value;
    console.log(formData);
    if (!this.companyName || !this.email || !this.password) {
      this.error("all fields must be filled")
    } else {
      this.serv.registerCompany(formData.email, formData.password)
        .then(done => { this.router.navigate(['configure'], { state: { data: { formData } } }) })
        .catch(err => { this.error(err.message) })



    }


    // this.serv.registerCompany(formData.email, formData.password).catch(err => {
    //   this.notif.error('error', err.message, {
    //     position: ["bottom", "left"],
    //     timeOut: 5000,
    //     animate: 'fade',
    //     showProgressBar: true
    //   });
    // }
    // ).then(done => {
    //   
    //   console.log("great !!")


    // }

    // )
  }
  error(msg) {
    this.notif.error('error', msg, {
      position: ["bottom", "left"],
      timeOut: 5000,
      animate: 'fade',
      showProgressBar: true
    });
  }
}
