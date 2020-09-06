import React from "react";
import { Card, Button } from "antd";
import MoviePoster from "./MoviePoster";
import { List } from "antd/lib/form/Form";

const { Meta } = Card;

function MovieCard({ movie }) {
  const { Title, Year, Poster } = movie;
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<MoviePoster title={Title} src={Poster} />}
            title={Title}
            description={Year}
          />
        </List.Item>
      )}
    />
  );
}

export default MovieCard;
