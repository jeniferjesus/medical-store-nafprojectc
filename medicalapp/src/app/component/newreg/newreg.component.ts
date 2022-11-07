import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators, NonNullableFormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Bpproduct } from 'src/app/model/bpproduct';
import { Products } from 'src/app/model/products';
import { Userapplymedicine } from 'src/app/model/userapplymedicine';
import { ApplymedicineserviceService } from 'src/app/shared/applymedicineservice.service';
import { AuthService } from 'src/app/shared/auth.service';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-newreg',
  templateUrl: './newreg.component.html',
  styleUrls: ['./newreg.component.css']
})
export class NewregComponent implements OnInit {
  product: Products | undefined;
  bpproducts:Bpproduct|undefined;
 item=this.cartservice.getItems();
  getItems()
    {
      // debugger
      console.log(this.cartservice.getItems());
      return this.cartservice.getItems(); 
    }
 
  patternname="^[a-zA-Z' ']+$";
  numpattern="/^[0-9]+$/";
  
  form = new FormGroup({
     name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.patternname),Validators.maxLength(15)]),
     n1: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.patternname),Validators.maxLength(15)]),
    phnm: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    m1: new FormControl('', [Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern('[0-9]*')]),
    m2: new FormControl('', [Validators.required,Validators.pattern(this.patternname)]),
    m3: new FormControl('', [Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(2),Validators.minLength(2)]),  
    m4:new FormControl('', [Validators.required,Validators.pattern(this.patternname)]),
    m5:new FormControl('', [Validators.required,Validators.maxLength(3),Validators.minLength(3)]),
    // m6:new FormControl('', [Validators.required,Validators.pattern(this.numpattern)]),
    m6: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(1),Validators.maxLength(5)]),
  })
  // create local data

quan: number =0;
second:number = 0;
sum:string='';
prize:number=10.6;
f:number=20;
s:number=10;
  constructor(private auth: AuthService, 
    private data: ApplymedicineserviceService, 
     private fb: NonNullableFormBuilder,
     private router: Router,
     private toast: HotToastService,
     private cartservice:CartService) { }

  
     ngOnInit(): void {
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
  resetForm() {
    this.id = '';
    this.username = '';
    this.email = '';
    this.phonenumber = '';
    this.availablemedicine = '';
    this.quantity='';
    this.amount = '';
    this.cardholdername = '';
    this.deborcrednumber='';
    this.expdate = '';
    this.cvv='';
  }
  addusermedicinedetail() {    
    const { name, phnm,email } = this.form.value; //, n1,m4,m1,m6,m3,m5
    if (this.form.valid || !name || !phnm || !email ) { //|| !n1 || !m4|| !m1 || !m6 || !m3 || !m5
      alert("fill all details");
      return;
    }
    this.usermedicineObj.id = '';
    this.usermedicineObj.email = this.email;
    this.usermedicineObj.username = this.username;
    this.usermedicineObj.availablemedicine = this.availablemedicine;
    this.usermedicineObj.phonenumber = this.phonenumber;

    this.usermedicineObj.expdate = this.expdate;
    this.usermedicineObj.quantity = this.quantity;
    this.usermedicineObj.amount = this.amount;
    this.usermedicineObj.cardholdername = this.cardholdername;
    this.usermedicineObj.deborcrednumber = this.deborcrednumber;
    console.log(this.usermedicineObj);
    this.data
    .addusermedicinedata(this.usermedicineObj)
    .pipe(
      this.toast.observe({      
        success: 'Congrats!'+this.usermedicineObj.username+' You are successfully applied',
        loading: 'loading ...',
        // error:  'wrong'    
       error:(err: any)=>`${err?.message}`,
      })  
      )
      .subscribe(() => {
       this.router.navigate(['/navbar']);
      });
  }
  onregister(employeeForm: NgForm) {
    if (employeeForm.value.id == null)
      this.data.addusermedicinedata(employeeForm.value);
      // this.router.navigate(['/navbar']);
    else
      this.data.updateusermedicine(employeeForm.value);
    // this.resetForm(employeeForm);
    this.toast.success('Submitted Succcessfully');
  }

  // let transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure: true,
  //   service: 'gmail',
  //   auth: {
  //     user: '*******@gmail.com',
  //     pass: '******'
  //   }
  // });
 

}
