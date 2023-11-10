// import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  searchFetch,
  setSearchQuery,
  setSearchResults
} from "../Redux/actions";
import { SuitHeartFill } from "react-bootstrap-icons";

const Sidebar = () => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.liked);
  let query;
  const handleSearch = function (e) {
    query = e.target.value;
    dispatch(setSearchQuery(query));
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(searchFetch(query));
    }
  };
  return (
    <Navbar
      expand="md"
      fixed="left"
      className="justify-content-between sidebar"
      variant="dark"
      id="sidebar"
    >
      <Container className="d-flex flex-column align-items-start h-100">
        <Navbar.Brand href="index.html">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="align-items-start"
        >
          <Nav className="me-auto flex-column">
            <Nav.Link
              href="#"
              className="d-flex align-items-center"
              onClick={() => dispatch(setSearchResults([]))}
            >
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center">
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>
            <Form className="d-flex mt-3" onSubmit={(e) => handleSubmit(e)}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => handleSearch(e)}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
            <h5 className="text-white pt-3">
              Ti sono piaciuti{" "}
              <SuitHeartFill color="green" size={12}></SuitHeartFill>
            </h5>
            <ul className="text-white d-flex flex-column gap-2">
              {likedSongs.map((song) => (
                <small key={song.id} className="opacity-75">
                  {song.title}
                </small>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="nav-btn">
        <Button variant="primary" className="signup-btn">
          Sign Up
        </Button>
        <Button variant="secondary" className="login-btn">
          Login
        </Button>
        <Nav.Link href="#">Cookie Policy</Nav.Link>
        <Nav.Link href="#">Privacy</Nav.Link>
      </div>
    </Navbar>
  );
};

export default Sidebar;
