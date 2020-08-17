import React from "react";
import "./contact.css"

const Contact = () => (
  <div>
    {/* <h1>Contact Page</h1> */}
    <main className="container">
    <form>
      <section className="row">
        <header className="col-md-8">
          <h1 id="contact">Contact</h1>
        </header>
      </section>
      <section className="row">
        <article className="col-md-8">
          <label for="name">Name</label><br></br>
          <input type="text" className="form-control" placeholder="John Smith"></input><br></br>
        </article>
      </section>
      <section className="row">
        <article className="col-md-8">
          <label for="email">Email</label><br></br>
          <input type="email" className="form-control" placeholder="example@gmail.com"></input><br></br>
        </article>
      </section>
      <section className="row">
        <article className="col-md-8">
          <label for="Message">Message</label><br></br>
          <textarea className="form-control" rows="5" id="comment"></textarea><br></br>
        </article>
      </section>
      <section className="row">
        <article className="col-md-8">
          <button type="button" className="btn btn-dark btn-custom">Submit</button>
        </article>
      </section>
    </form>
  </main>
  </div>
);

export default Contact;
