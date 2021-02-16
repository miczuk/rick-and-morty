import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { StylesProvider } from "@material-ui/styles";
import Routes from "Routes";
import GlobalStyles from "GlobalStyles";
import AppHeader from "modules/AppHeader/AppHeader";

const App: React.FunctionComponent = () => {
  return (
    <StylesProvider injectFirst>
      <AppHeader />
      <Routes />
      <GlobalStyles />
    </StylesProvider>
  );
};

export default App;
