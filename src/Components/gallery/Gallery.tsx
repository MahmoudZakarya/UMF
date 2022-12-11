import React, {useEffect, useState} from 'react'
import { galleryData } from './galleryData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const Gallery = () => {

    useEffect(()=>{
     })
 
    const [current, setCurrent] = useState(0);
    const length = galleryData.length; 

    if(!Array.isArray(galleryData) || galleryData.length <= 0){
        return null;
    }

     function pervSlide():void {
         setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current);
     }

     const nextSlide =()=> {
        setCurrent(
            current === length - 1 ? 0 : current + 1 
        );
        console.log(current);
     }

     

     

  return (
    <div className='slider'>
    <FaArrowAltCircleLeft className='left-arrow' onClick={pervSlide}/>
    {galleryData.map((slide, index)=>{
        return (
            <div id={index === current ? `slideActive`: `` } className="slide" 
            key={index}
            >
                {index===current && (<img  onClick={nextSlide} src={require(`./sneaks/${slide.image}.png`)} alt={slide.image} className='image' />)}
            
            </div>
        )
         
        
    })}
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>

    </div>
  )
}

export default Gallery