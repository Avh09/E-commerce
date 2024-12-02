const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');
const crypto = require('crypto');
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
    },
    isBlocked:{
        type:Boolean,
        default:false,
    },
    refreshToken:{
        type:String,
    },
    cart:{
        type:Array,
        default:[],
    
    },
    address:{
        type:String,
    },
    wishlist:[{ type:mongoose.Schema.Types.ObjectId , ref:"Product"}],
    passwordResetToken:{
        type:String,
    },
    passwordResetExpire:{
        type:Date,
    },
    passwordChangedAt:{
        type:Date,
    },
}
,{timestamps:true});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt =await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.methods.createPasswordResetToken = function(){
    const resetToken = crypto.randomBytes(32).toString('hex');  
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetExpire = Date.now() + 30*60*1000; // 30 minutes
    return resetToken;
}

//Export the model
module.exports = mongoose.model('User', userSchema);