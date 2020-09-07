import React from "react";

// antd components
import { Col, Input, Select, Button, Row } from "antd";

// utils & custom components

function SearchBar({ onSearch, params, onParamsChange }) {
  return (
    <Row justify="center" gutter={[10, 10]}>
      <Col md={11} xs={23}>
        <Input
          autoFocus={true}
          placeholder="Search in movie titles"
          size="large"
          value={params.s}
          onChange={(e) => onParamsChange({ s: e.target.value })}
        />
      </Col>
      <Col md={5} xs={9}>
        <Input
          placeholder="Year"
          size="large"
          value={params.y}
          onChange={(e) => onParamsChange({ y: e.target.value })}
        />
      </Col>
      <Col md={4} xs={9}>
        <Select
          size="large"
          onChange={(type) => onParamsChange({ type })}
          value={params.type}
          style={{ width: "100%" }}
        >
          <Select.Option value="movie">Movie</Select.Option>
          <Select.Option value="series">Series</Select.Option>
          <Select.Option value="episode">Episode</Select.Option>
        </Select>
      </Col>
      <Col md={3} xs={5}>
        <Button
          type="primary"
          size="large"
          onClick={() => onSearch(params)}
          style={{ width: "100%" }}
        >
          Search
        </Button>
      </Col>
    </Row>
  );
}

export default SearchBar;
