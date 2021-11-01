import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import GlobalStyle from "../../style/global";
import LandingPage from "../LandingPage";
import { Switch, Route } from "react-router-dom";
import Create from "../Create";
import List from "../List";
const AppWrapper = styled.div``;
const App = () => {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="랜덤 유저 어플리케이션"
        defaultTitle="랜덤 유저 어플리케이션"
      >
        <meta name="description" content="랜덤 유저 어플리케이션" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/list" component={List} />
      </Switch>
      <GlobalStyle></GlobalStyle>
    </AppWrapper>
  );
};
export default App;
