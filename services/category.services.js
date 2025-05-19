
const CategoryModel=require('../models/categoryModel')
const getCatogories=(req,res,next)=>{
    const name=req.body.name;
    console.log(req.body);
    const newCategory=new CategoryModel({name:name})
    newCategory
    .save()
    .then((doc)=>{
        res.json(doc);
    })
    .catch((err)=>{
        res.json(err);
    })
}

module.exports={getCatogories}