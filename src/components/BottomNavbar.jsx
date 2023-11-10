// import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import prev from "../assets/playerbuttons/prev.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import play from "../assets/playerbuttons/play.png";
import repeat from "../assets/playerbuttons/repeat.png";
import next from "../assets/playerbuttons/next.png";
import { useSelector } from "react-redux";

function BottomNavbar() {
  const currentlyPlaying = useSelector((state) => state.playing);
  return (
    <Container fluid className="fixed-bottom bg-container pt-">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-row justify-content-start align-items-center">
            <Col
              lg={3}
              className="d-flex align-items-center gap-2 text-truncate"
            >
              <Col lg={2}>
                <img
                  src={currentlyPlaying.album?.cover_medium} //questo '?' è il mio operatore preferito
                  alt=""
                  width={"100%"}
                />
              </Col>
              <Col lg={9}>
                <p className="text-white m-0 text-truncate">
                  {currentlyPlaying.title}
                </p>
                <small className="opacity-75 text-white">
                  {currentlyPlaying.artist?.name}
                </small>
              </Col>
            </Col>
            <Col md={4} xs={6} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BottomNavbar;
