import { FirstServiceService } from './../../chatServices/first-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

  constructor(public fs:FirstServiceService,public router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.fs.logout()
    this.router.navigate(['signin']);

  }
}
