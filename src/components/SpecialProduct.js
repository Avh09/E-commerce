import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from 'react-rating-stars-component';
const SpecialProduct = () => {
    return <div className="col-6 mb-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div className="image-special-product">
                    <img src="images/camera.jpg" className="img-fluid" alt="watch"></img>
                </div>
                <div className="special-product-content">
                    <h5 className="brand">Havels</h5>
                    <h6 className="title">
                        Samsung Galaxy Note10+ Mobile Phone;Sim...
                    </h6>
                    <StarRatingComponent
                        name="rate1"
                        starCount={10}
                    />
                    <p className="price"><span className="red-p">$100</span> &nbsp; <strike>$400</strike></p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className="mb-0"><b>5 Days</b></p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className="badge rounded-circle p-2 bg-danger">1</span>:
                            <span className="badge rounded-circle p-2 bg-danger">1</span>:
                            <span className="badge rounded-circle p-2 bg-danger">1</span>
                        </div>
                        
                        </div>
                        <div className="prod-count my-3">
                            <p>Products: 5</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                    </div>
                            <Link className="button">Add to Cart</Link>
                </div>

            </div>
        </div>
    </div>
}
export default SpecialProduct;