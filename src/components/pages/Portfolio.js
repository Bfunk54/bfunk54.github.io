import React from 'react';
import nature1 from '../img/nature/image1.jpg';
import nature2 from '../img/nature/image2.jpg';
import nature3 from '../img/nature/image3.jpg';
import nature4 from '../img/nature/image4.jpg';
import nature5 from '../img/nature/image5.jpg';
import nature6 from '../img/nature/image6.jpg';
import nature7 from '../img/nature/image7.jpg';
import nature8 from '../img/nature/image8.jpg';
import nature9 from '../img/nature/image9.jpg';

export default function Portfolio() {
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
                            <div className="col-md-6 col-lg-4 project-sidebar-card"><a href="#"><img className="img-fluid image scale-on-hover" src={nature1}></img></a></div>
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
