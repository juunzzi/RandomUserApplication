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
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
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
