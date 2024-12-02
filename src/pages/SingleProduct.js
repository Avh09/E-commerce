import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Product from '../components/Product'
import StarRatingComponent from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import { useState } from 'react';
import Color from '../components/Color'
import { Link } from 'react-router-dom';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';
const SingleProduct = () => {
    const props = { width: 400, height: 600, zoomWidth: 500, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" };
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <div>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className='border-bottom'><h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3></div>
                                <div className="border-bottom py-3">
                                    <p className="price">$100.00</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <StarRatingComponent editing={false} value={3} ></StarRatingComponent>
                                        <p className='mb-0 t-review'>( 2 Reviews )</p>
                                    </div>
                                    <a className='review-btn' href='#review'>Write a Review</a>
                                </div>
                                <div className="py-3">
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type :</h3><p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand :</h3><p className='product-data'>Havels</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Categories :</h3><p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags :</h3><p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availability :</h3><p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Size :</h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Color :</h3>
                                        <Color></Color>
                                    </div>
                                    <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                        <h3 className='product-heading'>Quantity :</h3>
                                        <div className=''>
                                            <input type="number" style={{ width: "70px" }} min={1} max={10} className='form-control' />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0' type='submit'>Add to Cart</button>
                                            <button className='button signup' to='/signup'>Buy Now</button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href=''><TbGitCompare className='fs-5 me-2' />Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=''><AiOutlineHeart className='fs-5 me-2' />Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-3'>
                                        <h3 className='product-heading'>Shipping & Returns :</h3><p className='product-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa explicabo sed? </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-heading'>Copy Product Link :</h3><a href='javascript:void(0)' onClick={() => {
                                            copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg")
                                        }}>Copy Product Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container class1="description-wrapper py-5 home-wrapper-2">
                        <div className="row">
                            <div className="col-12">
                                <h4>Description</h4>
                                <div className='bg-white p-3'>
                                    <p >
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque cum, blanditiis numquam sunt inventore ipsa asperiores placeat. Veniam, quos esse, laudantium tenetur voluptatem quis repudiandae accusantium nesciunt reiciendis, rerum iste.
                                    </p>
                                </div>
                            </div>
                        </div>
                </Container>
                <Container class1="reviews-wrapper home-wrapper-2">
                        <div className="row">
                            <div className="col-12">
                                <h3>Reviews</h3>
                                <div className="review-inner-wrapper">
                                    <div className="review-head d-flex justify-content-between align-items-end">
                                        <div>
                                            <h4 className='mb-2'>Customer Reviews</h4>
                                            <div className='d-flex gap-10 align-items-center'>
                                                <StarRatingComponent editing={false} value={3} ></StarRatingComponent>
                                                <p className='mb-0'>Based on 2 reviews</p>
                                            </div>

                                        </div>
                                        {
                                            orderedProduct && (<div>
                                                <a className='text-dark text-decoration-underline' href='#'>Write a Review</a>
                                            </div>)
                                        }
                                    </div>
                                    <div id='review' className="review-form py-4">
                                        <h4>Write a Review</h4>
                                        <form action='' className='d-flex flex-column gap-15'>
                                            <div>
                                                <StarRatingComponent value={3} ></StarRatingComponent>
                                            </div>
                                            <div>
                                                <textarea name="" className='w-100 form-control' id="" placeholder='Comments' col='30' rows='4'></textarea>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className="button border-0">Submit Review</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="reviews mt-4">
                                        <div className="review">
                                            <div className='d-flex gap-10 align-items-center'>
                                                <h6>Divyansh</h6>
                                                <StarRatingComponent editing={false} value={3} ></StarRatingComponent>
                                            </div>
                                            <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea corporis veniam commodi iusto? Eos laborum est aperiam maxime necessitatibus ipsa beatae voluptatibus vel, cupiditate debitis repellat hic possimus atque enim?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Container>
                <Container class1='product-wrapper home-wrapper-2 py-4 px-4'>
                        <div className='row special-product-padding'>
                            <div className='col-12 mx-4 mb-3'>
                                <h3 className='section-heading'>Our Popular Products</h3>
                            </div>
                        </div>
                        <div className='row justify-content-between d-flex align-items-center product-padding'>
                            <Product />


                        </div>
                </Container>
        </div>
    )
}

export default SingleProduct