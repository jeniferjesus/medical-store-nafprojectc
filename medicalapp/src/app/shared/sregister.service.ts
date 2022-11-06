import { Injectable } from '@angular/core';
import { checkActionCode, EmailAuthCredential, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { from, Observable } from 'rxjs';
// import { FileMetaData } from '../model/file-meta-data';
import { Mregister } from '../model/mregister';

import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';
import { doc, Firestore, setDoc,getDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class SregisterService {
  tutorialsRef!: AngularFirestoreCollection<Mregister>;

  constructor(private afs : AngularFirestore,private db:AngularFireStorage,private firestore: Firestore, private fireStorage : AngularFireStorage) { }
  addregisterdata(dregister : Mregister) {   
    dregister.id = this.afs.createId();
    return from (this.afs.collection('/Registerdata').add(dregister)).pipe();
  }
  getAlluserregisterdata() {
    return this.afs.collection('/Registerdata').snapshotChanges();
  }
 
  deleteuserregister(dregister : Mregister) {
    this.afs.doc('/Registerdata/'+dregister.id).delete();
 }
 updateuserregister(dregister : Mregister){
  this.afs.doc('/Registerdata' + dregister.id).update(dregister);
}


  // login(email: string, password: string){
  //   return from(signInWithEmailAndPassword(this.addregisterdata, email, password));
    
  // }
  // addUser(user: Mregister) {
  //   const ref = doc(this.firestore, 'users', user.id);
  //   return from(setDoc(ref, user));
  // }
 
}
