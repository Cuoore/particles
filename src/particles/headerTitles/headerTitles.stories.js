import './headerTitle.particle'

import notes from './headerTitles.md'
import { storiesOf } from '@storybook/html'

const inputStyle = 'display:block;margin-bottom:20px;width:100%;'

storiesOf('Core|Headers', module).add(
  'Default',
  () =>
    `
      <cuoore-header-title type="1" style=${inputStyle}>
        <span slot="label">
          This is a header 1
        </span>
      </cuoore-header-title>
    `,
  {
    notes,
  }
)
