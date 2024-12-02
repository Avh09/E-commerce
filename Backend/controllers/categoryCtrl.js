const Category = require('../models/categoryModel')
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongodbId');

const createCategory = asyncHandler(async (req,res)=>{
    try{
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    }
    catch(err){
        throw new Error(err);
    }
})

const updateCategory = asyncHandler(async (req,res)=>{
    const {id}=req.params;
    try{
        const updateCategory = await Category.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateCategory);
    }
    catch(err){
        throw new Error(err);
    }
})

const deleteCategory = asyncHandler(async (req,res)=>{
    const {id}=req.params;
    try{
        const deleteCategory = await Category.findByIdAndDelete(id);
        res.json(deleteCategory);
    }
    catch(err){
        throw new Error(err);
    }
})

const getCategory = asyncHandler(async (req,res)=>{
    const {id}=req.params;
    try{
        const getCategory = await Category.findById(id);
        res.json(getCategory);
    }
    catch(err){
        throw new Error(err);
    }
});
const getAllCategory = asyncHandler(async (req,res)=>{
    
    try{
        const getAllCategory = await Category.find();
        res.json(getAllCategory);
    }
    catch(err){
        throw new Error(err);
    }
})

module.exports={createCategory,updateCategory,deleteCategory,getCategory,getAllCategory};