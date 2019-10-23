import React, { Component } from "react";
import Card from "../../components/Card";
import { MDBAnimation } from "mdbreact";
import Col from "../../components/Col";
import Row from "../../components/Row";

class TrainingTopic extends Component {
  render() {
    <Col size="md-12" customClass="p-0 mt-4" key={returnObject.showName}>
      <MDBAnimation type="fadeInUp">
        <Card>
          <h3>Test Card Text</h3>
        </Card>
      </MDBAnimation>
    </Col>;
  }
}

return (
  <Container>
    <Row>
      <Col size="md-12">
        <Card />
      </Col>
    </Row>
  </Container>
);

export default TrainingTopic;
