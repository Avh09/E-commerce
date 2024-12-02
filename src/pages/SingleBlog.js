import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from "react-router-dom";
import Meta from '../components/Meta'
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <div>
        <Meta title={"Dynamic Blog Name"}/>
        <BreadCrumb title="Dynamic Blog Name"/>

        <Container class1='blog-wrapper home-wrapper-2 py-5'>
                    <div className='row'>
                    <div className='col-12'>
                        <div className="single-blog-card">
                            <Link to='/blog' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-5'/>Go back to Blogs</Link>
                            <h3 className="title">A beautiful 28th August 5 AM</h3>

                            {/* TODO -> Image not rendering! */}
                            <img src="images/blog-1.jpg" alt="blog" className='img-fluid w-100 my-4' />
                            <p>The "filler" text we know today has been altered over the years in fact "Lorem" isn't actually a Latin word. It is suggested that the reason that the text starts with "Lorem" is because there was a page break spanning the word "Do-lorem". </p>
                        </div>
                    </div>
                    </div>
            </Container>

    </div>
  )
}

export default SingleBlog