/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Harshit Awasthi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/harshitawasthi"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/harshit-awasthi-8496241a4/"
                target="_blank"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
