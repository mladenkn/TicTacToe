import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { GameRestartDialog } from '../components/ControllableGameSection';

  storiesOf('GameRestartDialog', module)
    .add('default', () =>     
      <GameRestartDialog open={true} outCome={'xWin'} onAccept={action('onAccept')} onCancel={action('onCancel')} />
    )