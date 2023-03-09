import React from 'react';
import './Home.css'
import ResumeImg from '../img/resume/BenjaminFeinResume.png'
import Resume from '../img/resume/BenjaminFeinResume.pdf'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './Resume.css'

export default function Blog() {
        const renderTooltip = (props) => (
          <Tooltip id="button-tooltip" {...props}>
            Click anywhere to download
          </Tooltip>
        );

  return (
    <div className='resumeContainer'>
        <div className='other' style={{display: 'flex', justifyContent: 'center', paddingBottom: '40px'}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 100, hide: 400 }}
      overlay={renderTooltip}
      open={true}
    >
        <a href={Resume} download='BenjaminFeinResume' target='blank'>
        <InnerImageZoom height= {525} 
            width= {375}
            className= 'image' 
            hasSpacer= {true} 
            zoomType="hover"
            zoomPreload={true}
            fullscreenOnMobile={true} 
            zoomScale={.22}
            src={ResumeImg} 
            zoomSrc={ResumeImg}/>
            </a>
        </OverlayTrigger>
        </div>
        </div>
  );
}
