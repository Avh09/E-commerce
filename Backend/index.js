const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");
const blogRouter = require("./routes/blogRoutes");  
const categoryRouter = require("./routes/categoryRoute");  
const blogcategoryRouter = require("./routes/blogcategoryroute");
const brandRouter = require("./routes/brandRoute");
const couponRouter = require('./routes/couponRoutes');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
dbConnect() ; 

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser())

app.use('/api/user' , authRouter);
app.use('/api/product' , productRouter);
app.use('/api/blog' , blogRouter);
app.use('/api/category' , categoryRouter);
app.use('/api/blogcategory',blogcategoryRouter);
app.use('/api/brand',brandRouter);
app.use('/api/coupon',couponRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT , ()=> {
    console.log(`Server is running on port ${PORT}`);
});