import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
  }

  .MuiIconButton-label {
    color: #fff;
  }
`;

const Title = styled.h1`
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const AppHeader: React.FunctionComponent = () => {
  const history = useHistory();
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    if (location.pathname === "/characters") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  const handleButtonClick = () => {
    history.push("/");
  };

  return (
    <AppBar position="static">
      <StyledContainer>
        <TitleContainer>
          <Title>Rick&Morty</Title>
        </TitleContainer>
        {!isHomePage && (
          <Button color="inherit" onClick={handleButtonClick}>
            Characters List
          </Button>
        )}
      </StyledContainer>
    </AppBar>
  );
};

export default AppHeader;
