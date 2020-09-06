import React from "react";
import { Result } from "antd";

function NotFound({ error }) {
  return (
    <Result status="warning" title="Nothing found" subTitle={error}></Result>
  );
}

export default NotFound;
