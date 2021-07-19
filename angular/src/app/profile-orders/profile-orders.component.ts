import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.css']
})
export class ProfileOrdersComponent implements OnInit {
  cart:any
  orderStatus:any=false
  
  constructor(public dsobj:UserService) {
    this.dsobj.orders(localStorage.getItem("email")).subscribe(
      res=>{
        this.cart=res.message
        if(this.cart!="Order empty")
          this.orderStatus=true
        console.log(res.message)
      },
      err=>{console.log("error in profile orders=",err)}
    )
   }

  ngOnInit(): void {
    
  
  }

}
