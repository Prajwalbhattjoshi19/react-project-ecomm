//import nodemailer from 'nodemailer';
import axios from 'axios';
let saveOrderdata={};
export let sendOrderEmailToAdmin=(cart)=>{
    let formData=new formDataClass(getPhoneNumber(),getName(),getEmail(),getAddress());
    saveOrderdata={...cart,...formData};
    console.log("saveOrderData=",JSON.stringify(saveOrderdata));
   return sendOrderDataToDataBase(saveOrderdata);
}
function sendOrderDataToDataBase(cart){
    fetch("http://localhost:8080/api/order/saveOrder",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'Referrer-Policy': 'unsafe-url',
        },
        body:JSON.stringify(
            saveOrderdata
        )
    })
    .then(response =>{
        return response.text();
    })
    .then(response=>{
        console.log("response=",response);
    }
        )
    .catch(error=>console.log(error));
}
function getPhoneNumber(){
 return document.getElementById("checkoutformphonenumber").value;
}
function getName(){
    return document.getElementById("checkoutformName").value;
   }
   function getEmail(){
    return document.getElementById("checkoutformEmail").value;
   }
   function getAddress(){
    return document.getElementById("checkoutformAddress").value;
   }
function sendOrderEmailToAdminWithData(formData,cart){
   // sendEmail();
}
export function formDataClass(phonenumber,name,email,address){
        this.phonenumber=phonenumber;
        this.name=name;
        this.email=email;
        this.address=address;
}
// const sendEmail = async () => {
//   // Create a transporter object
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'pjoshi@gmail.com',
//       pass: 'Newuser#1',
//     },
//   });

//   // Define the email options
//   const mailOptions = {
//     from: 'pjoshi@gmail.com',
//     to: "{getEmail}",
//     subject: 'Hello from JavaScript and React',
//     text: 'This is the body of the email',
//   };

//   try {
//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
//};
