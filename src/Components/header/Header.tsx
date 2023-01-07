import React, {useState} from 'react'

const Header = () => {
  
  const [hamburgerisActive, setHamburgerisActive] = useState(false);

  const menuClick = ()=>{
  setHamburgerisActive(!hamburgerisActive);
 
   }


  return (
    <>
    <header className="header">
    <a href='javascript:window.location.reload(true)' className="menu_item" id='logo'>
      <img className='logo-img' src={require('../../assets/logo.png')} alt="logo" />
      </a>

    <nav className="navigation" id={hamburgerisActive ? `navActive` : ` `}>
      <a href="#home" className="menu_item" onClick={menuClick} >Home</a>
      <a href="#SneakPeak" className="menu_item" onClick={menuClick}>Sneak Peak</a>
      <a href="#utilities" className="menu_item" onClick={menuClick}>UTILITIES</a>
      <a href="#story" className="menu_item" onClick={menuClick}>STORY</a>
      <a href="#road-map" className="menu_item" onClick={menuClick}>ROAD</a>
      <a href="#family-line" className="menu_item" onClick={menuClick}>FAMILY</a>
      <a href="#faqs" className="menu_item" onClick={menuClick}>FAQ</a>
    </nav>
    <div className="hamburger menu_item" id={hamburgerisActive ? `hamActive` : ` `}  onClick={menuClick}> 
      <span className="bar" ></span>
      <span className="bar"></span>
      <span className="bar"></span>
    
    </div>
  </header>
    </>
  )
}

export default Header