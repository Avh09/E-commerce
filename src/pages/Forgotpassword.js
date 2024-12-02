import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from "react-router-dom";
import Meta from '../components/Meta'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Forgotpassword = () => {
  return (
    <div>
      <Meta title={"Login"}/>
      <BreadCrumb title="Login"/>
      <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <p className="text-center mt-2 mb-3">
                          We will send you an email to reset your password
                        </p>
                        <form action='' className='d-flex flex-column gap-15'>
                            <CustomInput type="email" name="email" placeholder='Email' />
                            
                            <div>
                                <div className="mt-3 d-flex justify-content-center flex-column align-items-center gap-15">
                                    <button className='button border-0' type='submit'>Submit</button>
                                    <Link to='/login' className='cancel'>Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Forgotpassword