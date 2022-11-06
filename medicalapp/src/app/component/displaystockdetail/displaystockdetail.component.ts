import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Mstockdetail } from 'src/app/model/mstockdetail';
import { SstockdetailService } from 'src/app/shared/sstockdetail.service';

@Component({
  selector: 'app-displaystockdetail',
  templateUrl: './displaystockdetail.component.html',
  styleUrls: ['./displaystockdetail.component.css']
})
export class DisplaystockdetailComponent implements OnInit {
  searchtext:any;
  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor( 
    private data: SstockdetailService, 
     private fb: NonNullableFormBuilder,
     private router: Router,
     private toast: HotToastService) { }

  ngOnInit(): void {
    this.getAllstockdetaildata();
  }

  stockList: Mstockdetail[] = [];
  stockObj: Mstockdetail = {
    id: '',
    stockid : '',
    stockname: '',
    quantity : '',
    mfgdate : '',
    exptdate:'',
  };
  id: string = '';
  stockid: string = '';
  stockname: string = '';
  quantity: string = '';
  mfgdate : string='';
  exptdate : string='';
  getAllstockdetaildata() {

    this.data.getAllstockdetaildata().subscribe((res: any[]) => {
      this.stockList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, () => {
      alert('Error while fetching student data');
    })
}

deletestockdetail(stockd : Mstockdetail) {
  if (window.confirm('Are you sure you want to Delete ' + stockd.stockid + ' detail?')) {
    this.data.deletestockdetail(stockd);
  }
}

// updateusermedicine(uapplymedicine : Userapplymedicine) {
//   this.data.updateusermedicine(uapplymedicine);
//   // this.data.updateusermedicine = Object.assign({}, uapplymedicine);
// }


}
