import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:any
name:string;
products:[]
  constructor(private dsobj:UserService) { 
    this.dsobj.getCartProducts(localStorage.getItem("name")).subscribe(
      res=>{this.cart=res.message;
        console.log("in cart",this.cart)
     
      console.log(this.cart.cartProducts)
   },
      err=>{console.log("error in library",err)}

    )
}


  ngOnInit(): void {
    this.name=localStorage.getItem("name")
  }
updateCart:any;
  ondelete(ind)
  { console.log(this.cart.cartProducts,ind)
    this.products=this.cart.cartProducts
    console.log(this.products.splice(ind, 1));
    this.updateCart={"email":localStorage.getItem("email"),
    "name":localStorage.getItem("name"),
    "cartProducts":this.products
  }
    this.dsobj.updateCart(localStorage.getItem("name"),this.updateCart).subscribe
    (
      res=>{console.log(res.message)},
      err=>{console.log("error in deleting",err)}
    )
    console.log("ind deleting",this.products[ind])
  }
}
