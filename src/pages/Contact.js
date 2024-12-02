import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome } from "react-icons/ai"
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { BiInfoCircle } from 'react-icons/bi'
import Container from '../components/Container'
const Contact = () => {
  return (
    <div>
      <Meta title={"Contact Us"} />      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.394148829692!2d78.35819717627217!3d17.44083918345547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9394d77d768b%3A0xe4cfd61ccbd17e29!2sUdipi&#39;s%20Upahar!5e0!3m2!1sen!2sin!4v1719320621327!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                {/* TODO -> Space between two sides not properly used cross check CSS. */}
                <div>
                  <h3 className='contact-title mb-4'>Contact Us</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input className='form-control w-100' type='text' placeholder='Name'></input>
                    </div>
                    <div>
                      <input className='form-control w-100' type='email' placeholder='Email'></input>
                    </div>
                    <div>
                      <input className='form-control w-100' type='tel' placeholder='Mobile Number'></input>
                    </div>
                    <div>
                      <textarea name="" className='w-100 form-control' id="" placeholder='Comments' col='30' rows='4'></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5'></AiOutlineHome>
                        <address className='mb-0'>Hno:277,Near village chopal,Mandaura,Sonipat,Haryana</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5'></BiPhoneCall>
                        <a href='tel:+919573475169'>+919573475169</a>
                      </li >
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5'></AiOutlineMail>
                        <a href="mailto:divyanshp1136@gmail.com">divyanshp1136@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5'></BiInfoCircle>
                        <p className='mb-0'>Monday - Friday 10AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Contact
