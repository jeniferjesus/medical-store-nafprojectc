import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import {AngularFirestore} from '@angular/fire/compat/firebase.app';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
import { from, Observable } from 'rxjs';
import { Mregister } from '../model/mregister';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage,  
    private auth1 : AngularFireAuth,private auth: Auth,
    private router : Router) { }
   // add student
  //  addregisterdata(registerdata : Mregister) {
  //   //registerdata.id = this.afs.createId();
  //   return this.afs.collection('/register').add(registerdata);
  // }

  // // get all students
  // getAllregisterdata() {
  //   return this.afs.collection('/register').snapshotChanges();
  // }


  // signUp(email: string, password: string): Observable<any>{
  //   return from(createUserWithEmailAndPassword(this.auth, email, password));
  // }

  // login(email: string, password: string): Observable<any> {
  //   return from(signInWithEmailAndPassword(this.auth, email, password));
  // }
  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe();
    // return from(fetchSignInMethodsForEmail(email)).pipe();
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
   }
   checkEmailExist()  {
    var user = this.auth.currentUser;

    if (user) {
      alert("already exists")
      // User is signed in.
    } else {
      alert("no user")
      // No user is signed in.
    }
    }

    isLoggedIn(){
      var token = localStorage.getItem("Email");
      if (token !== undefined && token !== "" && token != null) {
        return true;
      }
        return false;
    }

}
