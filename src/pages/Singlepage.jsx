import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, singleProduct } from "../redux/Action";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const SinglePage = () => {
  let { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleProduct(id));
  }, []);
  let data = useSelector((store) => store.products);

  const handleCart = () => {
    dispatch(
      addCart({
        img: data.single_product.img,
        title: data.single_product.title,
        price: data.single_product.price,
      })
    );
  };
  return (
    <div>
      <div className="nav">
         <div class="col-12 col-md-3">
            <div class="special-grid pro">
              <div class="gallery-single">
                <div className="">
                <img className="pro-img" src={data.single_product.img} alt="" />
                </div>
                <div class="px-5 pt-3 content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="text-black  title-1 text-center">
              <h2 class="fs-5 px-5 fw-bold"><p>{data.single_product.title}</p></h2>
              <h2 class="fs-5 fw-bold"><p>{data.single_product.price}</p></h2>
              <button className="mt-5" onClick={handleCart}>ADD TO CART</button>
          </div>
          </div>
         </div>
      
    </div>
  );
};

export default SinglePage;