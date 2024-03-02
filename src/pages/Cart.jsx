import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart, deleteCart } from "../redux/Action";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const Cart = () => {
  let dispatch = useDispatch();
  let { cart } = useSelector((store) => store.products);
  console.log(cart);

  useEffect(()=>{
    dispatch(GetCart())
  },[])
  const handleDelete = (id)=>{
  dispatch(deleteCart(id))
  }
  return (
    <div>
      {cart.map((ele) => {
        return (
          <>
            <div className="nav">
         <div class="col-12 col-md-3">
            <div class="special-grid pro">
              <div class="gallery-single">
                <div className="">
                <img className="pro-img" src={ele.img} alt="" />
                </div>
              
              </div>
            </div>
            <div class="text-black  title-1 text-center">
              <h2 class="fs-5 px-5 fw-bold"><p>{ele.title}</p></h2>
              <h2 class="fs-5 fw-bold"><p>{ele.price}</p></h2>
              <button onClick={()=>handleDelete(ele.id)}>delete</button>
              
          </div>
          </div>
         </div>

            
          </>
        );
      })}
    </div>
  );
};

export default Cart;