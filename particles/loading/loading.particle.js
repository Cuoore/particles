import { customElementPrefix } from '../../particle'
import colors from '../../theme/colors'

const attributes = {
  running: {
    name: 'running',
    default: false,
  },
  width: {
    name: 'width',
    default: '200px',
  },
  height: {
    name: 'size',
    default: '200px',
  },
  primaryColor: {
    name: 'primaryColor',
    default: colors.pureBlack,
  },
  secondaryColor: {
    name: 'secondaryColor',
    default: colors.pureBlack,
  },
  primaryOpacity: {
    name: 'primaryOpacity',
    default: '1',
  },
  secondaryOpacity: {
    name: 'secondaryOpacity',
    default: '0.4',
  },
  speed: {
    name: 'speed',
    default: '0.5',
  },
}

const classes = {
  default: `${customElementPrefix}-loading`,
}

class CuooreLoading extends HTMLElement {
  constructor(...args) {
    super(...args)
    this.setShadowRoot()
    this.setAttributes()
  }

  static get observedAttributes() {
    return [attributes.running.name]
  }

  setAttributes() {
    for (const key in attributes) {
      try {
        const attribute = attributes[key]
        this[attribute.name] = this.getAttribute(attribute.name) || attribute.default
      } catch (error) {
        console.error(`the attribute ${attribute.name} has errors`)
      }
    }
  }

  hide() {
    this.style.display = 'none'
  }

  setShadowRoot() {
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this[attrName] = newVal
    this.render()
  }

  setTemplate() {
    this.template = `
      <style>
      .${classes.default}  {
        width: ${this.width};
        height: ${this.height};
      }
      </style>
      <svg
        class="${classes.default}"
        viewBox="0 0 40 40">
        <path
          opacity=${this.secondaryOpacity}
          fill=${this.secondaryColor}
          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
        />
        <path
          opacity=${this.primaryOpacity}
          fill=${this.primaryColor}
          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur=${this.speed}
            repeatCount="indefinite"/>
        </path>
      </svg>
    `
  }

  render() {
    if (!this.running) {
      this.hide()
    }

    this.setTemplate()
    this.shadow.innerHTML = this.template
  }
}

if (!customElements.get(`${customElementPrefix}-loading`)) {
  customElements.define(`${customElementPrefix}-loading`, CuooreLoading)
}
