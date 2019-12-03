import React from "react";
import Speech from "react-speech";
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
  flex-flow: column nowrap;
  align-content: center;
  width: 90%;
  flex-basis: 0;
  flex-grow: 1;
  margin 20px; 
  overflow-x: auto;
  font-family: 'Bebas Neue', cursive;
`;

const AppTitle = styled.h1`
  color: #b40f9f;
`;

const TextInput = styled.textarea`
  height: 70vh;
  font-family: "Roboto Slab", serif;
  font-size: 35px;
  background: #bfbfc2;
  color: #ffe;
  border: 2px solid #ffe;
  border-radius: 15px;
`;

const Speaker = styled(Speech)`
  width: 70%;
`;

//STYLE End

function App() {
  const [speechText, setSpeechText] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <AppContainer>
      <GlobalStyles />
      <ContentContainer>
        <AppTitle>Hello friend. I am Angela. Tell me what to tell.</AppTitle>

        <TextInput
          placeholder="This is a story about ..."
          value={speechText}
          onSubmit={handleSubmit}
          onChange={event => setSpeechText(event.target.value)}
        />
        <Speaker
          pitch="1.1"
          voice="Google UK English Female"
          text={speechText}
        />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
