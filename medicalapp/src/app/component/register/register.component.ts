import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
//import { AuthService } from 'src/app/shared/auth.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Mregister } from 'src/app/model/mregister';
import{SregisterService} from 'src/app/shared/sregister.service';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata ={name2:"",email2:"",password2:""};
  submit=false;
  errorMessage="";
  signUpForm = this.fb.group(
    {
      usernamev: ['', Validators.required],
      phonenumberv: ['', Validators.required],
      emailv: ['', [Validators.required]],
      passwordv: ['', Validators.required],
      confirmPasswordv: ['', Validators.required],
    },
    { validators: passwordsMatchValidator() }
  );
  get usernamev() {
    return this.signUpForm.get('usernamev');
  }
  get emailv() {
    return this.signUpForm.get('emailv');
  }
  get passwordv() {
    return this.signUpForm.get('passwordv');
  }
  get confirmPasswordv() {
    return this.signUpForm.get('confirmPasswordv');
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
  constructor(private auth: AuthService, 
    private data: SregisterService, 
     private fb: NonNullableFormBuilder,
     private router: Router,
     private toast: HotToastService,) { }
  ngOnInit(): void {
    this.getAlluserregisterdata();
  }
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
  // addregisterdata() {
  //   if (this.username == '' || this.phonenumber == '' || this.email == '' || this.password == '' || this.confirmpassword=='') {
  //     alert('Fill all input fields');
  //     return;
  //   }

  //   this.registerObj.id = '';
  //   this.registerObj.username = this.username;
  //   this.registerObj.phonenumber = this.phonenumber;
  //   this.registerObj.email = this.email;
  //   this.registerObj.password = this.password;
  //   this.registerObj.confirmpassword = this.confirmpassword;

  //   this.data.addregisterdata(this.registerObj);

  // }
  
  submit1() {
    const { usernamev,phonenumberv, emailv, passwordv ,confirmPasswordv} = this.signUpForm.value;

    if (!this.signUpForm.valid || !usernamev || !phonenumberv || !emailv|| !passwordv || !confirmPasswordv) {
      return;
    }
    
    this.registerObj.id = '';
    this.registerObj.username = this.username;
    this.registerObj.phonenumber = this.phonenumber;
    this.registerObj.email = this.email;
    this.registerObj.password = this.password;
    this.registerObj.confirmpassword = this.confirmpassword;

    this.data
    .addregisterdata(this.registerObj)
 
      // switchMap(({ user: { uid } }) =>
      //   this.usersService.addUser({ uid, email, displayName: name })
      // ),
      this.toast.observe({
        success: 'Congrats! You are all signed up',
        loading: 'Signing up...',
       // error:  'wrong'
       error:(err: any)=>`${err?.message}`
      
      })
      this.router.navigate(['/login']);

  }
  
}
