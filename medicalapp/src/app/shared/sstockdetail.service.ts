import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import { Mstockdetail } from '../model/mstockdetail';

@Injectable({
  providedIn: 'root'
})
export class SstockdetailService {

  constructor(private afs : AngularFirestore) { }

  addstockdetaildata(stockd : Mstockdetail) {   
    stockd.id = this.afs.createId();
     return from (this.afs.collection('/Stockdetail').add(stockd)).pipe();
   }

   getAllstockdetaildata() {
     return this.afs.collection('/Stockdetail').snapshotChanges();
   }

   deletestockdetail(stockd : Mstockdetail) {
    this.afs.doc('/Stockdetail/'+stockd.id).delete();
 }

 updatestockdetail(stockd : Mstockdetail){
  this.afs.doc('/Stockdetail' + stockd.id).update(stockd);
}
}
