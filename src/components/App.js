import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../utils/actions";

import { Row, Col, Divider } from "antd";

import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Nominated from "./Nominated";
import NotFound from "./NotFound";
import Navigation from "./Navigation";

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
            <Navigation
              totalMovies={searchResults.totalResults}
              currentPage={params.page}
              onParamsChange={onParamsChange}
            />
          </Col>
        )}
        {error ? (
          <NotFound error={error} />
        ) : (
          <SearchResults searchResults={searchResults} searching={searching} />
        )}
        <Col span={1} style={{ textAlign: "center" }}>
          <Divider type="vertical" style={{ height: "100% " }} />
        </Col>
        <Nominated />
      </Row>
    </>
  );
}

export default App;
