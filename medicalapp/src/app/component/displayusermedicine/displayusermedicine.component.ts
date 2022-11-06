import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Userapplymedicine } from 'src/app/model/userapplymedicine';
import { ApplymedicineserviceService } from 'src/app/shared/applymedicineservice.service';
import { __values } from 'tslib';
// import { Item } from '../../model/userapplymedicine';
@Component({
  selector: 'app-displayusermedicine',
  templateUrl: './displayusermedicine.component.html',
  styleUrls: ['./displayusermedicine.component.css']
})
export class DisplayusermedicineComponent implements OnInit {
  searchtext:any;
  constructor( 
    private data: ApplymedicineserviceService, 
     private fb: NonNullableFormBuilder,
     private router: Router,
     private toast: HotToastService) { }

  ngOnInit(): void {
    this.getAllusermedicinedata();
  }

  usermedicineList: Userapplymedicine[] = [];
  usermedicineObj: Userapplymedicine = {
    id: '',
    username : '',
    phonenumber: '',
    email : '',
    availablemedicine : '',
    quantity:'',
    amount : '',
    cardholdername : '',
    deborcrednumber:'',
    expdate : '',
    cvv:''
  };
  id: string = '';
  username: string = '';
  phonenumber: string = '';
  email: string = '';
  availablemedicine : string='';
  quantity : string='';
  amount : string='';
  cardholdername: string='';
  deborcrednumber : string='';
  expdate : string='';
  cvv : string='';
  getAllusermedicinedata() {
    this.data.getAllusermedicinedata().subscribe(res => {
      this.usermedicineList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })
}

deleteusermedicine(uapplymedicine : Userapplymedicine) {
  if (window.confirm('Are you sure you want to Delete ' + uapplymedicine.username + '  detail?')) {
    this.data.deleteusermedicine(uapplymedicine);
  }
}

updateusermedicine(uapplymedicine : Userapplymedicine) {
  this.data.updateusermedicine(uapplymedicine);
  // this.data.updateusermedicine = Object.assign({}, uapplymedicine);
}


}
