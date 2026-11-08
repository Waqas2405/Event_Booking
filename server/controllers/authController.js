import User from '../model/User';

const usermodel=require('../model/User');

export const registerUSer= async(req,res)=>{
    
const{name,email,password}=req.body;

const isExist= await usermodel.findOne({email});

if(isExist){
    return res.status(400).json({error:'user already exist'});
};

const salt= await bcrypt.genSalt(10);
const passhash=await bcrypt.hash(password,salt);
try{
    const user=await User.create({name, email, password, role:"user", isVerified:"false"});

}



}
export const loginUSer=(req,res)=>{

}
export const verifieUSer=(req,res)=>{

}