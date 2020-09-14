import React, { useState } from "react";

// antd components
import { Col, Input, Select, Button, Row, Affix } from "antd";

// utils & custom components

function SearchBar({ onSearch, params, onParamsChange }) {
  const [isAffixed, setIsAffixed] = useState(false);

  return (
    <Affix onChange={setIsAffixed}>
      <Row
        justify="center"
        gutter={[10, 10]}
        style={
          isAffixed
            ? {
                background: "#f0f2f5",
                padding: "20px 0",
                transition: "0.3s all",
              }
            : {}
        }
      >
        <Col md={11} xs={23}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(params);
            }}
          >
            <Input
              name="search"
              autoFocus={true}
              placeholder="Search in movie titles"
              size="large"
              value={params.s}
              onChange={(e) => onParamsChange({ s: e.target.value, page: 1 })}
            />
          </form>
        </Col>
        <Col md={5} xs={9}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(params);
            }}
          >
            <Input
              name="year"
              placeholder="Year"
              size="large"
              type="number"
              value={params.y}
              onChange={(e) => onParamsChange({ y: e.target.value, page: 1 })}
            />
          </form>
        </Col>
        <Col md={4} xs={9}>
          <Select
            size="large"
            onChange={(type) => onParamsChange({ type, page: 1 })}
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
    </Affix>
  );
}

export default SearchBar;
