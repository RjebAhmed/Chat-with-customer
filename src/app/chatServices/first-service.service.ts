import { Company } from './../model/company';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  userID = ""
  isUser: boolean = false

  constructor(public db: AngularFirestore, public auth: AngularFireAuth, private router: Router) {
    this.auth.user.subscribe(user => {
      if (user) {
        this.isUser = true
        this.userID = user.uid
      }
      else {
        this.isUser = false;
      }
    })
  }
  getCompanyAgents(comanyname: string,array):any {
    
    this.db.collection("Agents", ref => ref.where('link', "==", comanyname)).snapshotChanges().subscribe(res => {
      if (res.length > 0) {
       array= res.map(e => {

         return  {
           
            id:e.payload.doc.id,
            url:e.payload.doc.data()["url"],
            userID:e.payload.doc.data()["userID"]
          }
         

        })
      }
      else {
        console.log("Does not exist.");

      }
    });
  }
  logout() {
    this.auth.signOut()
  }
  companiesNames() {
    let array = []
    const collectionRef = this.db.collection('companies');
    const collectionInstance = collectionRef.valueChanges();
    collectionInstance.subscribe(ss => array = ss
    );
    return array
  }
  updateCompany(id, list) {
    return this.db.collection('companies').doc(id).update({ agents: list });
  }

  addCompany(company, id) {
    return this.db.collection('companies').doc(id).set(company);
  }
  addAgent(agent) {
    return this.db.collection('Agents').add(agent);
  }
  registerCompany(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  addCustomer(customer) {
    return this.db.collection('Customers').add(customer);
  }
  verifLogin(userID, password, link) {
    return this.db.collection(`Customers`, ref => ref.where('password', "==", password).where('userID', "==", userID))
      .snapshotChanges().subscribe(res => {
        if (res.length > 0) {
          this.router.navigate([`chat/` + link])

          res.map(e => {
            this.router.navigate([`chat/` + link], { state: { who: true,id:e.payload.doc.id } });
          })


        }
        else {
          console.log("Does not exist.");
          console.log(res);

        }
      });
  }
  addConversation(conv) {
    return this.db.collection('Conversations').add(conv);
  }
}

