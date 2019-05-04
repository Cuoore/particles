import { storiesOf } from '@storybook/html'

import './buttons.particle'
import notes from '../inputs/inputs.md'

const inputStyle = 'display:block;margin-bottom:20px;width:40%;'

storiesOf('Buttons', module)
  .add(
    'Default',
    () =>
      `
      <cuoore-button
        label='default'
        style=${inputStyle}>
      </cuoore-button>
    `,
    {
      notes,
    }
  )
  .add(
    'Primary',
    () =>
      `
      <cuoore-button
        label='primary'
        type='primary'
        style=${inputStyle}>
      </cuoore-button>
    `,
    {
      notes,
    }
  )
  .add(
    'Outline',
    () =>
      `
      <cuoore-button
        label='outline'
        type='outline'
        style=${inputStyle}>
      </cuoore-button>
    `,
    {
      notes,
    }
  )
