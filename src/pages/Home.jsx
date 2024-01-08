import React, { useState } from 'react'
import BannerImage from "../img/bg-slide-01.jpg";
import Carousel from 'react-bootstrap/Carousel';
import { IoIosArrowForward } from "react-icons/io";
import '../css/Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoIosArrowBack } from "react-icons/io";
import other from "../img/other-01.jpg"
import other2 from "../img/other-02.png"
import icon1 from "../img/icon1.png"
import icon4 from "../img/icon4.png"
import icon3 from "../img/icon3.png"
import icon11 from "../img/icon1.1.png"
import icon22 from "../img/icon2.2.png"
import icon33 from "../img/icon3.3.png"
import icon44 from "../img/icon4.4.png"
import icon2  from "../img/icon2.png"
import symbol from "../img/symbol-02.png"
import product1 from "../img/product-01.jpg"
import product2 from "../img/product-02.jpg"
import product3 from "../img/product-03.jpg"
import product4 from "../img/product-04.jpg"
import product5 from "../img/product-05.jpg"
import product6 from "../img/product-06.jpg"
import product7 from "../img/product-07.jpg"
import product8 from "../img/product-08.jpg"
import product9 from "../img/product-09.jpg"
import product10 from "../img/product-10.jpg"
import product11 from "../img/product-11.jpg"
import product12 from "../img/product-12.jpg"
import product13 from "../img/product-13.jpg"
import product14 from "../img/product-14.jpg"
import product15 from "../img/product-15.jpg"
import product16 from "../img/product-16.jpg"
import product17 from "../img/product-17.jpg"
import avatar1 from "../img/avatar-01.jpg"


function Home() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
     {/* baner  */}

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="baner-text w-50">
            <h2 className='Organici pb-3'>   Organici <span> products</span></h2>

              <h1 className='heding'>FRESH ORANGES</h1>

              <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, labore rerum! Ipsum maxime illo quomaxime illo quo  rerum, voluptatum eligendi hic.</p>

              <button>Shop now <IoIosArrowForward /> <IoIosArrowForward />   </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="baner-text w-50">
            <h2 className='Organici pb-3'>   Organici <span> products</span></h2>

              <h1 className='heding'>FRESH ORANGES</h1>

              <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, labore rerum! Ipsum maxime illo quomaxime illo quo  rerum, voluptatum eligendi hic.</p>

              <button>Shop now <IoIosArrowForward /> <IoIosArrowForward />   </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="baner-text w-50">
            <h2 className='Organici pb-3'>   Organici <span> products</span></h2>

              <h1 className='heding'>FRESH ORANGES</h1>

              <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, labore rerum! Ipsum maxime illo quomaxime illo quo  rerum, voluptatum eligendi hic.</p>

              <button>Shop now <IoIosArrowForward /> <IoIosArrowForward />   </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* WELCOME TO ORGANIVE */}
    
      <h2 className='Green mt-5 '>Green Agriculture   </h2>
     <img className='wlogo' src={symbol} alt="" />
     <div>
     <h1 className='text-center welcome'>WELCOME TO ORGANIVE</h1>
     </div>

    <div class=" py-5">
      <div class="container">
        <div class="row text-center special-list">

          <div class="col-12 col-md-3">
            <div class="special-grid-1">
                <div class="icon-1 ">
                <img src={icon11} />
                <img className='top-img' src={icon1} />
                </div>
              </div>
              <div class="card-title ms-4 text-center">
              <h2 class="fs-5 mt-3 baner-text ">100% ORGANIC</h2>
              <p class="text-center pt-4 pb-4 lorem">Lorem Ipsum is simply dummy text of the printing and typesetting .</p>
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid-1">
                <div class="icon-1 ">
                <img src={icon22} />
                <img className='top-img' src={icon2} />
                </div>
              </div>
              <div class="card-title ms-4 text-center">
              <h2 class="fs-5 mt-3 baner-text ">100% ORGANIC</h2>
              <p class="text-center pt-4 pb-4 lorem">Lorem Ipsum is simply dummy text of the printing and typesetting .</p>
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid-1">
                <div class="icon-1 ">
                <img src={icon33} />
                <img className='top-img' src={icon3} />
                </div>
              </div>
              <div class="card-title ms-4 text-center">
              <h2 class="fs-5 mt-3 baner-text ">100% ORGANIC</h2>
              <p class="text-center pt-4 pb-4 lorem">Lorem Ipsum is simply dummy text of the printing and typesetting .</p>
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid-1">
                <div class="icon-1 ">
                <img src={icon44} />
                <img className='top-img' src={icon4} />
                </div>
              </div>
            <div class="card-title ms-4 text-center">
              <h2 class="fs-5 mt-3 baner-text ">100% ORGANIC</h2>
              <p class="text-center pt-4 pb-4 lorem">Lorem Ipsum is simply dummy text of the printing and typesetting .</p>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
    <img className=' text-center other' src={other} />
    </div>

    {/* vegetable  */}

    <div className="vegetable row">

          <div class="m-0 p-0 col-12 col-md-3">
            <div class="vegetable-1">
              </div>
          </div>

          <div class="m-0 p-0 col-12 col-md-3">
            <div class="fruit">
                <div class="icon-1 ">
                </div>
              </div>
            <div class="card-title ms-4 text-center">
              <h2 class="fs-5 mt-3 baner-text ">100% ORGANIC</h2>
              <p class="text-center pt-4 pb-4 lorem">Lorem Ipsum is simply dummy text of the printing and typesetting .</p>
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid">
                <div class="icon-1 ">
                </div>
              </div>
            <div class="card-title ms-4 text-center">
              <h2 class="fs-5 mt-3 baner-text ">100% ORGANIC</h2>
              <p class="text-center pt-4 pb-4 lorem">Lorem Ipsum is simply dummy text of the printing and typesetting .</p>
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid">
                <div class="icon-1 ">
                </div>
              </div>
            <div class="card-title ms-4 text-center">
              <h2 class="fs-5 mt-3 baner-text ">100% ORGANIC</h2>
              <p class="text-center pt-4 pb-4 lorem">Lorem Ipsum is simply dummy text of the printing and typesetting .</p>
          </div>
          </div>
    </div>

    <div className="vegetable-11">
      vedant mori
    </div>

    {/* OUR PRODUCTS */}
    <h2 className='Green mt-5 '>Featured Products  </h2>
     <img className='wlogo' src={symbol} alt="" />
     <div>
     <h1 className='text-center welcome'>OUR PRODUCTS</h1>
     </div>

     <div class=" py-5">
      <div class="container">
        <div class="row text-center">

        <div class="col-12 col-md-3">
            <div class="special-grid">
              <div class="gallery-single">
               <img className='all-product' src={product1} alt="" />
                <div class="content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="card-title title-1 text-center">
              <h2 class="fs-5 mt-3  fw-bold">Red pumpkin</h2>
              
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid">
              <div class="gallery-single">
               <img className='all-product' src={product2} alt="" />
                <div class="content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="card-title title-1 text-center">
              <h2 class="fs-5 mt-3 fw-bold">Strawberry</h2>
              
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid">
              <div class="gallery-single">
               <img className='all-product' src={product3} alt="" />
                <div class="content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="card-title title-1 text-center">
              <h2 class="fs-5 mt-3 fw-bold">Cauliflower</h2>
              
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid">
              <div class="gallery-single">
               <img className='all-product' src={product4} alt="" />
                <div class="content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="card-title title-1 text-center">
              <h2 class="fs-5 mt-3 fw-bold">Vegetable</h2>
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid">
              <div class="gallery-single">
               <img className='all-product' src={product5} alt="" />
                <div class="content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="card-title title-1 text-center">
              <h2 class="fs-5 mt-3 fw-bold">Bell pepper</h2>
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid">
              <div class="gallery-single">
               <img className='all-product' src={product6} alt="" />
                <div class="content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="card-title title-1 text-center">
              <h2 class="fs-5 mt-3 fw-bold">Beetroot</h2>
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid">
              <div class="gallery-single">
               <img className='all-product' src={product7} alt="" />
                <div class="content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="card-title title-1 text-center">
              <h2 class="fs-5 mt-3 fw-bold">Cabbage</h2>
          </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="special-grid">
              <div class="gallery-single">
               <img className='all-product' src={product8} alt="" />
                <div class="content1 text-center ">
                      <i class=" fs-5 p-2 m-2 chenja"><FaSearch /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><FaHeart /></i>
                      <i class=" fs-5 p-2 m-2 chenja"><SlBasket /></i>
                </div>
              </div>
            </div>
            <div class="card-title title-1 text-center">
              <h2 class="fs-5 mt-3 fw-bold">Tomato</h2>
          </div>
          </div>

        </div>
      </div>
    </div>

    {/* DEAL OF THE DAY */}

    <div className="bg-2 ">
      <div className="row pt-5">
        <div className="w-50 mt-5">
            <img className='other2' src={other2} alt="" />
        </div>
        <div className="w-50 mt-5">
            <h2 className='Green-2  mt-5  '>Best Price For You</h2>
            <img className='wlogo-2 ' src={symbol} alt="" />
            <div>
                 <h1 className='text-center welcome-2'>DEAL OF THE DAY</h1>
            </div>
            <h3 className='mx-5 roasted'>Roasted corn</h3>
            <h3 className='now mx-5'><samp>20$</samp> Now Only 15$</h3>
            <p className='w-75 mx-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>

            <button className='btn-2 mx-5'>Shop now <IoIosArrowForward /> <IoIosArrowForward />   </button>
            

        </div>
      </div>
    </div>

    {/* organic popular */}

    <div className="container text-center organic">
      <div className="row">

           <div class="col-12 col-lg-4 col-md-6 my-5 py-5">  
              <div class="card my-3 border-0"> 
                  <h5 class="">NEW FORM THE FARM </h5>
                  <h2 >
                    <span>organic</span> special 
                   </h2>
              </div>
            </div>

            <div class="col-12 col-lg-4 col-md-6 my-5 py-5">
              <div class="card my-3 border-0"> 
                  <h5 class="">AGRICULTURAL PRODUCTS</h5>
                  <h2 >
                    <span>organic</span> special 
                   </h2>
              </div>
            </div>

            <div class="col-12 col-lg-4 col-md-6 my-5 py-5">
              <div class="card my-3 border-0"> 
                  <h5 class="">COSTUMER NEEDS</h5>
                  <h2 >
                    <span>organic</span> special 
                   </h2>
              </div>
            </div>

            <div class="col-12 col-md-3 mx-5">
            <div class="special-grid">
              <div class="gallery-single row">
               <div className="w-50 col">
                    <img src={product9} />
               </div>
               <div className="w-50 col text-center">
                  <h5 className='fs-5 pb-2'>Cabbage</h5>
                  <div className="hr"></div>
                  <h5 className='pt-2 '>21$</h5>
               </div>
              </div>
            </div>
            </div>

            <div class="col-12 col-md-3 mx-5">
            <div class="special-grid">
              <div class="gallery-single row">
               <div className="w-50 col">
                    <img src={product10} />
               </div>
               <div className="w-50 col text-center">
                  <h5 className='fs-5 pb-2'>Carrot</h5>
                  <div className="hr"></div>
                  <h5 className='pt-2 '>17$</h5>
               </div>
              </div>
            </div>
            </div>

            <div class="col-12 col-md-3 mx-5">
            <div class="special-grid">
              <div class="gallery-single row">
               <div className="w-50 col">
                    <img src={product11} />
               </div>
               <div className="w-50 col text-center">
                  <h5 className='fs-5 pb-2'>Onion</h5>
                  <div className="hr"></div>
                  <h5 className='pt-2 '>91$</h5>
               </div>
              </div>
            </div>
            </div>

            <div class="col-12 col-md-3 mx-5">
            <div class="special-grid">
              <div class="gallery-single row">
               <div className="w-50 col">
                    <img src={product12} />
               </div>
               <div className="w-50 col text-center">
                  <h5 className='fs-5 pb-2'>Potato</h5>
                  <div className="hr"></div>
                  <h5 className='pt-2 '>24$</h5>
               </div>
              </div>
            </div>
            </div>

            <div class="col-12 col-md-3 mx-5">
            <div class="special-grid">
              <div class="gallery-single row">
               <div className="w-50 col">
                    <img src={product13} />
               </div>
               <div className="w-50 col text-center">
                  <h5 className='fs-5 pb-2'>Eggplant</h5>
                  <div className="hr"></div>
                  <h5 className='pt-2 '>18$</h5>
               </div>
              </div>
            </div>
            </div>

            <div class="col-12 col-md-3 mx-5">
            <div class="special-grid">
              <div class="gallery-single row">
               <div className="w-50 col">
                    <img src={product14} />
               </div>
               <div className="w-50 col text-center">
                  <h5 className='fs-5 pb-2'>Peas</h5>
                  <div className="hr"></div>
                  <h5 className='pt-2 '>35$</h5>
               </div>
              </div>
            </div>
            </div>

            <div class="col-12 col-md-3 mx-5">
            <div class="special-grid">
              <div class="gallery-single row">
               <div className="w-50 col">
                    <img src={product15} />
               </div>
               <div className="w-50 col text-center">
                  <h5 className='fs-5 pb-2'>Asparagus</h5>
                  <div className="hr"></div>
                  <h5 className='pt-2 '>12$</h5>
               </div>
              </div>
            </div>
            </div>

            <div class="col-12 col-md-3 mx-5">
            <div class="special-grid">
              <div class="gallery-single row">
               <div className="w-50 col">
                    <img src={product16} />
               </div>
               <div className="w-50 col text-center">
               <h5 className='fs-5 pb-2'>Orange</h5>
                  <div className="hr"></div>
                  <h5 className='pt-2 '>39$</h5>
               </div>
              </div>
            </div>
            </div>

            <div class="col-12 col-md-3 mx-5">
            <div class="special-grid">
              <div class="gallery-single row">
               <div className="w-50 col">
                    <img src={product17} />
               </div>
               <div className="w-50 col text-center">
                  <h5 className='fs-5 pb-2'>Cheery</h5>
                  <div className="hr"></div>
                  <h5 className='pt-2 '>30$</h5>
               </div>
              </div>
            </div>
            </div>

      </div>
    </div>

    {/* Christina Cox */}

    <div className="bg-img bg-2">
      <div className="container ">
        <img className='avatar1' src={avatar1} roundedCircle/>
        <h2 className='text-center mt-3'>Christina Cox</h2>
      </div>
    </div>
    </>
  );
}

export default Home
