import React from "react";

const Contact = () => (
  <div>
    {/* <h1>Contact Page</h1> */}
    <main class="container">
    <form>
      <section class="row">
        <header class="col-md-8">
          <h1 id="contact">Contact</h1>
        </header>
      </section>
      <section class="row">
        <article class="col-md-8">
          <label for="name">Name</label><br></br>
          <input type="text" class="form-control" placeholder="John Smith"></input><br></br>
        </article>
      </section>
      <section class="row">
        <article class="col-md-8">
          <label for="email">Email</label><br></br>
          <input type="email" class="form-control" placeholder="example@gmail.com"></input><br></br>
        </article>
      </section>
      <section class="row">
        <article class="col-md-8">
          <label for="Message">Message</label><br></br>
          <textarea class="form-control" rows="5" id="comment"></textarea><br></br>
        </article>
      </section>
      <section class="row">
        <article class="col-md-8">
          <button type="button" class="btn btn-primary btn-custom">Submit</button>
        </article>
      </section>
    </form>
  </main>
  </div>
);

export default Contact;
