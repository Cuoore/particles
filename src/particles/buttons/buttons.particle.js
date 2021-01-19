import { customElementPrefix as prefix } from '../../particle'

const attributes = {
  type: {
    name: 'type',
    default: '',
  },
  value: {
    name: 'label',
    default: '',
  },
  size: {
    name: 'size',
    values: ['big', 'normal', 'small'],
    default: 'normal',
  },
}

class Button extends HTMLElement {
  constructor(...args) {
    super(...args)
    this.setShadowRoot()
    this.setAttributes()
    this.setFontSizeBySize()
    this.setHeightBySize()
    this.setMinWidthBySize()
    this.setPaddingBySize()
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

  setFontSizeBySize() {
    switch (this.size) {
      case attributes.size.values[2]:
        this.fontSize = 'var(--button--small---font-size)'
        break
      case attributes.size.values[0]:
        this.fontSize = 'var(--button--big---font-size)'
        break
      default:
        this.fontSize = 'var(--button---font-size, 16px)'
        break
    }
  }

  setHeightBySize() {
    switch (this.size) {
      case attributes.size.values[2]:
        this.height = 'var(--button--small---height)'
        break
      case attributes.size.values[0]:
        this.height = 'var(--button--big---height)'
        break
      default:
        this.height = 'var(--button---height, 60px)'
        break
    }
  }

  setMinWidthBySize() {
    switch (this.size) {
      case attributes.size.values[2]:
        this.minWidth = 'var(--button--small---min-width)'
        break
      case attributes.size.values[0]:
        this.minWidth = 'var(--button--big---min-width)'
        break
      default:
        this.minWidth = 'var(--button---min-width, 110px)'
        break
    }
  }

  setPaddingBySize() {
    switch (this.size) {
      case attributes.size.values[2]:
        this.padding = {
          default:
            'var(--button--small---padding-top) var(--button--small---padding-right) var(--button--small---padding-bottom) var(--button--small---padding-left)',
          primary:
            'var(--button--primary--small---padding-top) var(--button--primary--small---padding-right) var(--button--primary--small---padding-bottom) var(--button--primary--small---padding-left)',
          primaryOutline:
            'var(--button--primary-outline--small---padding-top) var(--button--primary-outline--small---padding-right) var(--button--primary-outline--small---padding-bottom) var(--button--primary-outline--small---padding-left)',
          secondary:
            'var(--button--secondary--small---padding-top) var(--button--secondary--small---padding-right) var(--button--secondary--small---padding-bottom) var(--button--secondary--small---padding-left)',
          hover: {
            default:
              'var(--button--small--hover---padding-top) var(--button--small--hover---padding-right) var(--button--small--hover---padding-bottom) var(--button--small--hover---padding-left)',
            primary:
              'var(--button--primary--small--hover---padding-top) var(--button--primary--small--hover---padding-right) var(--button--primary--small--hover---padding-bottom) var(--button--primary--small--hover---padding-left)',
            secondary:
              'var(--button--secondary--small--hover---padding-top) var(--button--secondary--small--hover---padding-right) var(--button--secondary--small--hover---padding-bottom) var(--button--secondary--small--hover---padding-left)',
            primaryOutline:
              'var(--button--primary-outline--small--hover---padding-top) var(--button--primary-outline--small--hover---padding-right) var(--button--primary-outline--small--hover---padding-bottom) var(--button--primary-outline--small--hover---padding-left)',
          },
        }
        break
      case attributes.size.values[0]:
        this.padding = {
          default:
            'var(--button--big---padding-top) var(--button--big---padding-right) var(--button--big---padding-bottom) var(--button--big---padding-left)',
          primary:
            'var(--button--primary--big---padding-top) var(--button--primary--big---padding-right) var(--button--primary--big---padding-bottom) var(--button--primary--big---padding-left)',
          primaryOutline:
            'var(--button--primary-outline--big---padding-top) var(--button--primary-outline--big---padding-right) var(--button--primary-outline--big---padding-bottom) var(--button--primary-outline--big---padding-left)',
          secondary:
            'var(--button--secondary--big---padding-top) var(--button--secondary--big---padding-right) var(--button--secondary--big---padding-bottom) var(--button--secondary--big---padding-left)',
          secondaryOutline:
            'var(--button--secondary-outline--big---padding-top) var(--button--secondary-outline--big---padding-right) var(--button--secondary-outline--big---padding-bottom) var(--button--secondary-outline--big---padding-left)',
          hover: {
            default:
              'var(--button--big--hover---padding-top) var(--button--big--hover---padding-right) var(--button--big--hover---padding-bottom) var(--button--big--hover---padding-left)',
            primary:
              'var(--button--primary--big--hover---padding-top) var(--button--primary--big--hover---padding-right) var(--button--primary--big--hover---padding-bottom) var(--button--primary--big--hover---padding-left)',
            secondary:
              'var(--button--secondary--big--hover---padding-top) var(--button--secondary--big--hover---padding-right) var(--button--secondary--big--hover---padding-bottom) var(--button--secondary--big--hover---padding-left)',
            primaryOutline:
              'var(--button--primary-outline--big--hover---padding-top) var(--button--primary-outline--big--hover---padding-right) var(--button--primary-outline--big--hover---padding-bottom) var(--button--primary-outline--big--hover---padding-left)',
            secondaryOutline:
              'var(--button--secondary-outline--big--hover---padding-top) var(--button--secondary-outline--big--hover---padding-right) var(--button--secondary-outline--big--hover---padding-bottom) var(--button--secondary-outline--big--hover---padding-left)',
          },
        }
        break
      default:
        this.padding = {
          default:
            'var(--button---padding-top) var(--button---padding-right) var(--button---padding-bottom) var(--button---padding-left)',
          primary:
            'var(--button--primary---padding-top) var(--button--primary---padding-right) var(--button--primary---padding-bottom) var(--button---primary--padding-left)',
          secondary:
            'var(--button--secondary---padding-top) var(--button--secondary---padding-right) var(--button--secondary---padding-bottom) var(--button---secondary--padding-left)',
          primaryOutline:
            'var(--button--primary-outline---padding-top) var(--button--primary-outline---padding-right) var(--button--primary-outline---padding-bottom) var(--button--primary-outline---padding-left)',
          secondaryOutline:
            'var(--button--secondary-outline---padding-top) var(--button--secondary-outline---padding-right) var(--button--secondary-outline---padding-bottom) var(--button--secondary-outline---padding-left)',
          hover: {
            default:
              'var(--button--hover---padding-top) var(--button--hover---padding-right) var(--button--hover---padding-bottom) var(--button--hover---padding-left)',
            primary:
              'var(--button--primary--hover---padding-top) var(--button--primary--hover---padding-right) var(--button--primary--hover---padding-bottom) var(--button---primary--hover--padding-left)',
            secondary:
              'var(--button--secondary--hover---padding-top) var(--button--secondary--hover---padding-right) var(--button--secondary--hover---padding-bottom) var(--button---secondary--hover--padding-left)',
            primaryOutline:
              'var(--button--primary-outline--hover---padding-top) var(--button--primary-outline--hover---padding-right) var(--button--primary-outline--hover---padding-bottom) var(--button--primary-outline--hover---padding-left)',
            secondaryOutline:
              'var(--button--secondary-outline--hover---padding-top) var(--button--secondary-outline--hover---padding-right) var(--button--secondary-outline--hover---padding-bottom) var(--button--secondary-outline--hover---padding-left)',
          },
        }
        break
    }
  }

  setTemplate() {
    this.template = `
      <style>
        :host button {
          height: ${this.height};
          min-width: ${this.minWidth};
          padding: ${this.padding.default};
          background: var(--button---background);
          border: var(--button---border);
          border-radius: var(--button---border-radius);
          color: var(--button---color, black);
          font-family: var(--button---font-family);
          font-size: ${this.fontSize};
          font-weight: var(--button---font-weight);
          text-transform: var(--button---text-transform);
          box-shadow: var(--button---box-shadow);
        }
        :host button:hover {
          cursor: var(--button--hover---cursor);
          color: var(--button--hover---color);
          border: var(--button--hover---border);
          background: var(--button--hover---background);
          transition: var(--button--hover---transition);
          box-shadow: var(--button--hover---box-shadow);
        }
        :host button:active {
          background: var(--button--active---background);
          color: var(--button--active---color);
          box-shadow: var(--button--active---box-shadow);
          transition: var(--button--active---transition);
        }
        :host button:focus {
          outline: none;
        }
        :host button.primary {
          padding: ${this.padding.primary};
          color: var(--button--primary---color);
          background: var(--button--primary---background);
          border: var(--button--primary---border);
          box-shadow: var(--button--primary---box-shadow);
        }
        :host button.primary:hover {
          padding: ${this.padding.hover.primary}
          color: var(--button--primary--hover---color);
          background: var(--button--primary--hover---background);
          border: var(--button--primary--hover---border);
          transition: var(--button--primary--hover---transition);
          box-shadow: var(--button--primary--hover---box-shadow);
        }
        :host button.primary:active {
          color: var(--button--primary--active---color);
          background: var(--button--primary--active---background);
          transition: var(--button--primary--active---transition);
          box-shadow: var(--button--primary--active---box-shadow);
        }
        :host button.primary-outline {
          padding: ${this.padding.primaryOutline};
          color: var(--button--primary-outline---color);
          background: var(--button--primary-outline---background);
          border: var(--button--primary-outline---border);
          box-shadow: var(--button--primary-outline---box-shadow);
        }
        :host button.primary-outline:hover {
          padding: ${this.padding.hover.primaryOutline};
          color: var(--button--primary-outline--hover---color);
          background: var(--button--primary-outline--hover---background);
          border: var(--button--primary-outline--hover---border);
          transition: var(--button--primary-outline--hover---transition);
          box-shadow: var(--button--primary-outline--hover---box-shadow);
        }
        :host button.primary-outline:active {
          color:  var(--button--primary-outline--active---color);
          border: var(--button--primary-outline--active---border);
        }
        :host button.secondary {
          padding: ${this.padding.secondary};
          color: var(--button--secondary---color);
          background: var(--button--secondary---background);
          border: var(--button--secondary---border);
          box-shadow: var(--button--secondary---box-shadow);
        }
        :host button.secondary:hover {
          padding: ${this.padding.hover.secondary}
          color: var(--button--secondary--hover---color);
          background: var(--button--secondary--hover---background);
          border: var(--button--secondary--hover---border);
          transition: var(--button--secondary--hover---transition);
          box-shadow: var(--button--secondary--hover---box-shadow);
        }
        :host button.secondary:active {
          color: var(--button--secondary--active---color);
          background: var(--button--secondary--active---background);
          transition: var(--button--secondary--active---transition);
          box-shadow: var(--button--secondary--active---box-shadow);
        }
        :host button.secondary-outline {
          padding: ${this.padding.primaryOutline};
          color: var(--button--secondary-outline---color);
          background: var(--button--secondary-outline---background);
          border: var(--button--secondary-outline---border);
          box-shadow: var(--button--secondary-outline---box-shadow);
        }
        :host button.secondary-outline:hover {
          padding: ${this.padding.hover.primaryOutline};
          color: var(--button--secondary-outline--hover---color);
          background: var(--button--secondary-outline--hover---background);
          border: var(--button--secondary-outline--hover---border);
          transition: var(--button--secondary-outline--hover---transition);
          box-shadow: var(--button--secondary-outline--hover---box-shadow);
        }
        :host button.secondary-outline:active {
          color:  var(--button--secondary-outline--active---color);
          border: var(--button--secondary-outline--active---border);
        }
      </style>
      <button
        type="${this.type}">
          ${this.label}
      </button>
    `
  }

  render() {
    this.setTemplate()
    this.shadow.innerHTML = this.template
  }
}

if (!window.customElements.get(`${prefix}-button`)) {
  window.customElements.define(`${prefix}-button`, Button)
}
