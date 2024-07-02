import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken"
import validator from "validator";
import bcrypt from 'bcryptjs'

const loginUser = async (req,res) =>{
  const {email,password} = req.body

  try {
    const user = await User.findOne({email})
    if(!user){
      return res.send({success:false,message:"User Already exists"})
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
      return res.json({success:false,message:"invalid Credentials"})
    }

    const token = createToken(user._id)
    res.send({success:true,message:token})
  } catch (error) {
    console.log(error);
    res.send({success:false,message:"Error"})

  }

}

const createToken = (id) =>{
  return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser = async (req,res) =>{
  const {username, email,password} = req.body;
  try {
    

    const exist = await User.findOne({email})
    if(exist){
      return res.send({success:false,message:"User Already exists"})
    }

    if(!validator.isEmail(email)){
      return res.send({success:false,message:"Enter Valid Email"})
    }
    
    if(password.length<8){
      return res.send({success:false,message:"Please Enter Strong password"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

    const newUser = new User({
      username:username,
      email:email,
      password:hashPassword
    })

    const user = await newUser.save()
    const token = createToken(user._id)

    res.send({success:true,message:token})
  } catch (error) {
    console.log(error);
    res.send({success:false,message:"Error"})
  }


}

export {loginUser,registerUser}