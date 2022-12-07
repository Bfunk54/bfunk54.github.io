import React from 'react';

function Footer() {
  return (
    <footer className="footer">
        <span>Ben's Portfolio 2022</span>

        <a style= {{padding: '10px'}} href="https://github.com/Bfunk54" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
        </a>

        <a style= {{padding: '10px'}} href="https://www.linkedin.com/in/benjamin-fein-5b0b1b1b3/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
        </a>

        <a style= {{padding: '10px'}} href="https://twitter.com/ben_fein" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter"></i>
        </a>
    </footer>
    )};

export default Footer;