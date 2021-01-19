import './label.particle'

import notes from './labels.md'
import { storiesOf } from '@storybook/html'

const inputStyle = 'display:block;margin-bottom:20px;width:100%;'

storiesOf('Formulary|Labels', module).add(
  'Default',
  () =>
    `
      <cuoore-label style=${inputStyle}>
        <span slot="label">
          Nombre
        </span>
      </cuoore-label>
    `,
  {
    notes,
  }
)
