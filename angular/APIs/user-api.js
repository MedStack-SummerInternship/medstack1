//creating mini express
const exp=require('express')
const userapi=exp.Router(); //creates mini route 


userapi.use(exp.json())
//import mongoclient
const mc=require("mongodb").MongoClient;

//importing bcryptjs
const bcryptjs=require("bcryptjs")

//importing jsonwebtokens
const jwt=require("jsonwebtoken")

//importing express-aync-handler to handle errors
const expresserr=require("express-async-handler")


//adding users
userapi.post("/createuser",expresserr(async(req,res)=>{
    let colobj=req.app.get("userobj")
    let newuser=req.body

    console.log(newuser)
    let user = await colobj.findOne({email:newuser.email})
    if(user==null)
    {   //hashing the password
        let hashedPass= await bcryptjs.hash(newuser.password,7)

        //replace user's password with hashed password
        let user={"email":newuser.email,"name":newuser.username,"password":hashedPass}
       
        console.log(user)
        await colobj.insertOne(user)
        res.send({message:"user created"})
    }
    else{
        res.send({message:"account registered with this mail id already exists "})
    }
}))

//login using async await
userapi.post("/login",expresserr(async(req,res)=>{
    let colobj=req.app.get("userobj")
    let userobj=req.body
    let user =await colobj.findOne({email:userobj.email})
    if(user==null)
    {
        res.send({message:"no account withis maid id register to login"})
    }
    else{
        //compare password
        let r= await bcryptjs.compare(userobj.password,user.password)
        if(r==false)
        {res.send({message:"INVALID PASSWORD"})}
        else{
            res.send({message:"success",username:user.name})
        }
    }
}))


//return health products according to category

userapi.get("/medicines/:name",expresserr(async(req,res)=>{
    let hlobj=req.app.get("medobj")
    let cat=req.params.name
    //console.log(cat)
    let products= await hlobj.find({type:cat}).toArray();
    //console.log(products)
    res.send({message:products,"type":cat})
}))

userapi.get("/health/:name",expresserr(async(req,res)=>{
    let hlobj=req.app.get("healthobj")
    let cat=req.params.name
    //console.log(cat)
    let products= await hlobj.find({type:cat}).toArray();
    //console.log(products)
    res.send({message:products,"type":cat})
}))


//add to cart route
userapi.post("/add-to-cart",expresserr(async(req,res)=>{
    let proObj=req.app.get("cartObj")
    let newobj=req.body
    let userProColObj=await proObj.findOne({name:newobj.name})
    if(userProColObj==null)
    {
        //create new obj and insert products into a list and add this obj to collection
        let products=[]
        products.push(newobj.productObj)
        let newobjtocol={name:newobj.name,email:newobj.email,cartProducts:products}
        await proObj.insertOne(newobjtocol)
        res.send({message:" product added to cart"})
    }
    else{
        //push new product to existing products array
        userProColObj.cartProducts.push(newobj.productObj)
        console.log(userProColObj)
        //update document
        await proObj.updateOne({name:newobj.name},{$set:{...userProColObj}})
        res.send({message:" product added to cart"})
    }
}))


//geetting products added to cart by user
userapi.get("/getCart/:username",expresserr(async(req,res)=>{
    let proObj=req.app.get("cartObj")
    let un=req.params.username
    //console.log(un)
    let cartObj=await proObj.findOne({name:un})
    if(cartObj==null)
    {
        res.send({message:"Cart empty"})
    }
    else{
        //console.log("in getacart",cartObj)
        res.send({message:cartObj})
    }
}))

//updating product using async and await
userapi.put("/updateProduct/:name",expresserr(async(req,res)=>
{let objcol=req.app.get("cartObj")
    let updated=req.body
    let product=await objcol.findOne({name:updated.name})
    if(product==null)
    {
        res.send(`no product with name ${updated.name} to update`)
    }
    else
    {
        await objcol.updateOne({name:updated.name},{$set:{...updated}})
        res.send({message:"cart updated"})
    }
}))
//export this object 
module.exports=userapi