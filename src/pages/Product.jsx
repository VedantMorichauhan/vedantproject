import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetProduct } from "../redux/Action";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import '../css/Home.scss';


const Product = () => {
  let {product } = useSelector((store)  => store.products);

  let dispatch = useDispatch();
  useEffect(() => {
    if ( product.length == 0){
      dispatch(GetProduct ());
      console.log("called");
    }
  }, []);

  // console.log(product);

  return (
    <div>
      {product.map((ele) => {
        return (
          <Link to={`/product/${ele.id}`}>
         <div className="nav">
         <div class="col-12 col-md-3">
            <div class="special-grid pro">
              <div class="gallery-single">
                <div className="">
                <img className="pro-img" src={ele.img} alt="" />
                </div>
                <div class="px-5 pt-3 content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="text-black  title-1 text-center">
              <h2 class="fs-5 px-5 fw-bold"><p>{ele.title}</p></h2>
              <h2 class="fs-5 fw-bold"><p>{ele.price}</p></h2>
              
          </div>
          </div>
         </div>
          </Link>
        );
      })}

    </div>
  );
};

export default Product;