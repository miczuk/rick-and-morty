import React from "react";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import CardActionArea from "@material-ui/core/CardActionArea";

const StyledCard = styled(Card)`
  margin: 10px;
  width: 300px;
`;

const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type ItemCardProps = {
  handleCardClick: () => void;
};

const ItemCard: React.FunctionComponent<ItemCardProps> = ({
  children,
  handleCardClick,
}) => {
  return (
    <StyledCard elevation={3}>
      <StyledCardActionArea onClick={handleCardClick}>
        {children}
      </StyledCardActionArea>
    </StyledCard>
  );
};

export default ItemCard;
