import { FirstServiceService } from './chatServices/first-service.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StepsComponent } from './home/steps/steps.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { BenefitsComponent } from './home/benefits/benefits.component';
import { XxxUsersComponent } from './home/xxx-users/xxx-users.component';
import { ChatToolsComponent } from './home/chat-tools/chat-tools.component';
import { CustomerReviewsComponent } from './home/customer-reviews/customer-reviews.component';
import { FAQComponent } from './home/faq/faq.component';
import { WhyComponent } from './why/why.component';
import { ServicesComponent } from './services/services.component';
import { ChatRoomComponent } from './services/chat-room/chat-room.component';
import { HireChatAgentsComponent } from './services/hire-chat-agents/hire-chat-agents.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigComponent } from './config/config.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ChatComponent } from './chat/chat.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire";
import { LogInComponent } from './log-in/log-in.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardNavComponent } from './admin-dashboard/dashboard-nav/dashboard-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { SimpleNotificationsModule } from "angular2-notifications";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StepsComponent,
    WelcomeComponent,
    BenefitsComponent,
    XxxUsersComponent,
    ChatToolsComponent,
    CustomerReviewsComponent,
    FAQComponent,
    WhyComponent,
    ServicesComponent,
    ChatRoomComponent,
    HireChatAgentsComponent,
    ConfigComponent,
    ChatComponent,
    SignUpComponent,
    LogInComponent,
    AdminDashboardComponent,
    DashboardNavComponent,
    NotFoundComponent,
    AdminComponent,
    LogincustomerComponent
  ],
  imports: [
    BrowserModule, 
    SimpleNotificationsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),



  ],
  providers: [FirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
