require('dotenv').config();

const mailer = require("nodemailer");
const transporter = mailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})

let body={
    from:'medstack96@gmail.com',
    to:'telagathotiswapnika9@gmail.com',
    subject:'hello',
    html:'<h1>hello</h1>'
}

transporter.sendMail(body,(err,result)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(result);
})