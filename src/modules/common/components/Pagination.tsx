import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
  margin: 20px auto;
`;

type PaginationProps = {
  prevFun: () => void;
  nextFunc: () => void;
  isPrevPage: boolean;
  isNextPage: boolean;
};

const Pagination: React.FunctionComponent<PaginationProps> = ({
  prevFun,
  nextFunc,
  isPrevPage,
  isNextPage,
}) => {
  return (
    <ButtonsContainer>
      <Button variant="contained" onClick={prevFun} disabled={isPrevPage}>
        Previous
      </Button>
      <Button variant="contained" onClick={nextFunc} disabled={isNextPage}>
        Next
      </Button>
    </ButtonsContainer>
  );
};

export default Pagination;
