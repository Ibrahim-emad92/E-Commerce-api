const express=require('express');

const {getCatogories}=require('../services/category.services')

const router=express.Router();


router.get('/',getCatogories)

module.exports=router;