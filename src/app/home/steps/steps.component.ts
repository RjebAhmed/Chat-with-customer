import { element } from 'protractor';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  constructor() { }
  @ViewChildren('select') faq: QueryList<ElementRef>;
  @ViewChildren('myimg') myImg: QueryList<ElementRef>;

  x = 0;
  faqs = [
    { faqTitle: "Create account for your company", faqBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem aliquid at assumenda quae incidunt impedit voluptatum vero voluptatem expedita magni." },
    { faqTitle: "Customise your chat-room ", faqBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem aliquid at assumenda quae incidunt impedit voluptatum vero voluptatem expedita magni." },
    { faqTitle: "Add your agents", faqBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem aliquid at assumenda quae incidunt impedit voluptatum vero voluptatem expedita magni." },
    { faqTitle: "Setup your chatroom", faqBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem aliquid at assumenda quae incidunt impedit voluptatum vero voluptatem expedita magni." }
  ];
  myimgs = [
    "https://firebasestorage.googleapis.com/v0/b/chat-cdb22.appspot.com/o/im1.png?alt=media&token=a53d06c8-9cfb-4426-b0db-92c9ebc5343a",
    "https://firebasestorage.googleapis.com/v0/b/chat-cdb22.appspot.com/o/im2.png?alt=media&token=db2a38e0-c07c-4491-8835-be4ea27591b8",
    "https://firebasestorage.googleapis.com/v0/b/chat-cdb22.appspot.com/o/im3.png?alt=media&token=26f0f5d5-9321-4c4c-a649-b368f818a77e"
  ];
  ngOnInit(): void {

  }
  hideme(i) {
    this.myImg.toArray()[0].nativeElement.src = this.myimgs[i];
    this.faq.toArray().forEach((item) => {
      if (item == this.faq.toArray()[i]) {
        item.nativeElement.style.display = "flex"

      } else {
        item.nativeElement.style.display = "none"

      }
    })

  }

}
