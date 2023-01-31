import { apply as applySpring, useSpring, a, interpolater } from 'react-spring'
import { extend as applyThree, Canvas, useFrame, useThree } from 'react-three-fiber'
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import USPostalPrinting from '../img/portfolio/USPostalPrinting.png';
import jate from "../img/portfolio/jate1.png";
import shocase from "../img/portfolio/shocase1.png";
import foodfind from "../img/portfolio/foodfind1.png";
import ProgrammersHeaven from '../img/portfolio/ProgrammersHeaven.png';
import NoteBuddy from '../img/portfolio/NoteBuddy.png';
import ZippyWeather from '../img/portfolio/ZippyWeather.png';
import SocialApi from '../img/portfolio/mongodb-socialmediaapi.png';
import OneShop from '../img/portfolio/OneShop.png';
import InnerImageZoom from 'react-inner-image-zoom';
import './Home.css'


export default function Portfolio() {

    function Background({ color }) {
        const { viewport } = useThree()
        return (
          <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry attach="geometry" args={[1, 1]} />
            <a.meshBasicMaterial attach="material" color={color} depthTest={false} />
          </mesh>
        )
      }

    const Effects = React.memo(({ factor }) => {
        const { gl, scene, camera, size } = useThree()
        const composer = useRef()
        useEffect(() => void composer.current.setSize(size.width, size.height), [size])
        // This takes over as the main render-loop (when 2nd arg is set to true)
        useFrame(() => composer.current.render(), 1)
        return (
          <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" args={[scene, camera]} />
            <a.glitchPass attachArray="passes" renderToScreen factor={factor} />
          </effectComposer>
        )
      })
  return (
    <div>
      <section className="portfolio-block projects-with-sidebar">
            <div style={{height: '82.8vh'}} className="container">
                <div className="heading">
                  <div style={{textAlign: 'center', marginBottom: '10px', width: '20%', height: '40px', backgroundColor: 'rgba(245, 245, 245, 0.6)', borderRadius: '20px'}}>
                    <h2>Recent Work</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        {/* <ul className="list-unstyled sidebar">
                            <li><a className="active" href="#">All</a></li>
                            <li><a href="#">React</a></li>
                            <li><a href="#">Clean</a></li>
                            <li><a href="#">Colors</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul> */}
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://us-postal-printing.herokuapp.com/"><InnerImageZoom className="img-fluid image scale-on-hover" hasSpacer= {true} 
            zoomType="hover"
            zoomPreload={true}
            fullscreenOnMobile={true} 
            zoomScale={.22} src={USPostalPrinting} zoomSrc={USPostalPrinting}/></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://shocase.herokuapp.com/"><img className="img-fluid image scale-on-hover" src={shocase}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://foodfind.tech/"><img className="img-fluid image scale-on-hover" src={foodfind}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://jate-anothertexteditor.herokuapp.com/"><img className="img-fluid image scale-on-hover" src={jate}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://programmersheaven.herokuapp.com/"><img className="img-fluid image scale-on-hover" src={ProgrammersHeaven}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://the-note-buddy.herokuapp.com/"><img className="img-fluid image scale-on-hover" src={NoteBuddy}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://github.com/Bfunk54/OneShop/"><img className="img-fluid image scale-on-hover" src={OneShop}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://github.com/Bfunk54/MongoDB-SocialMediaAPI/"><img className="img-fluid image scale-on-hover" src={SocialApi}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://bfunk54.github.io/ZippyWeather/"><img className="img-fluid image scale-on-hover" src={ZippyWeather}></img></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
