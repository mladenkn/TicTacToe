import React from 'react';
import { Fragment } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import HomeSection from './HomeSection';
import { useMediaQuery } from '@material-ui/core';

const StyledHomeSection = styled(HomeSection)`
  padding: 1.5em;
  font-size: 2em;  
  @media(max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const GlobalStyle = createGlobalStyle`
  & .GameSetupDialog {
    font-size: 1.3em;
  }
`;

const HomePage = ({ history }) => 
{
  const homeSectionVariant = useMediaQuery('(max-width: 576px)') ? 'col' : 'row';
  return (
    <Fragment>
      <GlobalStyle />
      <StyledHomeSection
        variant={homeSectionVariant}
        navigateToGame={({ gameSize }) => history.push(`/play/${gameSize}`)}
      />
    </Fragment>
  );
}

export default HomePage;