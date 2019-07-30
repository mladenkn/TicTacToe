import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { Fab, Dialog } from '@material-ui/core';
import GameSetupDialog from './GameSetupDialog'
import { cellContent } from '../ticTacToeConstants';
import PropTypes from 'prop-types';

const decorativeBoardMatrix = [
    [cellContent.x, cellContent.o, cellContent.empty],
    [cellContent.x, cellContent.empty, cellContent.o],
    [cellContent.o, cellContent.empty, cellContent.empty],
];

const SetuPageRoot = styled.div`
  display: flex;
`;

const Menu = styled.div`
  margin-left: ${p => p.width === 'medium' ? '2em' : '0'};
  margin-top: ${p => p.width === 'medium' ? '0' : '1em'};
  display: flex;
  justify-content: ${p => p.width === 'medium' ? 'initial' : 'center'};
`;

const StyledBoard = styled(Board)`
  font-size: 2.4em;
`;

const PlayNowButton = styled(Fab)`
  && {
    font-size: 1em;
    height: 1.8em;
  }
`

const HomeSection = ({navigateToGame, className, width}) => {  
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <SetuPageRoot className={className}>
      <StyledBoard matrix={decorativeBoardMatrix} />
      <Menu width={width}>
        <PlayNowButton variant="extended" onClick={() => setDialogOpen(true)} color="primary">
          Play now
        </PlayNowButton>
      </Menu>
      <Dialog open={dialogOpen}>
        <GameSetupDialog onAccept={navigateToGame} onCancel={() => setDialogOpen(false)} />
      </Dialog>
    </SetuPageRoot>
  );
}

HomeSection.propTypes = {
  className: PropTypes.string,
  navigateToGame: PropTypes.func.isRequired,
  width: PropTypes.oneOf(['small', 'medium']),
}

export default HomeSection;