const express=require('express');

const {getCatogories,createCategory}=require('../services/category.services')

const router=express.Router();


router.get('/',getCatogories);
router.post('/',createCategory);

module.exports=router;