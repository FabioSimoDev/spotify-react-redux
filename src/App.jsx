// import React from "react";
// import MusicSection from "./components/MusicSection";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "./components/SideBar"; // Assuming Sidebar component is in Sidebar.jsx
import MainContent from "./components/MainContent"; // Assuming MainContent component is in MainContent.jsx
import BottomNavbar from "./components/BottomNavbar";
import { Col, Row } from "react-bootstrap";
import "./style.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Row>
          <Col lg={2}>
            <Sidebar />
          </Col>
          <Col>
            <MainContent />
            <BottomNavbar />
          </Col>
        </Row>
      </div>
    </Provider>
  );
}

export default App;
