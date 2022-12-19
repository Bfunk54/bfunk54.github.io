import React from 'react';
import Collapse from 'react-bootstrap/Collapse';

{/* <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} rounded size={20} color="#696eff" /> */}

function Nav({ currentPage, handlePageChange }) {
  return (
    // 696eff  -- navbar color
    <nav style= {{backgroundColor: 'rgba(245, 245, 245, 0.4)'}} className="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar gradient">
        <div className="container"><Collapse in={true} appear={true} dimension="width" timeout={9999}><a className="navbar-brand logo" style={{fontSize: '28px'}} href="#">Benjamin Fein</a></Collapse><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"


          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
