import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Mregister } from 'src/app/model/mregister';
import { SregisterService } from 'src/app/shared/sregister.service';

@Component({
  selector: 'app-display-resigerdetail',
  templateUrl: './display-resigerdetail.component.html',
  styleUrls: ['./display-resigerdetail.component.css']
})
export class DisplayResigerdetailComponent implements OnInit {
searchtext:any;
  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor( 
    private data: SregisterService, 
     private fb: NonNullableFormBuilder,
     private router: Router,
     private toast: HotToastService) { }

  ngOnInit(): void {
    this.getAlluserregisterdata();
  }

  registerList: Mregister[] = [];
  registerObj: Mregister = {
    id: '',
    username : '',
    phonenumber: '',
    email : '',
    password : '',
    confirmpassword:''
  };
  id: string = '';
  username: string = '';
  phonenumber: string = '';
  email: string = '';
  password: string = '';
  confirmpassword:string='';
  getAlluserregisterdata() {

    this.data.getAlluserregisterdata().subscribe(res => {

      this.registerList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }

  deleteuserregister(dregister : Mregister) {
  if (window.confirm('Are you sure you want to Delete ' + dregister.username + 'detail ?')) {
    this.data.deleteuserregister(dregister);
  }
}

updateuserregister(dregister : Mregister) {
  this.data.updateuserregister(dregister);
  // this.data.updateusermedicine = Object.assign({}, uapplymedicine);
}


}
