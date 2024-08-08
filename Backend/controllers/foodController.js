import foodModel from "../models/foodModel.js";
import fs from 'fs';


// add food items

const addFood = async(req, res) =>{
    let image_filename = req.file ? req.file.filename : null;


    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image: image_filename,
    })

    try{
        await food.save();
        res.json({success : true, message:"Food Added"});
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

// adding all food items to the database
const listFoods = async(req, res) =>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true, data: foods});      //data variable used to store all data in the database
    }
    catch(error){
        console.log(error);
        res.json({success:true, message:"Error"});
    }
}

// removing the data from the database
const removeFood = async(req, res) =>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,() =>{});     // used to remove the food item from the uploads folder
        await foodModel.findByIdAndDelete(req.body.id); // used to remove the food item from the database
        res.json({success:true, message:"Food removed"});
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:"Error Occured"});
    }
}


export { addFood, listFoods,removeFood };
