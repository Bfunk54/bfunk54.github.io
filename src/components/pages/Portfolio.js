import { apply as applySpring, useSpring, a, interpolater } from "react-spring";
import {
  extend as applyThree,
  Canvas,
  useFrame,
  useThree,
} from "react-three-fiber";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Card from "react-bootstrap/Card";
import USPostalPrinting from "../img/portfolio/USPostalPrinting.png";
import jate from "../img/portfolio/jate1.png";
import shocase from "../img/portfolio/shocase1.png";
import foodfind from "../img/portfolio/foodfind1.png";
import ProgrammersHeaven from "../img/portfolio/ProgrammersHeaven.png";
import NoteBuddy from "../img/portfolio/NoteBuddy.png";
import ZippyWeather from "../img/portfolio/ZippyWeather.png";
import SocialApi from "../img/portfolio/mongodb-socialmediaapi.png";
import OneShop from "../img/portfolio/OneShop.png";
import InnerImageZoom from "react-inner-image-zoom";
import Github from "../img/github/github-mark.png";
import "./Home.css";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div style={{ margin: "auto" }}>
      <section className="portfolio-block projects-with-sidebar portfolio">
        <div className="container">
          <div className="heading">
            <div
              className="recent"
              style={{
                textAlign: "center",
                marginBottom: "10px",
                width: "20%",
                height: "40px",
                backgroundColor: "rgba(245, 245, 245, 0.5)",
                backdropFilter: "blur(20px)",
                webkitBackdropFilter: 'blur(20px)',
                borderRadius: "20px",
              }}
            >
              <h2>Recent Work</h2>
            </div>
          </div>
          <div className="row">
            <div
              style={{ marginBottom: 26 }}
              className="col-md-6 col-lg-4 project-sidebar-card"
            >
              <Card bg="light" border="secondary">
                <a href="https://us-postal-printing.herokuapp.com/">
                  <InnerImageZoom
                    className="img-fluid image scale-on-hover"
                    hasSpacer={true}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.22}
                    src={USPostalPrinting}
                    zoomSrc={USPostalPrinting}
                  />

                  <Card.Header style={{ fontSize: "18px" }}>
                    US Postal & Printing
                  </Card.Header>
                </a>
                <Card.Body>
                  <Card.Text style={{ fontSize: "14px" }}>
                    A full MERN stack web app made for a postal & printing
                    company located in south Florida.
                    <br />
                    <a href="https://github.com/Mateo-Wallace/US-Postal-Printing">
                      <img style={{ height: 35, width: 35 }} src={Github} />
                      Github Repo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              style={{ marginBottom: 26 }}
              className="col-md-6 col-lg-4 project-sidebar-card"
            >
              <Card bg="light" border="secondary">
                <a href="https://shocase.herokuapp.com/">
                  <InnerImageZoom
                    className="img-fluid image scale-on-hover"
                    hasSpacer={true}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.22}
                    src={shocase}
                    zoomSrc={shocase}
                  />
                  <Card.Header style={{ fontSize: "18px" }}>
                    ShoCase
                  </Card.Header>
                </a>
                <Card.Body>
                  <Card.Text style={{ fontSize: "14px" }}>
                    A full stack social media web app for people to share their
                    favorite Anime and discover new ones using a MySQL database.
                    <br />
                    <a href="https://github.com/Bfunk54/ShoCase">
                      <img style={{ height: 35, width: 35 }} src={Github} />
                      Github Repo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              style={{ marginBottom: 26 }}
              className="col-md-6 col-lg-4 project-sidebar-card"
            >
              <Card bg="light" border="secondary">
                <a href="https://foodfind.tech/">
                  <InnerImageZoom
                    className="img-fluid image scale-on-hover"
                    hasSpacer={true}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.22}
                    src={foodfind}
                    zoomSrc={foodfind}
                  />
                  <Card.Header style={{ fontSize: "18px" }}>
                    Food Find
                  </Card.Header>
                </a>
                <Card.Body>
                  <Card.Text style={{ fontSize: "14px" }}>
                    A web app allowing the user to discover new recipes at the
                    click of a button from a database of millions of different
                    and interesting recipes.
                    <br />
                    <a href="https://github.com/harrj396/FoodFind">
                      <img style={{ height: 35, width: 35 }} src={Github} />
                      Github Repo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              style={{ marginBottom: 26 }}
              className="col-md-6 col-lg-4 project-sidebar-card"
            >
              <Card bg="light" border="secondary">
                <a href="https://jate-anothertexteditor.herokuapp.com/">
                  <InnerImageZoom
                    className="img-fluid image scale-on-hover"
                    hasSpacer={true}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.22}
                    src={jate}
                    zoomSrc={jate}
                  />
                  <Card.Header style={{ fontSize: "18px" }}>
                    J.A.T.E. (Just Another Text Editor)
                  </Card.Header>
                </a>
                <Card.Body>
                  <Card.Text style={{ fontSize: "14px" }}>
                    This text editor allows you write out text (javascript will
                    be color coded) and all text will be automatically saved to
                    a database even if you lose internet or your computer shuts
                    down. This app is also downloadable and can be installed as
                    a stand-alone application.
                    <br />
                    <a href="https://github.com/Bfunk54/JATE-JustAnotherTextEditor">
                      <img style={{ height: 35, width: 35 }} src={Github} />
                      Github Repo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              style={{ marginBottom: 26 }}
              className="col-md-6 col-lg-4 project-sidebar-card"
            >
              <Card bg="light" border="secondary">
                <a href="https://programmersheaven.herokuapp.com/">
                  <InnerImageZoom
                    className="img-fluid image scale-on-hover"
                    hasSpacer={true}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.22}
                    src={ProgrammersHeaven}
                    zoomSrc={ProgrammersHeaven}
                  />
                  <Card.Header style={{ fontSize: "18px" }}>
                    Programmers' Heaven
                  </Card.Header>
                </a>
                <Card.Body>
                  <Card.Text style={{ fontSize: "14px" }}>
                    A forum web app which uses a MySQL database to store login
                    information for users, post data, comments data, and it's
                    all routed to look good out on an html page!
                    <br />
                    <a href="https://github.com/Bfunk54/ProgrammersHeaven">
                      <img style={{ height: 35, width: 35 }} src={Github} />
                      Github Repo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              style={{ marginBottom: 26 }}
              className="col-md-6 col-lg-4 project-sidebar-card"
            >
              <Card bg="light" border="secondary">
                <a href="https://the-note-buddy.herokuapp.com/">
                  <InnerImageZoom
                    className="img-fluid image scale-on-hover"
                    hasSpacer={true}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.22}
                    src={NoteBuddy}
                    zoomSrc={NoteBuddy}
                  />
                  <Card.Header style={{ fontSize: "18px" }}>
                    Note Buddy
                  </Card.Header>
                </a>
                <Card.Body>
                  <Card.Text style={{ fontSize: "14px" }}>
                    A web app that fills all of your note taking needs! It uses
                    a MySQL database holding all of your notes and the app can
                    dynamically add and delete your notes in the database.
                    <br />
                    <a href="https://github.com/Bfunk54/NoteBuddy">
                      <img style={{ height: 35, width: 35 }} src={Github} />
                      Github Repo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              style={{ marginBottom: 26 }}
              className="col-md-6 col-lg-4 project-sidebar-card"
            >
              <Card bg="light" border="secondary">
                <a href="https://github.com/Bfunk54/OneShop/">
                  <InnerImageZoom
                    className="img-fluid image scale-on-hover"
                    hasSpacer={true}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.22}
                    src={OneShop}
                    zoomSrc={OneShop}
                  />
                  <Card.Header style={{ fontSize: "18px" }}>
                    One Shop
                  </Card.Header>
                </a>
                <Card.Body>
                  <Card.Text style={{ fontSize: "14px" }}>
                    A working MySQL database for a hypothetical e-commerce
                    website.
                    <br />
                    <a href="https://github.com/Bfunk54/OneShop">
                      <img style={{ height: 35, width: 35 }} src={Github} />
                      Github Repo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              style={{ marginBottom: 26 }}
              className="col-md-6 col-lg-4 project-sidebar-card"
            >
              <Card bg="light" border="secondary">
                <a href="https://github.com/Bfunk54/MongoDB-SocialMediaAPI/">
                  <InnerImageZoom
                    className="img-fluid image scale-on-hover"
                    hasSpacer={true}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.22}
                    src={SocialApi}
                    zoomSrc={SocialApi}
                  />
                  <Card.Header style={{ fontSize: "18px" }}>
                    MongoDB Social Media API
                  </Card.Header>
                </a>
                <Card.Body>
                  <Card.Text style={{ fontSize: "14px" }}>
                    A NoSQL social media API ready for implementation. It allows
                    users, posts, and comments to those posts along with
                    friends, friend counts and comment/reaction counts.
                    <br />
                    <a href="https://github.com/Bfunk54/MongoDB-SocialMediaAPI">
                      <img style={{ height: 35, width: 35 }} src={Github} />
                      Github Repo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div
              style={{ marginBottom: 26 }}
              className="col-md-6 col-lg-4 project-sidebar-card"
            >
              <Card bg="light" border="secondary">
                <a href="https://bfunk54.github.io/ZippyWeather/">
                  <InnerImageZoom
                    className="img-fluid image scale-on-hover"
                    hasSpacer={true}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.22}
                    src={ZippyWeather}
                    zoomSrc={ZippyWeather}
                  />
                  <Card.Header style={{ fontSize: "18px" }}>
                    Zippy Weather
                  </Card.Header>
                </a>
                <Card.Body>
                  <Card.Text style={{ fontSize: "14px" }}>
                    A simple weather dashboard to show you the current weather
                    data as well as a five day forecast for any city you want!
                    <br />
                    <a href="https://github.com/Bfunk54/ZippyWeather">
                      <img style={{ height: 35, width: 35 }} src={Github} />
                      Github Repo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
