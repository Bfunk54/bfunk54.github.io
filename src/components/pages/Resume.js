import React from 'react';
import avatar from "../img/avatars/avatar.jpg";

export default function Blog() {
  return (
    <div>
    <section className="portfolio-block block-intro border-bottom">
            <div className="container">
                <div className="avatar" style={{backgroundImage: `url(${avatar})`}}></div>
                <div className="about-me">
                    <p>Hello! I am <strong>Benjamin Fein</strong>. I am a MERN stack developer with a strong passion for creating intuitive, user-friendly UI's and applications to help people and the world as a whole.</p><a className="btn btn-outline-primary" role="button" href="#">Hire me</a>
                </div>
            </div>
        </section>
        <section className="portfolio-block cv">
            <div className="container">
                <div className="education group">
                    <div className="heading">
                        <h2 className="text-center">Education</h2>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>High School</h3>
                                <h4 className="organization">Suncoast High School</h4>
                            </div>
                            <div className="col-6"><span className="period">09/2005 - 05/2010</span></div>
                        </div>
                        <p className="text-muted">Here I took my first coding courses and developed my passion for it, as well as being pushed very hard as per the Washington Post we were ranked the #8 most challenging high school in the U.S.</p>
                    </div>
                    <div style={{marginBottom: '30px'}} className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Full Stack Web Development Bootcamp</h3>
                                <h4 className="organization">University of Central Florida</h4>
                            </div>
                            <div className="col-md-6"><span className="period">09/2010 - 06/2015</span></div>
                        </div>
                        <p className="text-muted">Here, for three insanely long months, I worked 60 hours a week or more to hone my skills as a full stack web developer and build an incredible work ethic.</p>
                    </div>
                </div>
                <div className="group">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skills portfolio-info-card">
                                <h2>Skills</h2>
                                <h3>HTML</h3>
                                <div className="progress">
                                    <div className="progress-bar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}><span className="visually-hidden">90%</span></div>
                                </div>
                                <h3>CSS</h3>
                                <div className="progress">
                                    <div className="progress-bar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}><span className="visually-hidden">90%</span></div>
                                </div>
                                <h3>JavaScript</h3>
                                <div className="progress">
                                    <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}><span className="visually-hidden">80%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-info portfolio-info-card">
                                <h2>Contact Info</h2>
                                <div className="row">
                                    <div className="col-1"><i className="icon ion-person icon"></i></div>
                                    <div className="col-9"><span>Benjamin Fein</span></div>
                                </div>
                                <div className="row">
                                    <div className="col-1"><i className="icon ion-ios-telephone icon"></i></div>
                                    <div className="col-9"><span>(561) 398-7686</span></div>
                                </div>
                                <div className="row">
                                    <div className="col-1"><i className="icon ion-at icon"></i></div>
                                    <div className="col-9"><span ><a href='mailto:ben_fein@icloud.com'>ben_fein@icloud.com</a></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hobbies group">
                    <div className="heading">
                        <h2 className="text-center">Hobbies</h2>
                    </div>
                    <p className="text-center text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras risus ligula, iaculis ut metus sit amet, luctus pharetra mauris. Aliquam purus felis, pretium vel pretium vitae, dapibus sodales ante. Suspendisse potenti. Duis nunc eros.</p>
                </div>
            </div>
        </section>
        </div>
  );
}
