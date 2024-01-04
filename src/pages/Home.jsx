import React, { useState } from 'react'
import BannerImage from "../img/bg-slide-01.jpg";
import other from "../img/other-01.jpg"
import icon22 from "../img/icon2.2.png"
import icon2  from "../img/icon2.png"
import symbol from "../img/symbol-02.png"
import Carousel from 'react-bootstrap/Carousel';
import { IoIosArrowForward } from "react-icons/io";
import '../css/Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

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
    <div className="card-1 row col-md-8 mx-auto ">

    <Card className='col-md-5' style={{ marginTop:'100px', width: '18rem',border:'0px' }}>
          <div className="icon-1">
        <img src={icon22} />
        <img className='top-img' src={icon2} />
      </div>
      <Card className='border-0'  />

        <Card.Title className='text-center pt-4'>100% ORGANIC</Card.Title>
        <Card.Text className='text-center pt-4 pb-4'>
        Lorem Ipsum is simply dummy text of the printing and typesetting .
        </Card.Text>
    </Card>

    <Card style={{ width: '18rem',border:'0px' }}>
          <div className="icon-1">
        <img src={icon22} />
        <img className='top-img' src={icon2} />
      </div>
      <Card className='border-0'  />

        <Card.Title className='text-center pt-4'>100% ORGANIC</Card.Title>
        <Card.Text className='text-center pt-4 pb-4'>
        Lorem Ipsum is simply dummy text of the printing and typesetting .
        </Card.Text>
    </Card>

    <Card style={{ width: '18rem',border:'0px' }}>
          <div className="icon-1">
        <img src={icon22} />
        <img className='top-img' src={icon2} />
      </div>
      <Card className='border-0'  />

        <Card.Title className='text-center pt-4'>100% ORGANIC</Card.Title>
        <Card.Text className='text-center pt-4 pb-4'>
        Lorem Ipsum is simply dummy text of the printing and typesetting .
        </Card.Text>
    </Card>

    <Card style={{ width: '18rem',border:'0px' }}>
          <div className="icon-1">
        <img src={icon22} />
        <img className='top-img' src={icon2} />
      </div>
      <Card className='border-0'  />

        <Card.Title className='text-center pt-4'>100% ORGANIC</Card.Title>
        <Card.Text className='text-center pt-4 pb-4'>
        Lorem Ipsum is simply dummy text of the printing and typesetting .
        </Card.Text>
    </Card>

    <img className=' other' src={other} />

    </div>

    </>
  );
}

export default Home
