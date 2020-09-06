import React from "react";
import { Col, Row, Button, Divider } from "antd";
import { List } from "antd";
import MoviePoster from "./MoviePoster";
import { useSelector } from "react-redux";

function Nominated() {
  const nominations = useSelector((state) => state.nominations);

  return (
    <Col span={8}>
      <Row>
        <Col span={24}>
          <Divider orientation="center">Your Nominations</Divider>
          <List
            locale={{ emptyText: "Your haven't nominated any movies yet" }}
            itemLayout="horizontal"
            dataSource={nominations}
            renderItem={(item) => (
              <List.Item actions={[<Button type="danger">Remove</Button>]}>
                <List.Item.Meta
                  avatar={<MoviePoster title={item.Title} src={item.Poster} />}
                  title={item.Title}
                  description={item.Year}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Col>
  );
}

export default Nominated;
