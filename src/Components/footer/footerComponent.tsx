import React from 'react'
import './style.css';

export  const  Footer = () => {
  return (
    <div className='footer'>
        <p className='footerDesc'>Copyright © 2022 UMF - All Rights Reserved.
      </p>
     <div className="social-icons">
        <a className="icon" href="https://twitter.com/UMF_NFT" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="icon" href="https://discord.gg/5tDgtbYSn9" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a className="icon" href="https://www.instagram.com/umf_nft/" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  )
}
