import React from "react";
import styled from "styled-components";
import CardMedia from "@material-ui/core/CardMedia";
import { Maybe, Scalars } from "models/graphQlModel";
import ItemCard from "modules/common/components/ItemCard";
import Typography from "@material-ui/core/Typography";

const StyledCardMedia = styled(CardMedia)`
  width: 100px;
  height: 100px;
`;

const Info = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
`;

type ItemCardProps = {
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  handleCardClick: () => void;
};

const CharacterCard: React.FunctionComponent<ItemCardProps> = ({
  name,
  image,
  status,
  handleCardClick,
}) => {
  return (
    <ItemCard handleCardClick={handleCardClick}>
      <StyledCardMedia image={image || ""} />
      <Info>
        <Typography gutterBottom variant="h6">
          {name}
        </Typography>
        <Typography variant="subtitle2">status: {status}</Typography>
      </Info>
    </ItemCard>
  );
};

export default CharacterCard;
