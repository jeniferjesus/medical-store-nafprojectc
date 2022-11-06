import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Mstockdetail } from 'src/app/model/mstockdetail';
import { AuthService } from 'src/app/shared/auth.service';
import { SstockdetailService } from 'src/app/shared/sstockdetail.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  //emailRegexPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  submit=false;
  loading=false;
  patternname="^[a-zA-Z]+$";

  numpattern="/^[0-9]+$/";

  stockform = new FormGroup({

     name : new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern(this.patternname)]),

     stock_id: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(2),Validators.maxLength(6)]),
    quantity: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(1),Validators.maxLength(6)]),
  });
  

  constructor(
    private auth: AuthService, 
    private data: SstockdetailService, 
     private fb: NonNullableFormBuilder,
     private router: Router,
     private toast: HotToastService
  ) { }
  
  ngOnInit(): void {

  }
//  onsubmit(){
//   this.loading=true;
//  }
stockList: Mstockdetail[] = [];
  stockObj: Mstockdetail = {
    id : '',
    stockid : '',
    stockname: '',
    quantity : '',
    mfgdate :'' ,
    exptdate : ''
  };
   public date=new Date();
  id: string = '';
  stockid : string= '';
  stockname: string= '';
  quantity : string= '';
  mfgdate : string= '';
  exptdate : string= '';
  
  getAllstockdetaildata() {

    this.data.getAllstockdetaildata().subscribe(res => {

      this.stockList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }
  
  resetForm() {
    this.id = '';
    this.stockid='';
    this.stockname='';
    this.quantity='';
    this.mfgdate='';
    this.exptdate= '';
  }
  
  addstockdetail() {
    //debugger
    const { stock_id, name,quantity } = this.stockform.value;
    if (!this.stockform.valid || !stock_id || !name || !quantity) {
      alert("fill all details");
      return;
    }
    this.stockObj.id = '';
    this.stockObj.stockid = this.stockid;
    this.stockObj.stockname = this.stockname;
    this.stockObj.quantity = this.quantity;
    this.stockObj.mfgdate = this.mfgdate
    this.stockObj.exptdate = this.exptdate;
    console.log(this.stockObj);
    this.data
    .addstockdetaildata(this.stockObj)
    .pipe(
      this.toast.observe({      
        success: 'Successfully created a '+this.stockObj.stockname+'.',
        loading: 'loading ...',
        // error:  'wrong'    
       error:(err: any)=>`${err?.message}`,
      })  
      )
      .subscribe(() => {
       this.router.navigate(['/analysis']);
      });
  }

 
}
