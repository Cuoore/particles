import { storiesOf } from '@storybook/html'

import colors from '../../theme/colors'
import './loading.particle'

storiesOf('Loading', module)
  .add(
    'default',
    () =>
      `<cuoore-loading
          primaryColor=${colors.primary}
          secondaryColor=${colors.secondary.auxiliary.OII}
          running="true">
      </cuoore-loading>
      `,
    {
      notes: 'A very simple component',
    }
  )
  .add(
    'Sizes',
    () =>
      `
      <cuoore-loading
          primaryColor=${colors.primary}
          secondaryColor=${colors.secondary.auxiliary.OII}
          secondaryOpacity="0.4"
          running="true">
      </cuoore-loading>
      <cuoore-loading
          primaryColor=${colors.primary}
          secondaryColor=${colors.secondary.auxiliary.OII}
          width="150px"
          height="150px"
          secondaryOpacity="0.4"
          running="true">
      </cuoore-loading>
      <cuoore-loading
          primaryColor=${colors.primary}
          secondaryColor=${colors.secondary.auxiliary.OII}
          width="100px"
          height="100px"
          secondaryOpacity="0.4"
          running="true">
      </cuoore-loading>
      `,
    {
      notes: 'A very simple component',
    }
  )
  .add(
    'Opacities',
    () =>
      `
      <cuoore-loading
          primaryColor=${colors.primary}
          secondaryColor=${colors.secondary.auxiliary.OII}
          running="true">
      </cuoore-loading>
      <cuoore-loading
          primaryColor=${colors.primary}
          secondaryColor=${colors.secondary.auxiliary.OII}
          primaryOpacity="0.7"
          secondaryOpacity="0.2"
          running="true">
      </cuoore-loading>
      <cuoore-loading
        primaryColor=${colors.primary}
        secondaryColor=${colors.secondary.auxiliary.OII}
        primaryOpacity="0.5"
        secondaryOpacity="0.1"
        running="true">
      </cuoore-loading>
      `,
    {
      notes: 'A very simple component',
    }
  )
  .add(
    'Speed',
    () =>
      `
      <cuoore-loading
          primaryColor=${colors.primary}
          secondaryColor=${colors.secondary.auxiliary.OII}
          running="true">
      </cuoore-loading>
      <cuoore-loading
          primaryColor=${colors.primary}
          secondaryColor=${colors.secondary.auxiliary.OII}
          speed="0.8"
          running="true">
      </cuoore-loading>
      <cuoore-loading
        primaryColor=${colors.primary}
        secondaryColor=${colors.secondary.auxiliary.OII}
        speed="1.1"
        running="true">
      </cuoore-loading>
      `,
    {
      notes: 'A very simple component',
    }
  )
