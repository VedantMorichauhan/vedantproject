import React from "react";
import '../css/Hav.css'
import BannerImage from "../img/logo-01.png"
import { Col, Row } from "react-bootstrap";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <div className="footer">
      <div className="container p-5 text-center">
      <Row>
        <Col sm>
          <img className="mb-5" src={BannerImage} />

          <div className="div">
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>

          <h5><MdOutlineMail /> markrussell@example.com</h5>
          <h5><CiLocationOn /> No 40 Baria Sreet 133/2</h5>
          <h5><IoCall /> (785) 977 5767</h5>
            </div>      

            </Col>

        <Col sm>
             <h4 className="pt-5">Information</h4>

            <div className="mt-5">
            <h5>About our shop</h5>
            <h5>Top sellers</h5>
            <h5>Our blog</h5>
            <h5>New products</h5>
            <h5>Secure shopping</h5>
            </div>
            </Col>
            
        <Col sm>
          <h4 className="pt-5">My Account</h4>

          <div className="mt-5">
          <h5>My account</h5>
          <h5>Discount</h5>
          <h5>Personal information</h5>
          <h5>My address</h5>
          <h5>Order history</h5>
          </div>
          </Col>
      </Row>
        </div>
      </div>
  );
}

export default Footer;