import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diabets, Diabetsproduct } from 'src/app/model/diabets';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-diabetespage',
  templateUrl: './diabetespage.component.html',
  styleUrls: ['./diabetespage.component.css']
})
export class DiabetespageComponent implements OnInit {
  
  // constructor() { }

  // ngOnInit(): void {
  // }
  Diabetsproduct:any=Diabetsproduct;
  Diabet:Diabets|undefined;
  // product: Products | undefined;
 


  ngOnInit(): void {
    debugger
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('diabetsproductId'));
  
    // Find the product that correspond with the id provided in route.
    this.Diabet = Diabetsproduct.find(Diabet => Diabet.id === productIdFromRoute);
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
