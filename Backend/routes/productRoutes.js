const express = require('express');
const { createProduct,getAProduct, getAllProduct, updateProduct, deleteProduct, addToWishlist, rating, uploadImages } = require('../controllers/productCtrl');
const { isAdmin , authMiddleware } = require('../middlewares/authMiddleware');
const { uploadPhoto, productImgResize } = require('../middlewares/uploadImages');
const router = express.Router();

router.post("/",authMiddleware , isAdmin  , createProduct);
// TODO : Add middleware Image resize (Not compatible with current node version)
router.put("/upload/:id",authMiddleware,isAdmin,uploadPhoto.array('images',10),uploadImages);
router.get("/:id" , getAProduct);
router.get("/" , getAllProduct);
router.delete("/:id" ,authMiddleware,isAdmin, deleteProduct);
router.put("/rating",authMiddleware,rating)
router.put("/wishlist",authMiddleware,addToWishlist);
router.put("/:id" ,authMiddleware ,isAdmin, updateProduct);


module.exports = router ;