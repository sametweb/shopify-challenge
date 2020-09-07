import React from "react";

// antd components
import { Col, PageHeader, Row } from "antd";

// utils & custom components

function Header() {
  return (
    <Row justify="center">
      <Col span={20}>
        <PageHeader
          className="site-page-header"
          title="The Shoppies"
          subTitle="Nominate your favorite movies"
        />
      </Col>
    </Row>
  );
}

export default Header;
