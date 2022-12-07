import React from 'react';

export default function Contact() {
  return (
    <section class="portfolio-block contact">
    <div class="container">
        <div class="heading">
            <h2>Contact me</h2>
        </div>
        <form>
            <div class="mb-3"><label class="form-label" for="name">Your Name</label><input class="form-control item" type="text" id="name"></input></div>
            <div class="mb-3"><label class="form-label" for="subject">Subject</label><input class="form-control item" type="text" id="subject"></input></div>
            <div class="mb-3"><label class="form-label" for="email">Email</label><input class="form-control item" type="email" id="email"></input></div>
            <div class="mb-3"><label class="form-label" for="message">Message</label><textarea class="form-control item" id="message"></textarea></div>
            <div class="mb-3"><button class="btn btn-primary btn-lg d-block w-100" type="submit">Submit Form</button></div>
        </form>
    </div>
</section>
  );
}
