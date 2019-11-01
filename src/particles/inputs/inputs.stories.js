import { storiesOf } from '@storybook/html'

import './inputText.particle'
import notes from './inputs.md'

const inputStyle = 'display:block;margin-bottom:20px;width:40%;'

storiesOf('Inputs', module).add(
  'Text',
  () =>
    `
      <cuoore-input-text style=${inputStyle}></cuoore-input-text>
      <cuoore-input-text
        placeholder="...Write here some text..."
        style=${inputStyle}
      >
      </cuoore-input-text>
    `,
  {
    notes,
  }
)
