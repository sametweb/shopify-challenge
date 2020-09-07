import React from "react";
import { useSelector, useDispatch } from "react-redux";

// antd components
import { Col, Row, Button, Divider, Affix } from "antd";
import { List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

// utils & custom components
import { removeNomination } from "../utils/actions";
import MoviePoster from "./MoviePoster";

function NominatedMovieList() {
  const nominations = useSelector((state) => state.nominations);
  const nominationsList = Object.values(nominations);

  const dispatch = useDispatch();
  const screens = useBreakpoint();

  const onRemove = (id) => dispatch(removeNomination(id));

  const renderRemoveButton = (item) => (
    <Button type="danger" onClick={() => onRemove(item.imdbID)}>
      <DeleteOutlined />
    </Button>
  );

  return (
    <Col span={9}>
      <Row>
        <Col span={24}>
          <Affix offsetTop={70}>
            <Divider orientation="center">Your Nominations</Divider>
            <List
              locale={{ emptyText: "Your haven't nominated any movies yet" }}
              itemLayout="horizontal"
              dataSource={nominationsList}
              renderItem={(item) => (
                <List.Item actions={screens.md && [renderRemoveButton(item)]}>
                  <List.Item.Meta
                    avatar={
                      <MoviePoster title={item.Title} src={item.Poster} />
                    }
                    title={item.Title}
                    description={item.Year}
                  />
                  {!screens.md && renderRemoveButton(item)}
                </List.Item>
              )}
            />
          </Affix>
        </Col>
      </Row>
    </Col>
  );
}

export default NominatedMovieList;
