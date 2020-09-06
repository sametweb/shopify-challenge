import React from "react";
import { Col, PageHeader, Row } from "antd";

function Header() {
  return (
    <Row justify="center">
      <Col span={20}>
        <PageHeader
          className="site-page-header"
          title="Shoppies"
          subTitle="Nominate your favorite movies"
        />
      </Col>
    </Row>
  );
}

export default Header;
