import React from 'react';

function Footer() {
  return (
    <footer className="footer">
        <span className='text-light' style={{fontSize: '16px'}}>Ben's Portfolio 2022 </span>

        <a style= {{padding: '16px', paddingBottom: 0}} href="https://github.com/Bfunk54" target="_blank" rel="noreferrer">
            <i style={{fontSize: '40px'}} className="bi bi-github"><span style={{fontSize: '10px'}}>github</span></i>
        </a>

        <a style= {{padding: '16px', paddingBottom: 0}} href="https://www.linkedin.com/in/benjamin-fein-5a73b2242/" target="_blank" rel="noreferrer">
            <i style={{fontSize: '40px'}} className="bi bi-linkedin"><span style={{fontSize: '10px', padding: '4px'}}>linkedin</span></i>
        </a>

        <a style= {{padding: '16px', paddingBottom: 0}} href="https://twitter.com/ben_fein" target="_blank" rel="noreferrer">
            <i style={{fontSize: '40px'}} className="bi bi-twitter"><span style={{fontSize: '10px'}}>twitter</span></i>
        </a>
    </footer>
    )};

export default Footer;