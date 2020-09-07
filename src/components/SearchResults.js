import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// antd components
import { Col, Row, Button, Divider, message, List, Modal } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { PlusOutlined } from "@ant-design/icons";

// utils & custom components
import { nominate } from "../utils/actions";
import MoviePoster from "./MoviePoster";

function SearchResults({ searchResults, searching }) {
  const dispatch = useDispatch();
  const screens = useBreakpoint();

  const [showModal, setShowModal] = useState(false);

  const nominations = useSelector((state) => state.nominations);
  const totalNominations = Object.values(nominations).length;
  const isLimitReached = !(totalNominations < 5);

  const onNominate = (movie) => {
    if (movie.imdbID in nominations) {
      message.warning("You already nominated this movie.", 0.7);
    } else {
      dispatch(nominate(movie));
    }
  };

  const renderNominateButton = (movie) => (
    <Button
      disabled={isLimitReached || movie.imdbID in nominations}
      type="primary"
      onClick={() => onNominate(movie)}
    >
      {screens.md ? "Nominate" : <PlusOutlined />}
    </Button>
  );

  useEffect(() => {
    isLimitReached && setShowModal(true);
  }, [isLimitReached]);

  return (
    <Col span={13}>
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
              <List.Item actions={[renderNominateButton(movie)]}>
                <List.Item.Meta
                  avatar={
                    <MoviePoster title={movie.Title} src={movie.Poster} />
                  }
                  title={movie.Title}
                  description={movie.Year}
                />
                <br />
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Modal
        closable={false}
        cancelButtonProps={{ style: { display: "none" } }}
        title="Congratulations!"
        centered
        visible={showModal}
        onOk={() => setShowModal(false)}
      >
        <p>
          You have successfully selected 5 movies for nomination. Feel free to
          go back and make any changes.
        </p>
      </Modal>
    </Col>
  );
}

export default SearchResults;
