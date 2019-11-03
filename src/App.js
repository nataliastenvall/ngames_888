import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Jumbotron, Alert } from "react-bootstrap";
import Datadog from "./Datadog/Datadog";
import Azure from "./Azure/Azure";
import Doc1 from "./Documentation/Doc1";
import Doc2 from "./Documentation/Doc2";
import Doc3 from "./Documentation/Doc3";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <Container>
            <h1>Natalia's test task</h1>
            <p>
              I tried to make the task with different approaches. I succeeded
              with the simple one. In the documentation, I will explain my
              thoughts.
            </p>
            <p class="lead">
              <a
                class="btn btn-primary btn-lg"
                href="#documentation"
                role="button"
              >
                Documentation
              </a>
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col sm={6}>
              <Datadog />
            </Col>
            <Col sm={6}>
              <Azure />
            </Col>
          </Row>
          <Row id="documentation">
            <Col sm>
              <Doc1 />
            </Col>
            <Col sm>
              <Doc2 />
            </Col>
            <Col sm>
              <Doc3 />
            </Col>
          </Row>
        </Container>
        <Jumbotron fluid>
          <Container>
            <h1>Thank you!</h1>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
