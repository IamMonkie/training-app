import React, { Component } from "react";
import Card from "../../components/Card";
import { MDBAnimation } from "mdbreact";
// import Col from "../../components/Col";
// import Row from "../../components/Row";
import { Container, Row, Col } from "reactstrap";

class TrainingTopic extends Component {
  render() {
    let topic = ["test Topic Text 1", "test Topic Text 2"];
    for (let i = 0; i < topic.length; i++) {
      topic[i];
    }
    <Col size="md-12">
      <MDBAnimation type="fadeInUp">
        <Card>
          <h3>Test Card Text</h3>
        </Card>
      </MDBAnimation>
    </Col>;

    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TrainingTopic;
