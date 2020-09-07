import React from "react";

// antd components
import { Col, Row } from "antd";

// utils & custom components

function Header() {
  return (
    <Row justify="center" align="middle">
      <Col style={{ textAlign: "center" }}>
        {/* <PageHeader
          className="site-page-header"
          title="The Shoppies"
          subTitle="Nominate your favorite movies"
        /> */}
        <h1>The Shoppies</h1>
        <p>Nominate your favorite movies</p>
      </Col>
    </Row>
  );
}

export default Header;
