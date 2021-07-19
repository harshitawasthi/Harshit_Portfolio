import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harshit Awasthi </span>
            from <span className="purple"> Haryana, India.</span>
            <br />
            I am pursuing B.Tech in Computer Science and Engineering from
            Bharati Vidyapeeth's College of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Doing Workout
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Listening Music
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Football
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
