import React from 'react';
import avatar from "../img/avatars/avatar.jpg";
import './Home.css'
import ResumeImg from '../img/resume/BenjaminFeinResume-Small.png'
import ResumeImgLarge from '../img/resume/BenjaminFeinResume-Large.png'
import Resume from '../img/resume/BenjaminFeinResume.pdf'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ReactImageZoom from 'react-image-zoom';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

export default function Blog() {
        const renderTooltip = (props) => (
          <Tooltip id="button-tooltip" {...props}>
            Click here to download
          </Tooltip>
        );

  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <OverlayTrigger
      placement="right"
      delay={{ show: 200, hide: 400 }}
      overlay={renderTooltip}
    >
        <a href={Resume} download='BenjaminFeinResume' target='blank'>
        <InnerImageZoom height= {615} 
            width= {475} 
            hasSpacer= {true} 
            zoomType="hover"
            zoomPreload={true}
            fullscreenOnMobile={true} 
            zoomScale={.22}
            src={ResumeImgLarge} 
            zoomSrc={ResumeImgLarge}/>
            </a>
        </OverlayTrigger>
        </div>
        </div>
  );
}
