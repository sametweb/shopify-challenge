import React from "react";
import { Pagination, Col, Divider } from "antd";

function Navigation({ totalMovies, currentPage, onParamsChange }) {
  return (
    <>
      <Pagination
        current={currentPage}
        onChange={(page, _) => onParamsChange({ page })}
        total={totalMovies}
        showSizeChanger={false}
        showTotal={(total) => `Total ${total} movies`}
      />
      <Col span={24}>
        <Divider />
      </Col>
    </>
  );
}

export default Navigation;
