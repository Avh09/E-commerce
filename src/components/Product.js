import React from "react";
import { Link, useLocation} from "react-router-dom";

import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';
import watch from '../images/watch.jpg';
import watch2 from '../images/watch-1.avif';
import wishlist from '../images/wishlist.svg';  

import StarRatingComponent from 'react-rating-stars-component';
import { WiDayShowers } from "react-icons/wi";
const Product = (props) => {
    const {grid} = props;
    let location = useLocation();
    console.log(grid)
    return <>
        <div className={`${location.pathname === "/product" ? `gr-${grid}`: "col-3"}`}>
            <Link to={`${location.pathname !== "/product" ? "/product/0": "0"}`} className="width-100">
            <div className="product-card position-relative mr-0">
                <div className="wishlist-icon position-absolute">
                    <button className="border-0 bg-transparent">
                    <img src={wish} alt="wishlist-icon"></img>
                    </button>
                </div>
                <div className="product-image">
                    <img src={watch} alt='product here'></img>
                    <img src={watch2} alt='product here' height='270'></img>
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids digital watch
                    </h5>
                    <StarRatingComponent
                        name="rate1"
                        starCount={10}
                    />
                    <p className={`description ${grid===12 ? "d-block": "d-none"}`}>
                        uhvgdfgjfbnghjkhbgnlidfkjvhliuo;gikxo;vghuilijho;dighkopvbmhuiovhkhuifgoh,ikvohiofjivojhuflikjhmvophivojhubinjuigburgpdo;doioihbhfjl;fodpocikfou,kv.oip
                    </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare"></img>
                        </button>
                        <button className="border-0 bg-transparent">
                            <img src={view} alt="view"></img>
                        </button>
                        <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart"></img>
                        </button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        <div className={`${location.pathname === "/product" ? `gr-${grid}`: "col-3"}`}>
            <Link to={`${location.pathname !== "/product" ? "/product/1": "1"}`} className="width-100">
            <div className="product-card position-relative mr-0">
                <div className="wishlist-icon position-absolute">
                    <button className="border-0 bg-transparent">
                    <img src={wish} alt="wishlist-icon"></img>
                    </button>
                </div>
                <div className="product-image">
                    <img src={watch} alt='product here'></img>
                    <img src={watch2} alt='product here' height='270'></img>
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids digital watch
                    </h5>
                    <StarRatingComponent
                        name="rate1"
                        starCount={10}
                    />
                    <p className={`description ${grid===12 ? "d-block": "d-none"}`}>
                        Hello My name is Hemang JAina nd I am very sad
                    </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent">
                        <img src={prodcompare} alt="compare"></img>
                        </button>
                    <button className="border-0 bg-transparent">
                        
                        <img src={view} alt="view"></img>
                        </button>
                    <button className="border-0 bg-transparent"> 
                        <img src={addcart} alt="addcart"></img>
                        </button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        <div className={`${location.pathname === "/product" ? `gr-${grid}`: "col-3"}`}>
            <Link to={`${location.pathname !== "/product" ? "/product/2": "2"}`} className="width-100">
            <div className="product-card position-relative mr-0">
                <div className="wishlist-icon position-absolute">
                    <button className="border-0 bg-transparent">
                        <img src={wish} alt="wishlist-icon"></img>
                    </button>
                </div>
                <div className="product-image">
                    <img src={watch} alt='product here'></img>
                    <img src={watch2} alt='product here' height='270'></img>
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids digital watch
                    </h5>
                    <StarRatingComponent
                        name="rate1"
                        starCount={10}
                    />
                    <p className={`description ${grid===12 ? "d-block": "d-none"}`}>
                        uhvgdfgjfbng hjkhbgnlidfkj vhliuo;gikxo ;vghuilijho;di ghkopv bmhuiovhkhuifgoh,ikvohiofjivojhuflikjhmvophivojhubinjuigburgpdo;doioihbhfjl;fodpocikfou,kv.oip
                    </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <button className="border-0 bg-transparent">
    
                            <img src={prodcompare} alt="compare"></img>
                        </button>
                    <button className="border-0 bg-transparent">
                        
                        <img src={view}alt="view"></img>
                        </button>
                    <button className="border-0 bg-transparent">
                        
                        <img src={addcart} alt="addcart"></img>
                        </button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        <div className={`${location.pathname === "/product" ? `gr-${grid}`: "col-3"}`}>
            <Link to={`${location.pathname !== "/product" ? "/product/3": "3"}`} className="width-100">
            <div className="product-card position-relative mr-0">
                <div className="wishlist-icon position-absolute">
                    <button className="border-0 bg-transparent">
                    <img src={wish} alt="wishlist-icon"></img>
                    </button>
                </div>
                <div className="product-image">
                    <img src={watch} alt='product here'></img>
                    <img src={watch2} alt='product here' height='270'></img>
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids digital watch
                    </h5>
                    <StarRatingComponent
                        name="rate1"
                        starCount={10}
                    />
                    <p className={`description ${grid===12 ? "d-block": "d-none"}`}>
                        uhvgdfgjfbnghjkhbgnlidfkjvhliuo;gikxo;vghuilijho;dighkopvbmhuiovhkhuifgoh,ikvohiofjivojhuflikjhmvophivojhubinjuigburgpdo;doioihbhfjl;fodpocikfou,kv.oip
                    </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent">
                        
                        <img src={prodcompare} alt="compare"></img>
                        </button>
                    <button className="border-0 bg-transparent">
                        
                        <img src={view} alt="view"></img>
                        </button>
                    <button className="border-0 bg-transparent">
                        
                        <img src={addcart} alt="addcart"></img>
                        </button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        
    </>
}

export default Product;