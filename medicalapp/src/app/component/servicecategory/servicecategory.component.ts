import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/model/products';
import { Bpproducts } from 'src/app/model/bpproduct';
import { Diabetsproduct } from 'src/app/model/diabets';
import { Feverproduct } from 'src/app/model/fever';
import { Throatproduct } from 'src/app/model/throat';
import { Vitaminproduct } from 'src/app/model/vitamin';
@Component({
  selector: 'app-servicecategory',
  templateUrl: './servicecategory.component.html',
  styleUrls: ['./servicecategory.component.css']
})
export class ServicecategoryComponent implements OnInit {
   products:any=products;
  bpproducts:any=Bpproducts;
  Diabetsproducts:any=Diabetsproduct;
  feverproducts:any=Feverproduct;
  throatproducts:any=Throatproduct;
  vitaminproducts:any=Vitaminproduct;
  constructor() { }

  ngOnInit(): void {
  }

}
