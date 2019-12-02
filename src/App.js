import React from "react";
import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//STYLE Start

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`;

const ContentContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  overflow-x: auto;
`;

//STYLE End

function App() {
  return (
    <AppContainer>
      <ContentContainer>Hello</ContentContainer>
    </AppContainer>
  );
}

export default App;
