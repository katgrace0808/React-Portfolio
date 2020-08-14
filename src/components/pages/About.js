import React from "react";

const About = () => (
  <div>
    <section className="row">
      <header className="col-sm-7">
        <h1 id="aboutme">About Me</h1>
        <section className="row">
          <figure className="col-sm-4">
            <img src= {require("../images/r2d2.jpg")} className="r2d2" height="150" width="150" alt="R2D2's dome head."></img>
          </figure>
          <article className="col-sm-8">
            <p>I am a student at the University of Washington (UW) Coding Boot Camp. At the end of the program, I will
              possess the skills of a full-stack web developer. The programming languages learned include HTML5, CSS3,
              JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command
              Line, Git, and more.</p>
          </article>
        </section>
        <section className="row">
          <article className="col-sm-12">
            <p>I am currently employed with UW Medicine in their IT department, playing an integral role using Epic's
              Hospital Billing software. When not at work, I enjoy playing with my dog, Riley, and my cat, Ivy. I am
              also an active gardener, and take any time I can get to read and take daily walks.</p>
          </article>
        </section>
      </header>
      <figure className="col-sm-5">
        <img src={require("../images/headshot.jpg")} className="headshot" height="500" width="375" alt="Kathryn Teall headshot"></img>
      </figure>
    </section>
  </div>
);

export default About;
