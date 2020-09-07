import React from "react";

// antd components
import { Result } from "antd";

// utils & custom components

function NotFound({ error }) {
  return (
    <Result status="warning" title="Nothing found" subTitle={error}></Result>
  );
}

export default NotFound;
