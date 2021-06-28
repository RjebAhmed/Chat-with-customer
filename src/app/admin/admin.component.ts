import { FirstServiceService } from './../chatServices/first-service.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userID: String = '';
  password: String = '';
  agentsLogins = []
  agentsIds = []
  companies = []

  constructor(private db: AngularFirestore, 
    private fs: FirstServiceService, 
      private notif: NotificationsService, public router: Router) {

  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.router.navigateByUrl[('register')]

    let user = form.value["userID"]
    let pass = form.value["password"]
    let id;
    this.db.collection(`Agents`)
      .snapshotChanges().subscribe(res=>{
         res.map(e => {
        if (e.payload.doc.data()["userID"]==user&&pass==e.payload.doc.data()["password"]) {
        }
            this.router.navigate(['chat/' + e.payload.doc.data()["link"]], { state:  { who: false,id:e.payload.doc.id } });
          })
      })
            this.error("user id or password aren't correct")        

    }
 

    //   this.error("user id or password aren't correct")        }
    //   });
    // }

  error(msg) {
    this.notif.error('error', msg, {
      position: ["bottom", "left"],
      timeOut: 4000,
      animate: 'fade',
      showProgressBar: false
    });
  }
}
