import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";     // it is used to create a unique token for the user id 
import bcrypt from  "bcrypt";    // it is used to incrypt the password
import validator from "validator";

// login user
const loginUser = async(req, res) =>{
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success: true, message:"User Doesn't Exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.json({success:false, message: "Invalid credentials"});
            // toast.success(response.data.message);
        }

        const token = createToken(user._id);
        res.json({success:true, token});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}


const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET);
}


//registered user

const registeredUser = async(req, res) =>{
    const {name, email, password} = req.body;
    try{
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already Exists"});
        }

        // validation email format & string password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"});
        }

        if(password.length < 8){
            return res.json({success:false, message:"Please enter a string password"});
        }

        // hashing user password
        // that 10 is cost factor," also known as the log rounds. 
        //It determines the computational complexity of the hashing process
        // The higher the number, the more time it will take to generate the hash. 
        //The value 10 means that the hashing algorithm will be executed 2^10 (1024) times, 
        //making the process more secure but also more resource-intensive.
        
        const salt = await bcrypt.genSalt(10);  
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,      // that name, email, modified password i.e hashed password comes from the req.body
            email: email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true, token});
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}


export {loginUser, registeredUser};