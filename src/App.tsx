import React from 'react';
import ReadingArea from "./components/ReadingArea";
import './styles/App.scss';
import {Container, Row, Col} from "react-bootstrap";
import Welcome from "./components/Welcome";

function App() {
  return (
    // <AuthorUi/>
      <Container fluid>
        <Row>
          <Col>
            <Welcome />
            <ReadingArea/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
