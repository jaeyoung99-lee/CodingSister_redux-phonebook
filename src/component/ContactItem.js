import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = () => {
  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          src="https://static.vecteezy.com/system/resources/previews/036/167/121/non_2x/ai-generated-intelligent-process-automation-monochrome-line-logo-user-centric-business-value-cute-baby-robot-simple-icon-design-element-ai-art-for-corporate-branding-vector.jpg"
        />
      </Col>
      <Col lg={11}>
        <div>이름</div>
        <div>전화번호</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
