const express = require('express');
const router = express.Router();
const { authMiddleware,isAdmin } = require('../middlewares/authMiddleware');
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadImages');
const {createBlog,updateBlog, getBlog,getAllBlogs,deleteBlogs, likeBlog, dislikeBlog,uploadImages} = require('../controllers/blogCtrl');

router.post("/", authMiddleware, isAdmin,createBlog);
// TODO : Add middleware Image resize (Not compatible with current node version)
router.put("/upload/:id",authMiddleware,isAdmin,uploadPhoto.array('images',2),uploadImages);
router.put('/likes',authMiddleware,likeBlog);
router.put('/dislikes',authMiddleware,dislikeBlog);
router.put("/:id", authMiddleware, isAdmin,updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.delete("/:id",authMiddleware,isAdmin,deleteBlogs);

module.exports = router;
