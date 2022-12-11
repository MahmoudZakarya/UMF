import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, {  MouseEventHandler, useEffect, useRef, useState } from 'react'
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa';
import "./styles.css";




const images = ['1', '2', '3', '4' ,'5'];






export const Snippets = () => {
    
    const [width, setWidth] = React.useState(window.innerWidth);
      const breakpoint = 1100;


    useEffect(()=>{
        const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    }});

    const NextArrow = ({onClick}:{onClick?:MouseEventHandler})=>{
        return (
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight/>
            </div>
        )
    }

        const PervArrow = ({onClick}:{onClick?:MouseEventHandler})=>{
        return (
            <div className='arrow perv' onClick={onClick}>
                <FaArrowLeft/>
            </div>
        )
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [imageIndex, setImageIndex] = useState(0);

    const settings: any = {
        infinite:true, 
        lazyload: true, 
        dots:false,
        speed:800,
        slidesToShow:3,
        swipeToSlide:true,
        autoplay:true,
        focusOnSelect:true,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:"0",
        nextArrow: <NextArrow />, 
        prevArrow: <PervArrow />,
        beforeChange: (current:number, next:number)=> setImageIndex(next)
       
    };

     const settingsMob: any = {
        infinite:true, 
        lazyload: true, 
        dots:false,
        speed:800,
        slidesToShow:1,
        swipeToSlide:true,
        autoplay:true,
        focusOnSelect:true,
        slidesToScroll:1,
        // nextArrow: <NextArrow />, 
        // prevArrow: <PervArrow />,
        beforeChange: (current:number, next:number)=> setImageIndex(next)
       
    };

    

  return (
      <div className='sslider'>
    <div  className='slider-div'>
        <Slider {
            ...(width>breakpoint)?settings:settingsMob}>
            {images.map((img, index)=>(
              <div className={index===imageIndex? "sslide activeSlide": "sslide"}>
                  <img className='slider-img' src={require(`../../assets/${img}.png`)} alt={`${img}`} />
              </div>  
            ))}
        </Slider>
    </div>
    </div>
  )
}
