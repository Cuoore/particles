import './loading.particle'

import notes from './loading.md'
import { storiesOf } from '@storybook/html'

storiesOf('Feedback|Loading', module)
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
