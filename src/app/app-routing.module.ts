import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ConfigComponent } from './config/config.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { HireChatAgentsComponent } from './services/hire-chat-agents/hire-chat-agents.component';
import { ChatRoomComponent } from './services/chat-room/chat-room.component';
import { WhyComponent } from './why/why.component';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LogInComponent } from './log-in/log-in.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
const redirect = () => redirectUnauthorizedTo(['signin']);
const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'why', component: WhyComponent

}
  ,
{
  path: 'services/get-chat-room', component: ChatRoomComponent

}
  ,
{
  path: 'services/hire-chat-agents', component: HireChatAgentsComponent

},
{
  path: 'register', component: SignUpComponent

},
{
  path: 'signin', component: LogInComponent

},
{
  path: 'configure',
  component: ConfigComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirect }

},
{
  path: 'chat/:company', component: ChatComponent

},
{
  path: 'chat/:company/login', component: LogincustomerComponent

},
{
  path: 'admin', component: AdminComponent

},
{
  path: 'dashboard', component: AdminDashboardComponent

},
{
  path: '**', component: NotFoundComponent

},

{
  path: 'notfound', component: NotFoundComponent

},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
