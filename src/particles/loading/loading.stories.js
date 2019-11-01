import { storiesOf } from '@storybook/html'

import './loading.particle'
import notes from './loading.md'

storiesOf('Loading', module)
  .add(
    'default',
    () =>
      `
      <cuoore-loading
        class="small"
        running="true"
      >
      </cuoore-loading>
      <cuoore-loading
        running="true"
      >
      </cuoore-loading>
      <cuoore-loading
        class="big"
        running="true"
      >
      </cuoore-loading>
      `,
    {
      notes,
    }
  )
  .add(
    'Speed',
    () =>
      `
      <cuoore-loading
        speed="0.5"
        running="true"
      >
      </cuoore-loading>
      <cuoore-loading
        running="true"
      >
      </cuoore-loading>
      <cuoore-loading
        speed="1.1"
        running="true"
      >
      </cuoore-loading>
      `,
    {
      notes: 'A very simple component',
    }
  )
