import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  height: 60vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.h2`
  font-size: 28px;
  color: #8e422f;
`;

const ErrorFallback: React.FunctionComponent = () => (
  <ErrorContainer>
    <ErrorText>Something went wrong. Please refresh this page.</ErrorText>
  </ErrorContainer>
);

export default ErrorFallback;
