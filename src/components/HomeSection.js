import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { Fab, Dialog } from '@material-ui/core';
import GameSetupDialog from './GameSetupDialog'
import { cellContent } from '../ticTacToeConstants';
import PropTypes from 'prop-types';

const decorativeBoardMatrix = [
    [cellContent.x, cellContent.o, cellContent.empty, cellContent.x],
    [cellContent.x, cellContent.empty, cellContent.o, cellContent.empty],
    [cellContent.o, cellContent.empty, cellContent.empty, cellContent.o],
    [cellContent.empty, cellContent.empty, cellContent.x, cellContent.o],
];

const SetuPageRoot = styled.div`
  display: flex;
`;

const Menu = styled.div`
  margin-left: ${p => p.variant === 'row' ? '2em' : '0'};
  margin-top: ${p => p.variant === 'row' ? '0' : '1em'};
  display: flex;
  justify-content: ${p => p.variant === 'row' ? 'initial' : 'center'};
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

const HomeSection = ({navigateToGame, className, variant}) => {  
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <SetuPageRoot className={className}>
      <StyledBoard matrix={decorativeBoardMatrix} />
      <Menu variant={variant}>
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
  variant: PropTypes.oneOf(['row', 'col']),
}

export default HomeSection;