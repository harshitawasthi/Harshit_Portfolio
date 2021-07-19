import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BharatOxygen from "../../Assets/Projects/Bharatoxygen.PNG";
import Weatherapp from "../../Assets/Projects/weatherapp.PNG";
import Hotelroom from "../../Assets/Projects/hotelroom.PNG";
import Crm from "../../Assets/Projects/adamcrm.PNG";
import Adamwebsite from "../../Assets/Projects/Adamwebsite.PNG";
import Multi from "../../Assets/Projects/Multi-Game.PNG";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <div className="effects">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BharatOxygen}
                isBlog={false}
                title="Bharat Oxygen"
                description="Bharat oxygen was an initiative taken during the time of post-pandemic to help millions of people get oxygen and hospital beds by providing them information about beds and hospitals which were verified by our volunteers."
                link="https://bharatoxygen.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Adamwebsite}
                isBlog={false}
                title="Adam Genetics Website"
                description="Adam Genetics uses the most advanced  DNA Testing solution to provide 100% accurate DNA results which provide deep knowledge about a person's DNA & body without leaving their doorstep. Adam Genetics has been a trusted ally for many companies & sports teams like JCB, Siemens, RCB, KKR. "
                link=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Crm}
                isBlog={false}
                title="Adam Genetics CRM"
                description="Adamgenetics CRM ( Customer relationship management ) is a tool that helps the moderator of The Adamgenetics website to control their site easily without any hassle With the press  of  few buttons, the entire customer relationship can be enchased."
                link=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Weatherapp}
                isBlog={false}
                title="Weather Forcast"
                description="It is a live weather Website that provides you accurate weather information, no matter where you are. This project was made using Html5 , Css3 , Javascript. Weather API takes from Openweathermap.org"
                link="https://weather-appopenweather.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Hotelroom}
                isBlog={false}
                title="Online Hotel Room book"
                description="This was my first web project in basic Html5 and CSS3 which I had built for a online room rental, where hotel could showcase their rooms and customer book room ."
                link="https://harshitawasthi.github.io/INDIANhotel/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Multi}
                isBlog={false}
                title="Multi Game"
                description="This project was made using latest ReactJs. The project contains two games - an emoticon slot machine ( where the user needs three identical emoticons to win) and a conventional tic-tac-toe game. Used advanced react js concepts such as useState, useRef, useEffect, useContext and also use react routing to achive the game functionality."
                link="https://condescending-franklin-35a81d.netlify.app/"
              />
            </Col>
          </Row>
          {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
        </Container>
      </div>
    </Container>
  );
}

export default Projects;
