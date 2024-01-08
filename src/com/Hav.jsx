import '../css/Hav.css'
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Action";
import BannerImage from "../img/logo-01.png"


const Hav = () => {
  let dispatch = useDispatch();
  let data = useSelector((store) => store.user);
  // console.log(data);

  let all=useSelector((store)=>store)
  // console.log(all);

  return (
    <div id="nav">
      <a className='logo '   style={{ backgroundImage: `url(${BannerImage})` }}>
        </a>
      <Link to="/" className="link padding-1">
        <h4>Home</h4>
      </Link>
      <Link to="/product" className="link padding-1">
        <h4>Product</h4>
      </Link>

      <Link to="/addproduct" className="link padding-1"><h4>Add Product</h4></Link>
      <Link to="/cart" className="link padding-1">
        <h4>Cart</h4>
      </Link>
      {data.isLogin ? (
        <span className="linkv padding-1">{data.userData.username}</span>
      ) : (
        <Link to="/signup" className="link padding-1">
          <h4>Signup</h4>
        </Link>
      )}
      {data.isLogin ? (
        <span className="link padding-1" onClick={() => dispatch(logout())}>
          <h4>LogOut</h4>
        </span>
      ) : (
        <Link to="/login" className="link padding-1">
          <h4>Login</h4>
        </Link>
      )}
    </div>
  );
};

export default Hav;
