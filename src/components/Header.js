import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import './pages/Home.css'
import Logo from './img/home/BenjaminFeinLogo.png'
import './Header.css'
import Hamburger from "hamburger-react";

{/* <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} rounded size={20} color="#696eff" /> */}

function Nav({ currentPage, handlePageChange }) {
  return (
    // 696eff  -- navbar color
    <nav style= {{backgroundColor: 'rgba(245, 245, 245, 0.7)', borderBottomLeftRadius: "40px", borderBottomRightRadius: "40px" }} className="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar gradient">
        <div style={{display: 'flex', justifyContent: 'center'}} className="container"><Collapse in={true} appear={true} dimension="width" timeout={9999}><a className="navbar-brand logo" style={{fontSize: '34px', color: 'black', fontWeight: 500}} href="#"><img style={{height: 110, width: 525}} className='logo' src={Logo} /></a></Collapse><button style={{marginTop: '-25px'}} data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><Hamburger color="#4FD1C5" rounded={true} style={{justifyContent: 'center'}} className="navbar-toggler-icon"></Hamburger></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul style={{display: 'flex', justifyContent: 'center'}} className="navbar-nav ms-auto">
                <li style={{display: 'flex', justifyContent: 'center', marginRight: '10px'}} className="nav-item home">
                <button className="btn btn-bd-primary btn" type="button">
                <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
        </button>
      </li>
      <li style={{display: 'flex', justifyContent: 'center', marginRight: '10px'}} className="nav-item">
      <button className="btn btn-bd-primary btn" type="button">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          
        >
          Portfolio
        </a>
        </button>
      </li>
      <li style={{display: 'flex', justifyContent: 'center', marginRight: '10px'}} className="nav-item">
      <button className="btn btn-bd-primary btn" type="button">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          
        >
          Resume
        </a>
        </button>
      </li>
      <li style={{display: 'flex', justifyContent: 'center'}} className="nav-item contact">
      <button className="btn btn-bd-primary btn" type="button">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          
        >
          Contact
        </a>
        </button>
      </li>
      </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
