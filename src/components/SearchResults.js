import React from "react";
import { Col, Row, Button, Divider } from "antd";
import { List } from "antd";
import MoviePoster from "./MoviePoster";
import { useDispatch } from "react-redux";
import { nominate } from "../utils/actions";

function SearchResults({ searchResults, searching }) {
  const dispatch = useDispatch();
  return (
    <Col span={11}>
      <Row>
        <Col span={24}>
          <Divider orientation="center">Search Results</Divider>
          <List
            locale={{
              emptyText: "Use search bar to find your favorite movies",
            }}
            loading={searching}
            itemLayout="horizontal"
            dataSource={searchResults.Search}
            renderItem={(movie) => (
              <List.Item
                actions={[
                  <Button
                    type="primary"
                    onClick={() => dispatch(nominate(movie))}
                  >
                    Nominate
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <MoviePoster title={movie.Title} src={movie.Poster} />
                  }
                  title={movie.Title}
                  description={movie.Year}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Col>
  );
}

export default SearchResults;
