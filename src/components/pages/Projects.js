import React from "react";
import Row from "../Row";
import Col8 from "../Col8";
import "./projects.css";
import Col4 from "../Col4";

const Projects = () => (
  <div className="container">
    <Row className="border border-info">
      <Col8>
        <h4>Food Truck Application</h4>
        <p>Bringing Food Trucks and Foodies together.  An application for the food truck enthusiast to quickly find food trucks in their vicinity.
        It also allows food truck businesses to provide their location for easy locating by enthusiasts thereby increasing foot-traffic.
        Other ideas:  format for pre-ordering to streamline order queue; login format for user to easily capture their geolocation; provide link to Car service; UberEats/Doordash;one-stop shop for food trucks; </p>
      </Col8>
      <Col4>
        <img src={require("../images/Food-Truck-screenshot.PNG")} height="275" width="375" alt="Food truck deployed site"></img>
      </Col4>
    </Row>
    <Row className="project-row">
      <Col8>
        <h4>Custom Computer Builder Website</h4>
        <p>A simplified application for the novice computer builder.  This application simplifies the part picking process of putting together a new computer.
        This MVP application has the vision to eventually allow a user to put in a price point and/or a computer build endpoint (e.g. gaming, business) and
        parts that would be applicable and stay within budget.</p>
      </Col8>
      <Col4>
        <img src={require("../images/deskpc.jpg")} height="275" width="375" alt="Custom computer builder deployed site"></img>
      </Col4>
    </Row>
    <Row className="project-row">
      <Col8>
        <h4>Eat Da Burger App</h4>
        <p>This is a command-line application that dynamically creates an application for users to order a burger and devour it! When the end user is presented
        with the home page, there are two lists. On the left is a list of burgers ordered, but still not eaten. On the right is the list of burgers that have
        been devoured. The user also has the option to delete the burgers that have been eaten, or compost the ones that they no longer want to eat. The user
        may also want to order the same burger again, so they have that option as well. At the bottom of the page is where the user can order their next burger.
        They add whatever burger they desire in the text box, clidcl Add Burger, and it is added to the list of burgers yet to be devoured. The application uses
        MySQL to store the data. It uses one table to store all the burgers, with a boolean column to indicate which list the burger populates on the HTML page.</p>
      </Col8>
      <Col4>
        <img src="https://img.etimg.com/thumb/msid-68264285,width-643,imgsize-233750,resizemode-4/hamburger1_thinkstock.jpg" height="275" width="375" alt="Burger"></img>
      </Col4>
    </Row>
    <Row className="project-row">
      <Col8>
        <h4>Weather-Dashboard</h4>
        <p>This is a weather dashboard that supplies the weather for a location entered by the end user. When you enter the application, you are presented with
        a search bar. A user will enter a city name and click the search button. Once clicked, the searched city will populate on the screen with the current
        date, along with the current temperature, humidity, wind speed, and UV Index. The UV Index will present as a color to indicate if it is in an acceptable
        range (green), a warning range (yellow) or danger range (red). As well, an icon is presented to reflect the weather. Below that, the next five day
        forecast is called, showing the date, temperature, and humidity, as well as an icon depicting the weather. When the page is refreshed, the user's last
        search is saved to a button.</p>
      </Col8>
      <Col4>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.anao.gov.au%2Fsites%2Fdefault%2Ffiles%2Fanao_report%2Fimage%2Fanao-extreme-weather-BOM.jpg&f=1&nofb=1" height="275" width="375" alt="Food truck deployed site"></img>
      </Col4>
    </Row>
    <Row className="project-row">
      <Col8>
        <h4>Simple-Calendar</h4>
        <p>The application opens to its only page, which is a daily calendar to plan events for the workday. The workday in this planner is from 8am to 
        5pm. Each hour provides a text box to enter the event, and a save button. Once a user enters the event information, they click the save button 
        and the event text is saved in the local storage. The user can leave the page and return to find their events are still listed. The heading of 
        the page includes a dynamic day, date, and time feature. This feature is able to detect the user's time table and display it. Another added 
        feature on the calendar are color changes based on the time of day. If the hour is in the past, the event box will be presented as gray in color. 
        If it is the present hour, it is a red color. Lastly, if the hour is in the future, the color is green. This gives the user a easy visual to tell 
        what hour or hours they should focus their attention.</p>
      </Col8>
      <Col4>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftemplatelab.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fdaily-planner-template-21.jpg&f=1&nofb=1" height="275" width="375" alt="Food truck deployed site"></img>
      </Col4>
    </Row>
    <Row className="project-row">
      <Col8>
        <h4>Password-Generator</h4>
        <p>Upon entering the application site, the end user will see a form with a red button that must be clicked to generate the password. The box in the 
        center is the location where the application will print the password after all of the user input is received. After clicking the Generate Password 
        button, the user is asked a series of input questions. For the first input prompt, in order to move on to the first question, the user must enter 
        a number that is at least eight and at most 128. If the user selecs any number outside of that range, they will be alerted why and they must begin 
        again. For the four questions, a user must select at least one of the choices. If Cancel is selected for all four questions, the user receives an 
        alert and they must begin again. Once the user inputs an accepted number and selects the desired characters, the application will randomize a 
        password based on the selections. The password will display on the screen in the center box.</p>
      </Col8>
      <Col4>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftr2.cbsistatic.com%2Fhub%2Fi%2Fr%2F2017%2F09%2F26%2Fc0be8191-dfe3-43f1-84b0-df02589e5bb4%2Fthumbnail%2F770x578%2F7b5cb8df5bd19a1f77c7a977430e8cf2%2Fpassword-keychain.jpg&f=1&nofb=1" height="275" width="375" alt="Food truck deployed site"></img>
      </Col4>
    </Row>
  </div>
);

export default Projects;
