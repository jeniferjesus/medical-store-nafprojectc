import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
//import { AuthService } from 'src/app/shared/auth.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Mregister } from 'src/app/model/mregister';
import { doc } from "firebase/firestore";


// try
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map, Observable, pipe, switchMap } from 'rxjs';
import { getDoc } from '@angular/fire/firestore';
//import { AuthService } from 'src/app/shared/auth.service';

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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form = new FormGroup({  
   email: new FormControl('', [Validators.required,Validators.email]),
   password:new FormControl ('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
  });
  registerdata: Mregister[] = [];
  registerdataObj: Mregister = {
    id: '',
    username: '',
    phonenumber: '',
    email: '',
    password: '',
    confirmpassword: '',
  
  };
  id: string = '';
  username: string = '';
  phonenumber: string = '';
  email:string='';
  password:string='';
  data: any;
  firestore: any;
  constructor(
    private auth : AuthService,
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    private db:AngularFireStorage,
  //  private usersService: UsersService,
    private fb: NonNullableFormBuilder,
  ) {}


  ngOnInit(): void {
    // this.auth.login(this.email,this.password);
    
    // this.email = '';
    // this.password = '';

  
  }
  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }
  );
  
 
  login(){
    // debugger
    if(this.email=="admin@gmail.com" && this.password=="12345678"){
      this.router.navigate(['/analysis']);
    }
  
    else{
    this.auth.login(this.email,this.password)
   .pipe(
    this.toast.observe({      
    success: 'Congrats! You are successfully loggedin',
    loading: 'Logging...',
   // error:  'wrong'    
   error:(err: any)=>`${err?.message}`,
  })  
  )
  .subscribe(() => {   
   this.router.navigate(['/categoriespage']);
  });
}
}  
   onSubmit() {  
    this.router.navigateByUrl('/loginregister');
} 
   
}
