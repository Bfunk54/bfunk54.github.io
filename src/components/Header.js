import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import './pages/Home.css'
import Logo from './img/home/BenjaminFeinLogo.png'
import './Header.css'
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

{/* <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} rounded size={20} color="#696eff" /> */}

function Nav({ currentPage, handlePageChange }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    // 696eff  -- navbar color
    <nav style= {{backgroundColor: 'rgba(245, 245, 245, 0.7)', borderBottomLeftRadius: "40px", borderBottomRightRadius: "40px" }} className="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar gradient">
        <div style={{display: 'flex', justifyContent: 'center'}} className="container"><Collapse in={true} appear={open} onEnter={toggleDrawer(true)} onExit={toggleDrawer(false)} dimension="width" timeout={9999}><a className="navbar-brand logo" style={{fontSize: '34px', color: 'black', fontWeight: 500}} href="#"><img style={{height: 110, width: 525}} className='logo' src={Logo} /></a></Collapse><button style={{marginTop: '-25px', textDecoration: "none"}} data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><Hamburger id="nav" onToggle={toggleDrawer(true)} color="#4FD1C5" rounded={true} style={{justifyContent: 'center'}} className="navbar-toggler-icon"/></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul style={{display: 'flex', justifyContent: 'center'}} className="navbar-nav ms-auto">
                <li style={{display: 'flex', justifyContent: 'center', marginRight: '10px'}} className="nav-item home navbar-toggler">
                <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: 18 }}
                onClick={() => handlePageChange('Home') }
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                  <button className="btn btn-bd-primary btn"
                  data-bs-toggle="collapse" data-bs-target="#navbarNav" type="button">
          Home
          </button>
        </Link>
      </li>
      <li style={{display: 'flex', justifyContent: 'center', marginRight: '10px'}} className="nav-item navbar-toggler">
      <Link to="/portfolio" style={{ color: "white", textDecoration: "none", fontSize: 18 }}
        onClick={() => { handlePageChange('Portfolio'); toggleDrawer(false)} }
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          <button className="btn btn-bd-primary btn"
                  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" type="button">
          Portfolio
          </button>
        </Link>
      </li>
      <li style={{display: 'flex', justifyContent: 'center', marginRight: '10px'}} className="nav-item navbar-toggler">
      <Link to="/resume" style={{ color: "white", textDecoration: "none", fontSize: 18 }}
        onClick={() => { handlePageChange('Resume'); toggleDrawer(false)} }
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          <button className="btn btn-bd-primary btn"
                  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" type="button">
          Resume
          </button>
        </Link>
      </li>
      <li style={{display: 'flex', justifyContent: 'center'}} className="nav-item navbar-toggler contact">
      <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: 18 }}
          onClick={() => { handlePageChange('Contact'); toggleDrawer(false)} }
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <button className="btn btn-bd-primary btn"
                  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" type="button">
          Contact
          </button>
        </Link>
      </li>
      </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
