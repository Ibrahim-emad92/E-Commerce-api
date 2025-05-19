const sulgify=require('slugify')
const CategoryModel=require('../models/categoryModel');
const { default: slugify } = require('slugify');
exports.getCatogories=async(req,res)=>{
    try {
        const page= +req.query.page||1;
        const limit= +req.query.limit||5;
        const skip=(page-1)*limit;
        const categories=await CategoryModel.find({}).skip(skip).limit(limit);
        res.status(200).json({result:categories.length,page,data:categories});
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.getCategoryById=async(req,res)=>{
    try {
        const {id}=req.params;
        const category=await CategoryModel.findById(id);
        if(!category){
            res.status(404).json({msg:`No category for this id : ${id}`});
        }
        else{
            res.status(200).json({data:category});
        }
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.updateCategoryById=async(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;

    try {
        const category=await CategoryModel.findOneAndUpdate({_id:id},{name:name,slug:slugify(name)},{new:true});
        if(!category){
            res.status(404).json({msg:`No category for this id : ${id}`});
        }
        else{
            res.status(200).json({data:category});
        }
    } catch (err) {
         res.status(400).send(err);
    }

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

exports.deleteCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findByIdAndDelete(id);
    if (!category) {
      res.status(404).json({ msg: `No category for this id : ${id}` });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(400).send(err);
  }
}
