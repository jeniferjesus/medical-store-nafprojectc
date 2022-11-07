import { Component, OnInit } from '@angular/core';
import { Bpproducts } from 'src/app/model/bpproduct';
import { Diabetsproduct } from 'src/app/model/diabets';
import { Feverproduct } from 'src/app/model/fever';
import { products } from 'src/app/model/products';
import { Throatproduct } from 'src/app/model/throat';
import { Vitaminproduct } from 'src/app/model/vitamin';

@Component({
  selector: 'app-categoriespage',
  templateUrl: './categoriespage.component.html',
  styleUrls: ['./categoriespage.component.css']
})
export class CategoriespageComponent implements OnInit {
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
