const nodemailer=require('nodemailer');
const dotenv=require("dotenv")
dotenv.config();


const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.User_Email,
        pass:process.env.User_Pass
    }
});

const eventOTP= async(email,name,titile)=>{

    const sentEmail={
      from:process.env.User_Email,
      to:email,
      subject:`BOOKIN CONFIRMED:${titile}`,
      text:`YOUR OTP CODE IS ${otp} `

    };

    await transporter.sendMail(sentEmail);
}



const sentOtpEmail= async(email,otp,type)=>{

    const sentEmail={
      from:process.env.User_Email,
      to:email,
      subject:'YOUR OTP CODE',
      text:`YOUR OTP CODE IS ${otp} `

    };

    await transporter.sendMail(sentEmail);
}