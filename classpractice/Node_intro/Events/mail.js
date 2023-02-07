// nodemailer package use to sent mail


const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'kabinshrestha377@gmail.com',
        pass:"avlafpiaqwrccrgc" // app password not gmail password
    }
});

const mailObject ={
    from:'kabinshrestha377@gmail.com',
    to:('mpsandip12@gmail.com',"sabinshrestha98420@gmail.com"),
    subject:"fuck you",
    text:"webdevelopment class tutorial"
};

transporter.sendMail(mailObject, (err,info)=>{
   if(err){
    console.log(err);
   }

   else{
    console.log('Email send..');
    console.log("info");
   }

});