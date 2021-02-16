import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Spinner from "modules/common/components/Spinner";
import { RoutesParams } from "models/routesParams";
import Grid from "@material-ui/core/Grid";
import { Episode } from "models/graphQlModel";
import Button from "@material-ui/core/Button";
import BigCharacterCard from "modules/CharacterDetailsView/components/BigCharacterCard";
import NameCard from "modules/common/components/NameCard";

const StyledContainer = styled(Container)`
  padding-top: 40px;
`;

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      created
    }
    __typename
  }
`;

const GET_EPISODES = gql`
  query getEpisodes($id: ID!) {
    character(id: $id) {
      episode {
        id
        name
      }
    }
  }
`;

const CharacterDetailsView: React.FunctionComponent = () => {
  const history = useHistory();
  const { characterId } = useParams<RoutesParams>();

  const { data: characterData, loading: characterLoading } = useQuery(
    GET_CHARACTER,
    {
      variables: { id: characterId },
    }
  );

  const [
    getEpisodes,
    { data: episodesData, loading: episodesLoading },
  ] = useLazyQuery(GET_EPISODES, {
    variables: { id: characterId },
  });

  const character = characterData?.character;

  return (
    <StyledContainer maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {characterLoading ? (
            <Spinner />
          ) : (
            <BigCharacterCard character={character} />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            Episodes
          </Typography>
          {!episodesData && (
            <Button onClick={() => getEpisodes()}>Load episodes</Button>
          )}
          {episodesLoading ? (
            <Spinner />
          ) : (
            episodesData &&
            episodesData.character.episode.map(
              ({ name, id: episodeId }: Episode) => (
                <NameCard
                  key={episodeId}
                  name={name}
                  handleCardClick={() => history.push(`/episode/${episodeId}`)}
                />
              )
            )
          )}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default CharacterDetailsView;
