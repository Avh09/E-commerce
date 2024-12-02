const express= require('express');
const {createUser,loginUserCtrl, resetPassword , updatePassword, getAllUsers, getAUser, deleteAUser, updateAUser, blockUser, unblockUser, handleRefreshToken, logout, forgotPasswordToken, loginAdmin, getWishlist, saveAddress, userCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, updateOrderStatus} = require('../controllers/userCtrl');
const { authMiddleware,isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post("/register" , createUser);
router.post("/forgot-password-token" , forgotPasswordToken);
router.put("/reset-password/:token" , resetPassword);
router.put("/password", authMiddleware , updatePassword);
router.put("/order/update-order/:id", authMiddleware ,isAdmin,updateOrderStatus );
router.post("/login" , loginUserCtrl);
router.post("/login-admin" , loginAdmin);
router.post("/cart" , userCart);
router.post("/cart/applycoupon" , authMiddleware,applyCoupon);
router.post("/cart/cash-order" , authMiddleware,createOrder);
router.get("/all-users" , getAllUsers);
router.get("/get-orders" ,authMiddleware ,getOrders);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist",authMiddleware, getWishlist);
router.get("/cart",authMiddleware, getUserCart);

router.get("/:id",authMiddleware,isAdmin, getAUser);
router.delete('/empty-cart',authMiddleware,emptyCart);
router.delete("/:id" , deleteAUser);
router.put("/edit-user", authMiddleware , updateAUser);
router.put("/save-address", authMiddleware , saveAddress);
router.put("/block-user/:id", authMiddleware ,isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware ,isAdmin, unblockUser);


module.exports = router;