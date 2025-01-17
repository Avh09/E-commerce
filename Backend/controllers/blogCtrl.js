const Blog = require('../models/blogModel');
const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const validateMongodbId = require('../utils/validateMongodbId')
const cloudinaryUploadImg = require('../utils/cloudinary');
const fs = require('fs')
const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json(newBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const updateBlogContent = await Blog.findByIdAndUpdate(id, req.body, { new: true, })
        res.json(updateBlogContent);
    } catch (error) {
        throw new Error(error);
    }
});

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const getBlogContent = await Blog.findById(id).populate("likes").populate("dislikes");
        const updateView = await Blog.findByIdAndUpdate(id, { $inc: { numViews: 1 } }, { new: true, });
        res.json(getBlogContent);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const getAllBlogs = await Blog.find();
        res.json(getAllBlogs);
    }
    catch (error) {
        throw new Error(error);
    }
});

const deleteBlogs = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodbId(id);
    try {
        const deleteBlogs = await Blog.findByIdAndDelete(id);
        res.json(deleteBlogs);
    }
    catch (error) {
        throw new Error(error);
    }
})

const likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    // validateMongodbId(blogId);
    //Find the blog which you want to like
    const blog = await Blog.findById(blogId);
    //find the login user
    const loginUserId = req?.user?._id;

    //find if the user has liked the post
    const isLiked = blog?.isLiked;

    //find the user if the user has disliked the post
    const alreadyDisliked = blog?.dislikes?.find((userId) => userId?.toString() === loginUserId?.toString());

    if (alreadyDisliked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { dislikes: loginUserId },
            isDisliked: false
        }, {
            new: true
        })
        res.json(blog);
    }
    if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false,
        }, {
            new: true
        })
        res.json(blog);
    }
    else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { likes: loginUserId },
            isLiked: true,
        }, {
            new: true
        })
        res.json(blog);
    }


})

const dislikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    // validateMongodbId(blogId);
    //Find the blog which you want to like
    const blog = await Blog.findById(blogId);
    //find the login user
    const loginUserId = req?.user?._id;

    //find if the user has liked the post
    const isDisliked = blog?.isDisliked;
    
    //find the user if the user has disliked the post
    const alreadyLiked = blog?.likes?.find((userId) => userId?.toString() === loginUserId?.toString());

    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false
        }, {
            new: true
        })
        res.json(blog);
    }
    if (isDisliked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { dislikes: loginUserId },
            isDisliked: false,
        }, {
            new: true
        })
        res.json(blog);
    }
    else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { dislikes: loginUserId },
            isDisliked: true,
        }, {
            new: true
        })
        res.json(blog);
    }


})

const uploadImages = asyncHandler( async (req,res)=> {
    console.log(req.files);
    const {id} = req.params;
    try{
        const uploader = (path)=> cloudinaryUploadImg(path,"images");
        const urls = [];
        const files = req.files;
        for(const file of files){
            const {path} = file;
            const newpath = await uploader(path);
            urls.push(newpath);
            fs.unlinkSync(path);
        }
        const findBlog = await Blog.findByIdAndUpdate(id,{
            images:urls.map(file => {return file})
        },{new:true})
        res.json(findBlog);
    }
    catch(error){
        throw new Error(error);
    }
})

module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlogs,likeBlog,dislikeBlog,uploadImages };