import React from 'react';
import nature5 from "../img/nature/image5.jpg";
import nature2 from "../img/nature/image2.jpg";
import tech4 from "../img/tech/image4.jpg";

export default function Home() {
  return (
    <div>
    <section className="portfolio-block block-intro">
            <div className="container">
                <div className="avatar" ></div>
                <div className="about-me">
                    <p><strong>Benjamin Fein</strong><br></br> A full stack web developer</p><a className="btn btn-outline-primary" role="button" href="#">More About Me</a>
                </div>
            </div>
        </section>
        <section className="portfolio-block photography">
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"><img className="img-fluid image" src={nature5}></img></a></div>
                    <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"><img className="img-fluid image" src={nature2}></img></a></div>
                    <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"><img className="img-fluid image" src={tech4}></img></a></div>
                </div>
            </div>
        </section>
        <section className="portfolio-block call-to-action border-bottom">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center content">
                    <h3>Like what you see?</h3><button className="btn btn-outline-primary btn-lg" type="button">Contact me</button>
                </div>
            </div>
        </section>
        <section className="portfolio-block skills">
            <div className="container">
                <div className="heading">
                    <h2>Special Skills</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card special-skill-item border-0">
                            <div className="card-header bg-transparent border-0"><i className="icon ion-ios-star-outline"></i></div>
                            <div className="card-body">
                                <h3 className="card-title">full stack apps</h3>
                                <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card special-skill-item border-0">
                            <div className="card-header bg-transparent border-0"><i className="icon ion-ios-lightbulb-outline"></i></div>
                            <div className="card-body">
                                <h3 className="card-title">web apps</h3>
                                <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card special-skill-item border-0">
                            <div className="card-header bg-transparent border-0"><i className="icon ion-ios-gear-outline"></i></div>
                            <div className="card-body">
                                <h3 className="card-title">back-end server developement</h3>
                                <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
  );
}
