import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


const Footer = () => {
  return (
    <>
    <footer className="py-4">
    <div className='container-fluid'>
        <div className='row align-items-center mx-5 px-5'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src="images/newsletter.png" alt="newsletter"/>
              <h2 className='mb-0 text-white'>Sign UP for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
              <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="" aria-describedby="basic-addon2"/>
              <span className="input-group-text p-2" id="basic-addon2">
                Suscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className='container-fluid'>
        <div className='row mx-5 px-5'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
                Hno : 277 Near Vill Chopal,<br/>
                Sonipat, Haryana<br/>
                PinCode: 131103
              </address>
              <a href="tel:+91 7045857846" className='text-white d-block py-2 mb-1 mt-2'>+91 7045857846</a>
              <a href="mailto: hemangjain.dev@gmail.com" className='text-white d-block mt-2 mb-0'>hemangjain.dev@gmail.com</a>
              <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                <a className="text-white" href="#"><BsLinkedin className='text-white fs-3'/></a>
                <a className="text-white" href="#"><BsInstagram className='text-white fs-3'/></a>
                <a className="text-white" href="#"><BsTwitterX className='text-white fs-3'/></a>
                <a className="text-white" href="#"><BsFacebook className='text-white fs-3'/></a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/privacy-policy' className='text-white py-2 mb-1'>
                Privacy Policy
              </Link>
              <Link to='/refund-policy' className='text-white py-2 mb-1'>
                Refund Policy
              </Link>
              <Link to='/shipping-policy' className='text-white py-2 mb-1'>
                Shipping Policy
              </Link>
              <Link to='/term-conditions' className='text-white py-2 mb-1'>
                Terms & Conditions
              </Link>
              <Link className='text-white py-2 mb-1'>
                Blogs
              </Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>
                About Us
              </Link>
              <Link className='text-white py-2 mb-1'>
                FAQ
              </Link>
              <Link className='text-white py-2 mb-1'>
                Contact
              </Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>
                Laptops
              </Link>
              <Link className='text-white py-2 mb-1'>
                Headphones
              </Link>
              <Link className='text-white py-2 mb-1'>
                Tablet
              </Link>
              <Link className='text-white py-2 mb-1'>
                Watches
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by Dev Corner. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
