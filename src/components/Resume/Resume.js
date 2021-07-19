import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/harshitawasthi_Webdeveloper.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <div className="effects2">
        <Container>
          {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row> */}
          <Row className="resume">
            <Col md={6} className="resume-left">
              <h3 className="resume-title">Experience</h3>
              <Resumecontent
                title="Web Developer @ Videtorrium "
                date="March 2021 - Present"
                content={[
                  "Build product GUI in React.js and conduct user surveys for understanding user experience(UX).",
                  "Identify optimized solutions to build the product with lean coding to keep the app lightweight.",
                  // "Worked on the Bharat-Oxygen (https://bharatoxygen.com/).",
                  "Yet to complete (Working on UI and Logical Part)-Videtorrium Main Website and Adam's Genetics",
                  "Worked on the Bharat-Oxygen.com websie.",
                  "Exposure to deployment in Gitpages and Netlify and web build tools, such as NPM, Yarn, etc.",
                ]}
              />
              {/* <Resumecontent
              title="Web Developer @ Anthem IT Solutions "
              date="May 2020 - July 2020"
              content={[
                "Created their fully functional astrology portal (http://divyadishadarshan.com) in HTML5, CSS3, Bootstrap and mobile-optimized using media queries. ",
                "Built an exhaustive appointment booking module using advanced Js and Bootstrap.",
              ]}
            /> */}
              <h3 className="resume-title">Certifications</h3>
              <Resumecontent
                title=""
                content={[
                  "Python and R training by NSIC",
                  "React - The Complete Guide with React Hook Redux",
                  "JavaScript Fundamentals: A Course for Absolute Beginners",
                ]}
              />
            </Col>
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>
              <Resumecontent
                title="Bharati Vidyapeeth's College of Engineering(Paschim Vihar, New Delhi) "
                date="2018 - 2021"
                content={[]}
              />
              <Resumecontent
                title="Government Polytechnic, Jhajjar"
                date="2017"
                content={[]}
              />
              <Resumecontent
                title="10TH BOARD [ Sainik Public School, haryana ] "
                date="2014"
                content={[]}
              />
              <h3 className="resume-title">Extracurricular Activities</h3>
              <Resumecontent
                title="BVPIEEE"
                content={[
                  "Having experience in conducting multiple events in my college which were related to coding, technical aptitude that encompassed managing and directing the events.",
                  "Successfully managed the gathering of more than 250 students in various events with a team comprising of 10 members.",
                ]}
              />
              <Resumecontent
                title="Event Coordinator"
                content={[
                  "Oversaw Hack@BVP3.0 i.e. hackathon for innovative tech minds with footfall of 100+ teams from all over India• Managed event activities to ensure coordination and delegated work effectively to 70+ people",
                ]}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Download CV
            </Button>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Resume;
