import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// antd components
import { Row, Col, Divider } from "antd";

// utils & custom components
import { searchMovies } from "../utils/actions";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Paginator from "./Paginator";
import NominatedMovieList from "./NominatedMovieList";
import NotFound from "./NotFound";

function App() {
  const [params, setParams] = useState({
    s: "",
    y: "",
    type: "movie",
    page: 1,
  });

  const searchResults = useSelector((state) => state.searchResults);
  const searching = useSelector((state) => state.searching);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  const onSearch = (params) => dispatch(searchMovies(params));

  const onParamsChange = (param) => setParams({ ...params, ...param });

  useEffect(() => {
    searchResults.Search.length > 0 && onSearch(params);
  }, [params.page]);

  return (
    <>
      <Header />
      <SearchBar
        onSearch={onSearch}
        params={params}
        onParamsChange={onParamsChange}
      />
      <Row justify="center">
        <Col span={24}>
          <Divider />
        </Col>
        {searchResults.Search.length > 0 && (
          <Col span={24} style={{ textAlign: "center" }}>
            <Paginator
              totalMovies={searchResults.totalResults}
              currentPage={params.page}
              onParamsChange={onParamsChange}
            />
          </Col>
        )}
      </Row>
      <Row justify="center">
        {error ? (
          <NotFound error={error} />
        ) : (
          <SearchResults searchResults={searchResults} searching={searching} />
        )}
        <Col span={1} style={{ textAlign: "center" }}>
          <Divider type="vertical" style={{ height: "100% " }} />
        </Col>
        <NominatedMovieList />
      </Row>
    </>
  );
}

export default App;
