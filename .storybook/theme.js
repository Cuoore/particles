import { create } from '@storybook/theming'

const primaryColor = '#B21F2E'
const secondaryColor = '#FFDBA9'

export default create({
  base: primaryColor,
  colorPrimary: primaryColor,
  colorSecondary: primaryColor,
  appBg: secondaryColor,
  appContentBg: secondaryColor,
  appBorderColor: primaryColor,
  appBorderRadius: 4,
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  textColor: primaryColor,
  textInverseColor: primaryColor,
  barTextColor: primaryColor,
  barSelectedColor: primaryColor,
  barBg: secondaryColor,
  inputBg: primaryColor,
  inputBorder: primaryColor,
  inputTextColor: primaryColor,
  inputBorderRadius: 4,
  brandTitle: 'Cuoore',
  brandUrl: 'file://logo/logo.jpg',
  brandImage: '',
})
