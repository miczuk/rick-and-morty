import React from "react";
import styled from "styled-components";
import { Maybe, Scalars } from "models/graphQlModel";
import ItemCard from "modules/common/components/ItemCard";

const Name = styled.p`
  font-size: 18px;
  padding: 15px;
`;

type ItemCardProps = {
  name?: Maybe<Scalars["String"]>;
  handleCardClick: () => void;
};

const NameCard: React.FunctionComponent<ItemCardProps> = ({
  name,
  handleCardClick,
}) => {
  return (
    <ItemCard handleCardClick={handleCardClick}>
      <Name>{name}</Name>
    </ItemCard>
  );
};

export default NameCard;
