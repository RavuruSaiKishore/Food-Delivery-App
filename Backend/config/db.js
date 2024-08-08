import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://SaiKishore:saikishorerev16@cluster0.f2xlesg.mongodb.net/food_ordering_app').then(() =>{
        console.log("db is connected");
    });
}