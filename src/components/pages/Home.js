import React from "react";
import homePagePic from "../images/homepagepic.JPG"

const Home = () => (
  <div style={{ 
    backgroundImage:`url(${homePagePic})`,
  // backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }} >
    {/* <h1>Home Page</h1>
    <p >
    {/* <img src= {require("../images/informatics.jpg")} alt= "Healthcare IT" ></img> */}

      {/* Sparse page with links to About, Contact, and Projects pages. */}
    {/* </p> */} 
  </div>
);

export default Home;
