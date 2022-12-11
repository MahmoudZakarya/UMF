import React from "react"


export default function TeamCard({id,img_path, mName,
     mDescription, mP, twitter, insta } : {
        id:string, img_path:string, mName:string , mDescription:string
        , mP:string, twitter:string, insta:string
     }) {
         return (<> <div id={id} className="family-card">
        <img className="member-img" src={img_path}  alt=""/>
        <h3 className="member-name">{mName}</h3>
        <h4 className="member-description">{mDescription}</h4>
        <p className="member-p">{mP}</p>
           <div className="social-icons" id="member-social">
        <a className="icon" href={twitter} target='_blank'>
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="icon" href={insta} target='_blank'>
          <i className="fa-brands fa-instagram"></i>
        </a>
       
      </div>
      </div></>)
     }