import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bpproduct, Bpproducts } from 'src/app/model/bpproduct';
import { CartService } from 'src/app/shared/cart.service';
import{Products, products} from 'src/app/model/products';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.css']
})
export class BpComponent implements OnInit {

  // constructor() { }
  bpproducts:any=Bpproducts;
  bpproduct:Bpproduct|undefined;
 


  ngOnInit(): void {
    debugger
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('bpproductId'));
  
    // Find the product that correspond with the id provided in route.
    this.bpproduct = Bpproducts.find(bpproduct => bpproduct.id === productIdFromRoute);
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
