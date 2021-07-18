import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  status:any
  medicines=[]
  constructor(private hc:HttpClient) {
    if (localStorage.getItem("name")!=null)
    {
      this.status=true
    }
    else{
      this.status=false
    }
    
   }

   userLogout(){
    this.status=false;
    localStorage.clear()
  }

  registerUser(userObj):Observable<any>
  { 
    return this.hc.post<any>("/user/createuser",userObj)
  }

  onlogin(usercredentials):Observable<any>
  { 
    return this.hc.post("/user/login",usercredentials)
  }
 
  onMed(category):Observable<any>
  { console.log(category)
    return this.hc.get(`/user/medicines/${category}`)
  }

  onHealth(category):Observable<any>
  { console.log(category)
    return this.hc.get(`/user/health/${category}`)
  }

  medsData(meds)
  {
    this.medicines=meds
  }

  medicinesByCat()
  {
    return this.medicines
  }

  pushToCart(proObj):Observable<any>{
    console.log("in card ts",proObj)
    return this.hc.post("/user/add-to-cart",proObj)
  }

  getCartProducts(username):Observable<any>{
    console.log(username)
    return this.hc.get(`/user/getCart/${username}`)
  }

  updateCart(name,updatedCart):Observable<any>
{
  return this.hc.put(`/user/updateProduct/${name}`,updatedCart)
}
}
