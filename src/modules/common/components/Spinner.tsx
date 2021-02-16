import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner: React.FunctionComponent = () => {
  return (
    <SpinnerOverlay>
      <CircularProgress />
    </SpinnerOverlay>
  );
};

export default Spinner;
