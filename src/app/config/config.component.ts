import { AngularFireAuth } from '@angular/fire/auth';
import { FirstServiceService } from './../chatServices/first-service.service';
import { Company } from './../model/company';
import { Component, OnInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { title } from 'node:process';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  msg = '';
  myList = [
    { optionName: "Vidoes and audio calls ", optionPrice: "50" },
    { optionName: "option option ", optionPrice: "30" },
    { optionName: "option option ", optionPrice: "15" },
    { optionName: "option option ", optionPrice: "10" }

  ];
  total = 500;
  @ViewChildren('selector') option: QueryList<ElementRef>;
  isUser: boolean = false

  constructor(public serv: FirstServiceService,
    public router: Router, private afAuth: AngularFireAuth,
    private notif: NotificationsService) { }
  ngOnInit(): void {


  }
  selectMe(i) {

    let price = this.myList[i].optionPrice;
    // Number('123')
    console.log(price);

    let item = this.option.toArray()[i].nativeElement.classList;
    if (!item.contains('selected')) {
      item.add("selected");
      this.total += Number(price);
    }
    else {
      item.remove("selected");
      this.total -= Number(price);



    }

  }
  startNow() {
    //nesta9blou el données men page el register ou nzid 3lahom el link ou baad nemchi l page el dashboard
    let company: Company = history.state.data.formData;
    company.link = this.msg;
    company.agents = []
    console.log(company);

    this.serv.addCompany(company, this.serv.userID)
      .then(() => this.router.navigate(['dashboard']))
      .catch((err) => console.log("errrrr ::" + err))










  }

}
