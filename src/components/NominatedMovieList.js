import React from "react";
import { useSelector, useDispatch } from "react-redux";

// antd components
import { Col, Row, Button, Divider } from "antd";
import { List } from "antd";

// utils & custom components
import { removeNomination } from "../utils/actions";
import MoviePoster from "./MoviePoster";

function NominatedMovieList() {
  const nominations = useSelector((state) => state.nominations);
  const nominationsList = Object.values(nominations);

  const dispatch = useDispatch();

  const onRemove = (id) => dispatch(removeNomination(id));

  return (
    <Col span={8}>
      <Row>
        <Col span={24}>
          <Divider orientation="center">Your Nominations</Divider>
          <List
            locale={{ emptyText: "Your haven't nominated any movies yet" }}
            itemLayout="horizontal"
            dataSource={nominationsList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button type="danger" onClick={() => onRemove(item.imdbID)}>
                    Remove
                  </Button>,
                ]}
              >
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

export default NominatedMovieList;
