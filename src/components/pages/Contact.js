import React from 'react';

export default function Contact() {
  return (
    <section className="portfolio-block contact">
    <div className="container">
        <div className="heading">
            <h2>Contact me</h2>
        </div>
        <form>
            <div className="mb-3"><label className="form-label" htmlFor="name">Your Name</label><input className="form-control item" type="text" id="name"></input></div>
            <div className="mb-3"><label className="form-label" htmlFor="subject">Subject</label><input className="form-control item" type="text" id="subject"></input></div>
            <div className="mb-3"><label className="form-label" htmlFor="email">Email</label><input className="form-control item" type="email" id="email"></input></div>
            <div className="mb-3"><label className="form-label" htmlFor="message">Message</label><textarea className="form-control item" id="message"></textarea></div>
            <div className="mb-3"><button className="btn btn-primary btn-lg d-block w-100" type="submit">Submit Form</button></div>
        </form>
    </div>
</section>
  );
}
