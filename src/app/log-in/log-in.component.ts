import { FirstServiceService } from './../chatServices/first-service.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email:String='';
  password:String='';
  
  constructor(public serv:FirstServiceService,
    private router:Router,
    private notif: NotificationsService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    let formData=form.value;
    console.log(formData);
    this.serv.login(formData.email,formData.password).then(user => this.router.navigate(['dashboard'])
    ).catch(err=>{
      console.log(err);
      
      this.notif.error('error', err.message, {
        position: ["bottom", "left"],
        timeOut: 5000,
        animate: 'fade',
        showProgressBar: true
      });
    }    )
    

  }
}
