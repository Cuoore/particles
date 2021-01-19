import { customElementPrefix as prefix } from '../../particle'

const attributes = {
  type: {
    name: 'type',
    values: ['1', '2', '3', '4', '5', '6'],
    default: 'one',
  },
}

class HeaderTitle extends HTMLElement {
  constructor(...args) {
    super(...args)
    this.setShadowRoot()
    this.setAttributes()
    this.setType()
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

  setType() {
    const slot = '<slot name="label"></slot>'

    switch (this.type) {
      case attributes.types.values[0]:
        this.header = `<h1>${slot}</h1>`
        break
      case attributes.types.values[1]:
        this.header = `<h2>${slot}</h2>`
        break
      case attributes.types.values[2]:
        this.header = `<h3>${slot}</h3>`
        break
      case attributes.types.values[3]:
        this.header = `<h4>${slot}</h4>`
        break
      case attributes.types.values[4]:
        this.header = `<h5>${slot}</h5>`
        break
      case attributes.types.values[5]:
        this.header = `<h6>${slot}</h6>`
        break
      default:
        this.header = `<h1>${slot}</h1>`
        break
    }
  }

  setTemplate() {
    this.template = `
      <style>
      :host h1,h2,h3,h4,h5,h6 {
        color: var()
        font-family: var(--header-title---font-family);
      }

      :host h1 {
        font-size: var(--header-title--h1---font-size);
      }

      :host h2 {
        font-size: var(--header-title--h2---font-size);
      }

      :host h3 {
        // ... put here the components styles ...
      }

      :host h4 {
        // ... put here the components styles ...
      }

      :host h5 {
        // ... put here the components styles ...
      }

      :host h6{
        // ... put here the components styles ...
      }
      </style>
      ${this.header}
    `
  }

  render() {
    this.setTemplate()
    this.shadow.innerHTML = this.template
  }
}

if (!customElements.get(`${prefix}-header-title`)) {
  customElements.define(`${prefix}-header-title`, HeaderTitle)
}
