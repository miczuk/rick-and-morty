import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Character } from "models/graphQlModel";
import styled from "styled-components";
import InformationList from "modules/common/components/InformationList";
import generateCharacterInfo from "modules/CharacterDetailsView/components/generateCharacterInfo";

const StyledCard = styled(Card)`
  max-width: 400px;
`;

const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  height: 400px;
`;

type BigCharacterCardProps = {
  character: Character;
};

const BigCharacterCard: React.FunctionComponent<BigCharacterCardProps> = ({
  character,
}) => {
  return (
    <StyledCard elevation={3}>
      <StyledCardMedia image={character.image || ""} title="Character image" />
      <CardContent>
        <Typography gutterBottom variant="h2">
          {character.name}
        </Typography>
        <InformationList data={generateCharacterInfo(character)} />
      </CardContent>
    </StyledCard>
  );
};

export default BigCharacterCard;
