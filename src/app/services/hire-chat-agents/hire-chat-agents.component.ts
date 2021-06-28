import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-chat-agents',
  templateUrl: './hire-chat-agents.component.html',
  styleUrls: ['./hire-chat-agents.component.css']
})
export class HireChatAgentsComponent implements OnInit {
myList = [
{cost:"Hourly Rate",direct:"$20.00 per hour",ca:"$1 per hour"},
{cost:"Recruitment + HR",direct:"$1.40 per hour (@ 7%)",ca:"Included"},
{cost:"Training",direct:"$0.40 per hour (@ 2%)",ca:"Included"},
{cost:"Benefits (health, dental etc)",direct:"$7.00 per hour (@ 35%)",ca:"Included"},
{cost:"Overhead (office, equipment etc)",direct:"$2.40 per hour (@ 12%)",ca:"Included"},
{cost:"Payroll Tax",direct:"$2.40 per hour (@ 12%)",ca:"Included"},
{cost:"Absences (vacation, holiday & sick)",direct:"$2.60 per hour (@ 13%)",ca:"Included"}

];
  constructor() { }

  ngOnInit(): void {
  }

}
