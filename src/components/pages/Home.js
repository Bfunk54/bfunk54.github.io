import React from "react";
import susan_hanssen from "../img/portfolio/susan_hanssen.png";
import pilytix_ai_demo from "../img/portfolio/pilytix_ai_demo.png";
import USPostalPrinting from "../img/portfolio/USPostalPrinting.png";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import { Link } from "react-router-dom";

const techIconStyle = {
  padding: "5px",
};
const portfolioPreviewStyle = {
  marginRight: "20px",
};

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div className="home">
      <section className="portfolio-block block-intro">
        <div className="cubeContainer container">
          <div className="about-me" style={{}}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                width: "70%",
                height: "110px",
                backgroundColor: "rgba(245, 245, 245, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: 'blur(20px)',
              }}
              className="heading card special-skill-item border-0 fullStack"
            >
              <h1>A full stack MERN web developer.</h1>
            </div>
          </div>
          <div className="cube">
            <div className="stage-cube-cont">
              <div className="cubespinner" style={{ marginTop: 60 }}>
                <div className="face1">
                  <FontAwesomeIcon icon={faBootstrap} color="#a600dd;" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-block photography">
        <div style={{ padding: "20px" }} className="container">
          <div className="row g-0">
            <div
              style={{ marginBottom: "10px" }}
              className="col-md-6 col-lg-4 item zoom-on-hover"
            >
              <a href="https://susanhanssen.com/">
                <Image
                  thumbnail={true}
                  style={portfolioPreviewStyle}
                  className="img-fluid image"
                  src={susan_hanssen}
                ></Image>
              </a>
            </div>
            <div
              style={{ marginBottom: "10px" }}
              className="col-md-6 col-lg-4 item zoom-on-hover"
            >
              <a href="https://benfein.me/PILYTIX_AI_React_Demo/">
                <Image
                  thumbnail={true}
                  className="img-fluid image"
                  src={pilytix_ai_demo}
                ></Image>
              </a>
            </div>
            <div
              style={{ marginBottom: "10px" }}
              className="col-md-6 col-lg-4 item zoom-on-hover"
            >
              <a href="https://us-postal-printing.herokuapp.com/">
                <Image
                  thumbnail={true}
                  style={portfolioPreviewStyle}
                  className="img-fluid image"
                  src={USPostalPrinting}
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-block call-to-action border-bottom">
        <div className="container">
          <div
            style={{ paddingBottom: "20px" }}
            className="d-flex align-items-center content"
          >
            <h4 className="card special-skill-item border-0 likewhat">
              Like what you see?
            </h4>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none", fontSize: 18 }}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              <button
                className="btn btn-bd-primary btn contactMe"
                type="button"
              >
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        style={{ paddingBottom: "20px" }}
        className="portfolio-block skills border-bottom"
      >
        <div style={{ paddingTop: "20px" }} className="container">
          <div className="heading card special-skill-item border-0 special">
            <h2 style={{ marginTop: "4px" }}>Special Skills</h2>
          </div>
          <div style={{ display: "flex" }} className="row">
            <div style={{ marginBottom: "10px" }} className="col-md-4">
              <div
                style={{
                  backgroundColor: "rgba(245, 245, 245, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: 'blur(20px)',
                }}
                className="card special-skill-item border-0"
              >
                <div
                  className="card-header bg-transparent border-0"
                  style={{ paddingBottom: "0px", paddingTop: "10px" }}
                >
                  <h3 className="card-title">Full Stack MERN Apps</h3>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    I can make web applications which utilize a database I can
                    create from scratch and utilize a clean, intuitive and
                    easy-to-use front-end. Here, I have utilized technologies
                    such as MongoDB, Express, Node Js, React, GraphQL, and many
                    more.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "10px" }} className="col-md-4">
              <div
                style={{
                  backgroundColor: "rgba(245, 245, 245, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: 'blur(20px)',
                }}
                className="card special-skill-item border-0"
              >
                <div
                  className="card-header bg-transparent border-0"
                  style={{ paddingBottom: "0px", paddingTop: "10px" }}
                >
                  <h3 className="card-title">Web Apps</h3>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    I can also create simpler websites which only employ a
                    front-end utitlizing html, css, and javascript.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "10px" }} className="col-md-4">
              <div
                style={{
                  backgroundColor: "rgba(245, 245, 245, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: 'blur(20px)',
                }}
                className="card special-skill-item border-0"
              >
                <div
                  className="card-header bg-transparent border-0"
                  style={{ paddingBottom: "0px", paddingTop: "10px" }}
                >
                  <h3 className="card-title">Back-End Server Developement</h3>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    I can create back-end servers used to store and encrypt
                    secure data. This can also be known as a database or API.
                    Whatever name you know it by, I can create it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-block technologies">
        <div style={{ paddingTop: "20px" }} className="container">
          <div className="heading card special-skill-item border-0 tech">
            <h2 style={{ marginTop: "4px" }}>Technologies I Use</h2>
          </div>
          <div
            style={{ padding: "15px" }}
            align="center"
            className="d-flex flex-wrap justify-content-between"
          >
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png"
                alt="GraphQL"
                title="GraphQL"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png"
                alt="REST"
                title="REST"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
                alt="Git"
                title="Git"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
                alt="GitHub"
                title="GitHub"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"
                alt="Visual Studio Code"
                title="Visual Studio Code"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png"
                alt="Postman"
                title="Postman"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                alt="HTML"
                title="HTML"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                alt="CSS"
                title="CSS"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png"
                alt="Sass"
                title="Sass"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"
                alt="Bootstrap"
                title="Bootstrap"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
                alt="Tailwind CSS"
                title="Tailwind CSS"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png"
                alt="Material UI"
                title="Material UI"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                alt="JavaScript"
                title="JavaScript"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                alt="React"
                title="React"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png"
                alt="npm"
                title="npm"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                alt="Node.js"
                title="Node.js"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                alt="Express"
                title="Express"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png"
                alt="Jest"
                title="Jest"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/187955008-981340e6-b4cc-441b-80cf-7a5e94d29e7e.png"
                alt="webpack"
                title="webpack"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png"
                alt="Java"
                title="Java"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png"
                alt="MySQL"
                title="MySQL"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                alt="mongoDB"
                title="mongoDB"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png"
                alt="bash"
                title="bash"
              />
            </code>
            <code>
              <img
                style={techIconStyle}
                height="100"
                src="https://user-images.githubusercontent.com/25181517/186884152-ae609cca-8cf1-4175-8d60-1ce1fa078ca2.png"
                alt="macOS"
                title="macOS"
              />
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
