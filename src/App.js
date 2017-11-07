import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 962px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    return (
      <MainContainer className="App">
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
        <Footer />
      </MainContainer>
    );
  }
}

export default App;
