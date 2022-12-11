import React from 'react';
import "./styles.scss";
import { url } from 'inspector';


export const UtiliteCard = ({title, icon, content,bgColor}:
     {title:string, icon:string, content:string, bgColor:string}) => {

      let newClassName:string = `color_bg ${icon}`;
      let backgroundPath:string = `url(../../assets/${icon}.png)`;
  return (
    <div className='u-card'>
        <div className="u-wrapper">
          <div className={newClassName} style={{"backgroundColor": bgColor}}></div>
          <img className='u-card-img' src={require(`../../assets/${icon}.png`)} alt={`${icon}`} />
          
          <div className="u-card-info">
          <h1 className="u-card-title">{title}</h1>
          <p className="u-card-content">{content}</p>
          </div>

        </div>
    </div>
  )
}
