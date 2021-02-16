import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "modules/common/components/ErrorFallback";
import CharactersView from "modules/CharactersView/CharactersView";
import CharacterDetailsView from "modules/CharacterDetailsView/CharacterDetailsView";
import EpisodeDetailsView from "modules/EpisodeDetailsView/EpisodeDetailsView";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Route exact path="/characters">
          <CharactersView />
        </Route>
        <Route exact path="/character/:characterId">
          <CharacterDetailsView />
        </Route>
        <Route exact path="/episode/:episodeId">
          <EpisodeDetailsView />
        </Route>
        <Route exact path="/">
          <Redirect to="/characters" />
        </Route>
      </ErrorBoundary>
    </Switch>
  );
};

export default Routes;
