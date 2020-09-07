import React from "react";

// antd components
import { Pagination, Col, Divider } from "antd";

// utils & custom components

function Paginator({ totalMovies, currentPage, onParamsChange }) {
  return (
    <>
      <Pagination
        simple
        current={currentPage}
        onChange={(page, _) => onParamsChange({ page })}
        total={totalMovies}
        showSizeChanger={false}
        showTotal={(total) => `Total ${total} results`}
      />
      <Col span={24}>
        <Divider />
      </Col>
    </>
  );
}

export default Paginator;
