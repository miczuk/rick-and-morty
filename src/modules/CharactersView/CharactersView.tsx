import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import CharacterCard from "modules/CharactersView/components/CharacterCard";
import { Character } from "models/graphQlModel";
import Spinner from "modules/common/components/Spinner";
import Pagination from "modules/common/components/Pagination";
import usePagination from "utils/usePagination";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      results {
        name
        id
        image
        status
        location {
          name
        }
        origin {
          name
        }
      }
      info {
        next
        prev
      }
    }
  }
`;

const CharactersView: React.FunctionComponent = () => {
  const history = useHistory();

  const [page, handleIncrement, handleDecrement] = usePagination();
  const { data, loading, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  const loadMoreCharacters = () => {
    fetchMore({ variables: { page: page + 1 } });
    handleIncrement();
  };

  const loadPrevCharacters = () => {
    fetchMore({ variables: { page: page - 1 } });
    handleDecrement();
  };

  const handleCardClick = (id: string) => history.push(`/character/${id}`);

  return (
    <Container maxWidth="xl">
      <Pagination
        prevFun={loadPrevCharacters}
        nextFunc={loadMoreCharacters}
        isPrevPage={!data?.characters.info.prev}
        isNextPage={!data?.characters.info.next}
      />
      <CardsContainer>
        {loading ? (
          <Spinner />
        ) : (
          data.characters.results.map(
            ({ name, image, status, id }: Character) => (
              <CharacterCard
                key={id}
                name={name}
                image={image}
                status={status}
                handleCardClick={() => handleCardClick(id)}
              />
            )
          )
        )}
      </CardsContainer>
    </Container>
  );
};

export default CharactersView;
