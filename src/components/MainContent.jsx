// import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import MusicSection from "./MusicSection";
import { useSelector } from "react-redux";

function MainContent() {
  const isSearching = useSelector((state) => state.searchResults);

  console.log(isSearching);
  return (
    <Container fluid className="mainPage">
      <Row className="justify-content-center">
        <Col md={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 id="rock">Rock Classics</h2>
          <div className="row imgLinks py-3" id="rockSection">
            <MusicSection artistName="queen" section="rock" />
          </div>

          <h2 id="pop">Pop</h2>
          <div className="row imgLinks py-3" id="rockSection">
            <MusicSection artistName="katyperry" section="pop" />
          </div>

          <h2 id="hiphop">Hip Hop</h2>
          <div className="row imgLinks py-3" id="hipHopSection">
            <MusicSection artistName="eminem" section="hipHop" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
