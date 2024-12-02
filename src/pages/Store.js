import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import StarRatingComponent from 'react-rating-stars-component'
import Product from '../components/Product'
import Color from '../components/Color'
import Container from '../components/Container'
const Store = () => {
const [grid, setGrid] = useState(3);
    return (
    <>
    <Meta title={"Store"}/>
    <BreadCrumb title="Store"/>
    <Container calss1='store-wrapper home-wrapper-2 py-5'>
            <div className='row mx-5'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Shop By Categories
                        </h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Watch</li>
                                <li>TV</li>
                                <li>Camera</li>
                                <li>Laptop</li>
                            </ul>
                        </div>
                    </div>

                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Filter By 
                        </h3>
                        <div>
                            <h5 className='sub-title'> Availability </h5>
                            <div className='form-check'>
                                <input type='checkbox' className='form-check-input' id='' value=""/>
                                <label htmlFor='' className='form-check-label'>In Stock (1)</label>
                            </div>
                            <div className='form-check'>
                                <input type='checkbox' className='form-check-input' id='' value=""/>
                                <label htmlFor='' className='form-check-label'>Out of Stock (0)</label>
                            </div>
                        </div>

                        <div>
                            <h5 className='sub-title'> Price </h5>
                            <div className='d-flex align-items-center gap-10'>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
                                    <label htmlFor="floatingInput">From</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="To"/>
                                    <label htmlFor="floatingInput">To</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h5 className='sub-title'> Colors </h5>
                            <div>
                            <Color/>
                            </div>
                        </div>
                        <div>
                            <h5 className='sub-title'> Size </h5>
                            <div className='form-check'>
                                <input type='checkbox' className='form-check-input' id='color-1' value=""/>
                                <label htmlFor='color-1' className='form-check-label'>S (2)</label>
                            </div>
                            <div className='form-check'>
                                <input type='checkbox' className='form-check-input' id='color-2' value=""/>
                                <label htmlFor='color-2' className='form-check-label'>M (2)</label>
                            </div>
                        </div>

                    </div>

                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Product Tags
                        </h3>
                        <div>
                            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Watch</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>TV</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Camera</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                            </div>
                        </div>
                    </div>

                    <div className='filter-card '>
                        <h3 className='filter-title'>
                            Random Products
                        </h3>
                        <div>
                            <div className='random-products d-flex align-items-center'>
                                <div className='w-50'>
                                    <img src='images/watch.jpg' alt='product here' className='img-fluid'></img>
                                </div>
                                <div className='w-50'>
                                    <h5> Kids Headphones bulk 10 pack multi-colored </h5>
                                    <StarRatingComponent starCount={5} size={24} value={4} edit={false} activeColor="#ffd700"/>
                                    <b> $300 </b>
                                </div>
                            </div>
                            <div className='random-products d-flex align-items-center'>
                                <div className='w-50'>
                                    <img src='images/watch.jpg' alt='product here' className='img-fluid'></img>
                                </div>
                                <div className='w-50'>
                                    <h5> Kids Headphones bulk 10 pack multi-colored </h5>
                                    <StarRatingComponent starCount={5} size={24} value={4} edit={false} activeColor="#ffd700"/>
                                    <b> $300 </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='mb-0 d-block' style={{width:"100px"}}>Sort By: </p>
                                <select name= "" className='form-control form-select' defaultValue={"manual"} id="">
                                    <option value="manual">Featured</option>
                                    <option value="best-selling">Best-Selling</option>
                                    <option value="price-ascending">Price, low to high</option>
                                    <option value="price-ascending">Price, high to low</option>
                                </select>
                            </div>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='totalproducts mb-0'>21 products</p>
                                <div className=' grid d-flex align-items-center gap-10'>
                                    <img src='images/gr4.svg' alt='grid-4' className='d-block img-fluid' onClick={()=> {setGrid(3);}}/>
                                    <img src='images/gr3.svg' alt='grid-3' className='d-block img-fluid' onClick={()=> {setGrid(4);}}></img>
                                    <img src='images/gr2.svg' alt='grid-2' className='d-block img-fluid' onClick={()=> {setGrid(6);}}></img>
                                    <img src='images/gr.svg' alt='grid' className='d-block img-fluid' onClick={()=> {setGrid(12);}}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-list py-4'>
                        <div className='d-flex gap-10 flex-wrap'>
                            <Product grid={grid}/>
                        </div>
                    </div>
                </div>
        </div>
    </Container>
    </>
  )
}

export default Store
