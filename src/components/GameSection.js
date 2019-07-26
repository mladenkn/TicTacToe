import React from 'react';
import Board from './Board';
import { cellContent } from '../redux/modules/ticTacToe';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const decorativeBoardMatrix = [
    [cellContent.x, cellContent.o, cellContent.empty, cellContent.x],
    [cellContent.x, cellContent.empty, cellContent.o, cellContent.empty],
    [cellContent.o, cellContent.empty, cellContent.empty, cellContent.o],
    [cellContent.empty, cellContent.empty, cellContent.x, cellContent.o],
];

const LeftSection = styled.div`
  font-size: 2.2em;
`;

const Root = styled.div`
  display: flex;  
`;

const RightSection = styled.div`
  margin-left: 2em;
`;

const Results = styled.div`

`

const Result = styled(Typography)`
  && {
    font-size: 0.9em;
    margin-bottom: 0.5em;
  }
`

const GameSection = ({matrix}) => 
  <Root>
    <LeftSection>
      <Board matrix={matrix} />
    </LeftSection>
    <RightSection>
      <Results>
        <Result>X wins: 2</Result>
        <Result>O wins: 1</Result>
        <Result>Draw: 3</Result>
      </Results>
    </RightSection>
  </Root>

export default GameSection;