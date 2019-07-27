import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import GameRestartDialog from '../components/GameRestartDialog';

import { Dialog } from '@material-ui/core';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('GameRestartDialog', module)
    .add('default', () => 
    <Dialog open={true}>
      <GameRestartDialog outCome={'xWin'} onAccept={action('onAccept')} onCancel={action('onCancel')} />
    </Dialog>
    )