const express=require('express');

const {getCatogories,createCategory
    ,getCategoryById,updateCategoryById,deleteCategoryById}=require('../services/category.services')

const router=express.Router();


router.route('/').get(getCatogories).post(createCategory);
router.route('/:id').get(getCategoryById).put(updateCategoryById).delete(deleteCategoryById);

module.exports=router;