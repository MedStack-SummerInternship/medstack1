import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  meds=[]
  type:string
  searchItem:string="";
  constructor(private dsobj:UserService,private route: ActivatedRoute,private router:Router) { 
    this.type=this.route.snapshot.params.type
    console.log(this.type)
    this.dsobj.onMed(this.type).subscribe(
      res=>{
        this.meds=res.message;
        console.log(this.meds)
        //this.dsobj.medsData(this.meds)
        //console.log(res.type)
       
      },
      err=>{console.log("error in ayurvedic",err)}
    )
  }

  ngOnInit(): void {
  }
cartObj:any;
  onCart(product){
    if(localStorage.getItem("email")==null)
    {alert("Signin to add to cart")
    this.router.navigateByUrl("login");
  }
  else
  {  this.cartObj={"name":localStorage.getItem("name"),
                    "email":localStorage.getItem("email"),
                    "productObj":product}
      console.log("in card ts",this.cartObj)
    this.dsobj.pushToCart(this.cartObj).subscribe(
      res=>{alert(res.message)
      },
      err=>{console.log("error in pushing to cart",err)}
    )
  }
  }




}
