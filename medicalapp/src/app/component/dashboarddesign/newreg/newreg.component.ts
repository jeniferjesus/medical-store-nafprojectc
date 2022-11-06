import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newreg',
  templateUrl: './newreg.component.html',
  styleUrls: ['./newreg.component.css']
})
export class NewregComponent implements OnInit {
  
  patternname="^[a-zA-Z]+$";
   
  
  form = new FormGroup({
     name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.patternname),Validators.maxLength(15)]),
     n1: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.patternname),Validators.maxLength(15)]),
    phnm: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    m1: new FormControl('', [Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern('[0-9]*')]),
    m2: new FormControl('', [Validators.required,Validators.pattern(this.patternname)]),
    m3: new FormControl('', [Validators.required,Validators.pattern(this.patternname),Validators.maxLength(5),Validators.minLength(5)]),
    m4:new FormControl('', [Validators.required,Validators.pattern(this.patternname)]),
    m5:new FormControl('', [Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(3),Validators.minLength(3)]),
    m6:new FormControl('', [Validators.required,Validators.pattern(this.patternname)]),
  })


  constructor() { }

  ngOnInit(): void {
  }
  
  

}
