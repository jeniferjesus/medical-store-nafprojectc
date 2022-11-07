import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fever, Feverproduct } from 'src/app/model/fever';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-fever',
  templateUrl: './fever.component.html',
  styleUrls: ['./fever.component.css']
})
export class FeverComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  feverproducts:any=Feverproduct;
  feverproduct:Fever|undefined;


  ngOnInit(): void {
    debugger
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('feverproductId'));
  
    // Find the product that correspond with the id provided in route.
    // this.bpproduct = Bpproducts.find(bpproduct => bpproduct.id === productIdFromRoute);
    this.feverproduct = Feverproduct.find(feverproduct => feverproduct.id === productIdFromRoute);
  }

  constructor(private route: ActivatedRoute,
    private cartservice:CartService) { }
    itemcount()
    {
      return this.cartservice.itemcount();
    }
    addToCart(bpproducts:any)
    {
      // console.log(this.product);
      this.cartservice.addToCart(bpproducts);
      window.alert("your product has been added to the cart!");
    }

}
