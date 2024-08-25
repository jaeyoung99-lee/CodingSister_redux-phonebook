import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          src="https://static.vecteezy.com/system/resources/previews/036/167/121/non_2x/ai-generated-intelligent-process-automation-monochrome-line-logo-user-centric-business-value-cute-baby-robot-simple-icon-design-element-ai-art-for-corporate-branding-vector.jpg"
          alt="default_user"
        />
      </Col>
      <Col lg={11}>
        <div>이름 : {item.name}</div>
        <div>전화번호 : {item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
