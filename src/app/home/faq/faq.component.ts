import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  @ViewChildren('selector') faqs: QueryList<ElementRef>;
  constructor(elementRef: ElementRef) { }
  mylist = [
    { faqHead: "What hours are the chat agents available?", faqBody: "Our agents are always available to answer chats on your behalf. We never close. We provide live answering services 24 hours a day, 7 days a week, 365 days a year." },
    { faqHead: "Why should I hire chat agents for my website?", faqBody: "Many businesses don’t have the staff available to have a representative ready to answer incoming chats at all hours of the day. When you hire our team of highly trained chat agents, your visitors will be able to chat with a real live person when you or your staff are unavailable. You can have our agents answer all incoming chats or keep you covered only when your staff is unavailable to answer. You set the schedule and we follow it!" },
    { faqHead: "What if agents are unable to answer customers questions?", faqBody: "There will be times when our agents won’t know the answer to a question and we will need more information from you or your team. In these cases, our agents are trained to get the name, email and phone number from the visitor and explain that we will follow up with them as soon as possible regarding their question or issue. If the issue is urgent, we will contact you right away using the contact information you provided when signing up for the service. We can then add any information we learn during this process to the Knowledge Base for your site. If the same issue or question arises in the future, our agents will be prepared with the proper answer. Our agents are trained to get the correct information to your visitors. We never guess the answer." },
    { faqHead: "Can agents proactively engage with visitors?", faqBody: "Absolutely. We will help you set up triggers to automatically engage with visitors based on the page they are on. We can work together to optimize the engagement rate and ensure the right message is sent at the right time." },

  ];




  hideme(i) {

    this.faqs.toArray().forEach((item) => {
      item.nativeElement.children[1].style.display = "none";
      item.nativeElement.children[0].children[1].style.transform = "rotate(90deg)";

    })
    this.faqs.toArray()[i].nativeElement.children[1].style.display = "flex";
    this.faqs.toArray()[i].nativeElement.children[0].children[1].style.transform = "rotate(45deg)";
  }



}

