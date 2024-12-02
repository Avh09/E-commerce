import { Link } from "react-router-dom";
import Meta from '../components/Meta'
import { BiArrowBack } from "react-icons/bi";
import React from 'react'
import watch from '../images/watch.jpg';
import Container from "../components/Container";
const Checkout = () => {
  return <>
  <Container class1="checkout-wrapper py-5 home-wrapper-2 mx-5">

        <div className="row">
            <div className="col-7">
                <div className="checkout-left-data">
                    <h3 className="website-name">Dev Corner</h3>
                    <nav style={{ "--bs-breadcrumb-divider":">"}} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page"><Link className="text-dark" to="/cart">Cart</Link></li>
                            &nbsp;/
                            <li className="breadcrumb-item active">Information</li>
                            &nbsp;/
                            <li className="breadcrumb-item active">Shipping</li>
                            &nbsp;/
                            <li className="breadcrumb-item active">Payment</li>
                        </ol>
                    </nav>
                    <h4 className="title">
                        Content Information
                    </h4>
                    <p>Hemang Jain (hemangjain112@gmail.com)</p>
                    <h4 className="mb-3 total title">Shipping Address</h4>
                    <form action="" className="d-flex gap-15 justify-content-between flex-wrap">
                        <div className="w-100">
                            <select name="" id="" className="form-control form-select">
                                <option value="" selected disabled> Select Country</option>
                            </select>
                        </div>
                        <div className="flex-grow-1">
                            <input type="text" className="form-control" placeholder="First Name"></input>
                        </div>
                        <div className="flex-grow-1">
                            <input type="text" className="form-control" placeholder="Last Name"></input>
                        </div>
                        <div className="w-100">
                            <input type="text" className="form-control" placeholder="Adress"></input>
                        </div>
                        <div className="w-100">
                            <input type="text" className="form-control" placeholder="Apartment , Suite,etc"></input>
                        </div>
                        <div className="flex-grow-1">
                            <input type="text" className="form-control" placeholder="City"></input>
                        </div>
                        <div className="flex-grow-1">
                            <select name="" id="" className="form-control form-select">
                                <option value="" selected disabled>Select State</option>
                            </select>
                        </div>
                        <div className="flex-grow-1">
                            <input type="text" className="form-control" placeholder="Pincode"></input>
                        </div>
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to='/cart' className="button"><BiArrowBack className="me-2"/> Return to Cart</Link>
                                <Link to='/cart' className="button" >Continue to Shipping</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-5">
                <div className="border-bottom py-4">
                    <div className="d-flex align-items-center justify-content-between gap-10 mb-2">
                        <div className="w-75 d-flex gap-15">
                            <div className="w-25 position-relative">
                                <span style={{"top":"-10px" , "right":"2px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                <img className="img-fluid" src={watch} alt="product" /> 
                            </div>
                            <div>
                                <h5 className="total-price">gfgijfid</h5>
                                <p className="total-price">s / #dnufdn</p>
                            </div>
                        </div>
                        <div className="flex-grow-1 justify-content-end"><h5 className="total">$100</h5></div>
                    </div>
                </div>
                <div className="border-bottom py-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="total">Subtotal</p>
                        <p className="total-price">$10000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0 total">Shipping</p>
                        <p className="mb-0 total-price">$10000</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                    <h4 className="total">Total</h4>
                    <h5 className="total-price">$10000</h5>
                </div>

            </div>
        </div>
  </Container>
  </>
}

export default Checkout
