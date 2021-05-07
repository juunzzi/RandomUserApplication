import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import GlobalStyle from "../../style/global";
import LandingPage from "../LandingPage";
import { Switch, Route } from "react-router-dom";
import ExploreUsersPage from "../ExploreUsersPage";
import UserDetailPage from "../UserDetailPage";
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
        <Route exact path="/users" component={ExploreUsersPage} />
        <Route path="/users/:id" component={UserDetailPage} />
      </Switch>
      <GlobalStyle></GlobalStyle>
    </AppWrapper>
  );
};
export default App;
