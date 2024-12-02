import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import Product from '../components/Product'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import { services } from '../utils/Data'
const Home = () => {
  return (
    <>
    <Container class1='home-wrapper-1 py-5 px-4'>
          <div className='row align-items-center mx-5 px-3'>
            <div className='col-6'>
              <div className='main-banner position-relative py-3'>
                <img src="images/main-banner.jpg" alt="main-banner-1" className='img-fluid rounded-3'/>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p className='mt-3'>From $999.00 or $41.62/mo<br/></p>
                  <Link className='button mt-3'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex gap-10 flex-wrap justify-content-between align-items-center'>
              <div className='small-banner position-relative '>
                <img src="images/catbanner-01.jpg" alt="cat-banner-1" className='img-fluid rounded-3'/>
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p className='mt-3'>From $999.00 or $41.62/mo<br/></p>
                  <Link className='button mt-3'>Buy Now</Link>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src="images/catbanner-02.jpg" alt="cat-banner-1" className='img-fluid rounded-3'/>
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p className='mt-3'>From $999.00 or $41.62/mo<br/></p>
                  <Link className='button mt-3'>Buy Now</Link>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src="images/catbanner-03.jpg" alt="cat-banner-1" className='img-fluid rounded-3'/>
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p className='mt-3'>From $999.00 or $41.62/mo<br/></p>
                  <Link className='button mt-3'>Buy Now</Link>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src="images/catbanner-04.jpg" alt="cat-banner-1" className='img-fluid rounded-3'/>
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p className='mt-3'>From $999.00 or $41.62/mo<br/></p>
                  <Link className='button mt-3'>Buy Now</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='home-wrapper-2 py-5 px-4'>
          <div className='row align-items-center mx-5 px-5'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                {
                  services?.map((i,j)=>{
                    return (
                      <div className="d-flex align-items-center gap-15" key={j}>
                  <img src={i.image} alt="service-1" className=''/>
                  <div>
                    <h6>{i.title}</h6>
                    <p className='mb-0'>{i.tagline}</p>
                  </div>
                </div>
                    )
                  })
                }
                

              </div>
            </div>
          </div>
      </Container>
      <Container class1='home-wrapper-2 py-5 px-4'>
          <div className='row align-items-center mx-5'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center px-5 mx-5'>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src= "images/camera.jpg" alt="camera" className='img-fluid'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src= "images/tv.jpg" alt="camera" className='img-fluid'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 items</p>
                  </div>
                  <img src= "images/tv.jpg" alt="camera" className='img-fluid'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6> Accessories</h6>
                    <p>10 items</p>
                  </div>
                  <img src= "images/headphone.jpg" alt="camera" className='img-fluid'/>
                </div>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src= "images/camera.jpg" alt="camera" className='img-fluid'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src= "images/tv.jpg" alt="camera" className='img-fluid'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 items</p>
                  </div>
                  <img src= "images/tv.jpg" alt="camera" className='img-fluid'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6> Accessories</h6>
                    <p>10 items</p>
                  </div>
                  <img src= "images/headphone.jpg" alt="camera" className='img-fluid'/>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='featured-wrapper home-wrapper-2 py-4 px-4'>

        <div className='row special-product-padding'>
          <div className='col-12 mx-4 mb-3'>
            <h3 className='section-heading'>Top selling products!</h3>
          </div>
        </div> 
        <div className='row justify-content-between d-flex align-items-center product-padding'>  
          <Product/>
        </div>
      </Container>
      <Container class1='famous-wrapper-2 home-wrapper-2 py-5 px-4'>
          <div className='row align-items-center mx-5 px-5'>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src="images/aes-1.jpg" alt="aes-1" className='img-fluid'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Apple Watch Series 6</h6>
                  <p className='mb-0'>From $399.00 $16/mo. for 24 mo*</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src="images/aes-2.jpg" alt="aes-1" className='img-fluid'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Apple Watch Series 6</h6>
                  <p className='mb-0'>From $399.00 $16/mo. for 24 mo*</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src="images/aes-3.jpg" alt="aes-1" className='img-fluid'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Apple Watch Series 6</h6>
                  <p className='mb-0'>From $399.00 $16/mo. for 24 mo*</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src="images/aes-5.jpg" alt="aes-1" className='img-fluid'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Apple Watch Series 6</h6>
                  <p className='mb-0'>From $399.00 $16/mo. for 24 mo*</p>
                </div>
              </div>
            </div>

          </div>
      </Container>
      <Container class1='special-wrapper py-5 home-wrapper-2'>
          <div className='row special-product-padding mx-2 mb-3'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row special-product-padding'>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
          </div>
      </Container>
      <Container class1='product-wrapper home-wrapper-2 py-4 px-4'>
        <div className='row special-product-padding'>
          <div className='col-12 mx-4 mb-3'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div> 
        <div className='row justify-content-between d-flex align-items-center product-padding'>  
          <Product/>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-4 px-4'>
          <div className='row align-items-center mx-5 px-4'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-01.png" alt="brand-1"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-02.png" alt="brand-1"/>
                  </div>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-03.png" alt="brand-1"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-04.png" alt="brand-1"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-05.png" alt="brand-1"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-06.png" alt="brand-1"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-07.png" alt="brand-1"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-08.png" alt="brand-1"/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='blog-wrapper home-wrapper-2 py-4 px-4'>
        <div className='row mx-5'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs!</h3>
          </div>
        </div>   
        <div className='row mx-5'>
          <div className='col-3'>
            <BlogCard/>
          </div>
          <div className='col-3'>
            <BlogCard/>
          </div>
          <div className='col-3'>
            <BlogCard/>
          </div>
          <div className='col-3'>
            <BlogCard/>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
