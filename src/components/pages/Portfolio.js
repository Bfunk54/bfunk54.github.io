import { apply as applySpring, useSpring, a, interpolater } from 'react-spring'
import { extend as applyThree, Canvas, useFrame, useThree } from 'react-three-fiber'
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import nature1 from '../img/nature/image1.jpg';
import nature2 from '../img/nature/image2.jpg';
import nature3 from '../img/nature/image3.jpg';
import nature4 from '../img/nature/image4.jpg';
import nature5 from '../img/nature/image5.jpg';
import nature6 from '../img/nature/image6.jpg';
import nature7 from '../img/nature/image7.jpg';
import nature8 from '../img/nature/image8.jpg';
import nature9 from '../img/nature/image9.jpg';
import USPostalPrinting from '../img/portfolio/USPostalPrinting.png';


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
            <div className="container">
                <div className="heading">
                    <h2>Recent Work</h2>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-unstyled sidebar">
                            <li><a className="active" href="#">All</a></li>
                            <li><a href="#">React</a></li>
                            <li><a href="#">Clean</a></li>
                            <li><a href="#">Colors</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="https://us-postal-printing.herokuapp.com/"><img className="img-fluid image scale-on-hover" src={USPostalPrinting}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="#"><img className="img-fluid image scale-on-hover" src={nature2}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="#"><img className="img-fluid image scale-on-hover" src={nature3}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="#"><img className="img-fluid image scale-on-hover" src={nature4}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="#"><img className="img-fluid image scale-on-hover" src={nature5}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="#"><img className="img-fluid image scale-on-hover" src={nature6}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="#"><img className="img-fluid image scale-on-hover" src={nature7}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="#"><img className="img-fluid image scale-on-hover" src={nature8}></img></a></div>
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="#"><img className="img-fluid image scale-on-hover" src={nature9}></img></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
