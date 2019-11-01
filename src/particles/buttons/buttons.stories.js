import { storiesOf } from '@storybook/html'

import './buttons.particle'
import notes from './buttons.md'

const inputStyle = 'display:block;margin-top:40px;margin-left:40px;width:40%;'

storiesOf('Buttons', module)
  .add(
    'Default',
    () =>
      `
      <cuoore-button
        label='default'
        style=${inputStyle}
        size='small'
      >
      </cuoore-button>
      <cuoore-button
        label='default'
        style=${inputStyle}
      >
      </cuoore-button>
      <cuoore-button
        label='default'
        style=${inputStyle}
        size='big'
      >
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
        size='small'
        style=${inputStyle}
      >
      </cuoore-button>
      <cuoore-button
        label='primary'
        type='primary'
        style=${inputStyle}>
      </cuoore-button>
      <cuoore-button
        label='primary'
        type='primary'
        size='big'
        style=${inputStyle}
      >
      </cuoore-button>
    `,
    {
      notes,
    }
  )
  .add(
    'Primary outline',
    () =>
      `
      <cuoore-button
        label='1outline'
        type='primary-outline'
        size='small'
        style=${inputStyle}
      >
      </cuoore-button>
      <cuoore-button
        label='1outline'
        type='primary-outline'
        style=${inputStyle}
      >
      </cuoore-button>
      <cuoore-button
        label='1outline'
        type='primary-outline'
        size='big'
        style=${inputStyle}
      >
      </cuoore-button>
    `,
    {
      notes,
    }
  )
  .add(
    'Secondary',
    () =>
      `
      <cuoore-button
        label='secondary'
        type='secondary'
        size='small'
        style=${inputStyle}
      >
      </cuoore-button>
      <cuoore-button
        label='secondary'
        type='secondary'
        style=${inputStyle}
      >
      </cuoore-button>
      <cuoore-button
        label='secondary'
        type='secondary'
        size='big'
        style=${inputStyle}
      >
      </cuoore-button>
    `,
    {
      notes,
    }
  )
  .add(
    'Secondary outline',
    () =>
      `
      <cuoore-button
        label='2outline'
        type='secondary-outline'
        size='small'
        style=${inputStyle}
      >
      </cuoore-button>
      <cuoore-button
        label='2outline'
        type='secondary-outline'
        style=${inputStyle}
      >
      </cuoore-button>
      <cuoore-button
        label='2outline'
        type='secondary-outline'
        size='big'
        style=${inputStyle}
      >
      </cuoore-button>
    `,
    {
      notes,
    }
  )
