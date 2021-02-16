import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import Spinner from "modules/common/components/Spinner";
import { RoutesParams } from "models/routesParams";
import { Character } from "models/graphQlModel";
import NameCard from "modules/common/components/NameCard";
import InformationList from "modules/common/components/InformationList";
import generateEpisodeInfo from "modules/EpisodeDetailsView/components/generateEpisodeInfo";
import Typography from "@material-ui/core/Typography";

const StyledContainer = styled(Container)`
  padding-top: 40px;
`;

const GET_EPISODE = gql`
  query getEpisodes($id: ID!) {
    episode(id: $id) {
      name
      episode
      air_date
      created
      characters {
        id
        name
      }
    }
  }
`;

const EpisodeDetailsView: React.FunctionComponent = () => {
  const history = useHistory();
  const { episodeId } = useParams<RoutesParams>();

  const { data, loading } = useQuery(GET_EPISODE, {
    variables: { id: episodeId },
  });

  return (
    <StyledContainer maxWidth="md">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <InformationList data={generateEpisodeInfo(data.episode)} />
          <Typography variant="subtitle1" color="textSecondary">
            Characters:
          </Typography>
          {data.episode.characters.map(({ id, name }: Character) => (
            <NameCard
              key={id}
              name={name}
              handleCardClick={() => history.push(`/character/${id}`)}
            />
          ))}
        </>
      )}
    </StyledContainer>
  );
};

export default EpisodeDetailsView;
