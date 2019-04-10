import { addParameters, configure } from '@storybook/html'
import theme from './theme'

addParameters({
  options: {
    theme,
    showNav: true,
    showPanel: false,
  },
})

const req = require.context('../particles', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
