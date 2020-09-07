import React from "react";

// antd components
import { Col, Input, Select, Button, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// utils & custom components

function SearchBar({ onSearch, params, onParamsChange }) {
  return (
    <Row justify="center" gutter={10}>
      <Col span={12}>
        <Input
          placeholder="Search in movie titles"
          size="large"
          value={params.s}
          onChange={(e) => onParamsChange({ s: e.target.value })}
        />
      </Col>
      <Col span={4}>
        <Input
          placeholder="Year"
          size="large"
          value={params.y}
          onChange={(e) => onParamsChange({ y: e.target.value })}
        />
      </Col>
      <Col span={2}>
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
      <Col span={2}>
        <Button
          type="primary"
          size="large"
          icon={<SearchOutlined />}
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
