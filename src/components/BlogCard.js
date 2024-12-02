import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ()=>{
    return (
        <div className="blog-card"> 
        <div className="card-image">
            <img src="images/blog-1.jpg" alt="blog-image here" className="img-fluid w-100"></img>    
        </div>    
        <div className="blog-content">
            <p className="date">28th August 2023</p>
            <h5 className="title">A beautiful 5 AM morning renaissance</h5>
            <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo diam, tristique id risus et, pellentesque feugiat odio. Proin dapibus facilisis tempus. Nullam pulvinar scelerisque leo a scelerisque. Mauris mollis.
            </p>
            <Link to='/blog/:id' className="button">Read More</Link>
        </div>
        </div>    
    );
}

export default BlogCard;