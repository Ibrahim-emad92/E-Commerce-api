const sulgify=require('slugify')
const CategoryModel=require('../models/categoryModel')
exports.getCatogories=(req,res,next)=>{
    res.send(); 
}

exports.createCategory=async(req,res)=>{
    const name = req.body.name;

    try {
        const categore=await  CategoryModel.create({name:name,slug:sulgify(name)});
        res.status(201).json({data:categore});
    } catch (err) {
        res.status(400).send(err);
    }
   
}
