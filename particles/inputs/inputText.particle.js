import { customElementPrefix as prefix } from '../../particle'

const attributes = {
  id: {
    name: 'id',
    default: '',
  },
  placeholder: {
    name: 'placeholder',
    default: '',
  },
}

class InputText extends HTMLElement {
  constructor(...args) {
    super(...args)
    this.setShadowRoot()
    this.setAttributes()
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

  setTemplate() {
    this.template = `
      <style>
      :host input {
        width: var(--input-text---width, 100%);
        height: var(--input-text---height, 30px);
        border: var(--input-text---border, 1px solid grey);
        border-radius: var(--input-text---border-radius, none);
        padding: var(--input-text---padding, 10px 10x);
        background: var(--input-text---background, transparent);
        color: var(--input-text---color, black);
        font-family: var(--input-text---font-family, sans-serif);
        font-size: var(--input-text---font-size, 16px);
      }
      :host input:focus {
        width: var(--input-text--focus---width, calc(calc(100% + 2px)-8px));
        height: var(--input-text--focus---height, 26px);
        border: var(--input-text--focus---border, 4px solid grey);
        outline: none;
      }
      :host input::placeholder {
        color: var(--input-text--placeholder---color, black);
        font-style: var(--input-text--placeholder---font-style), italic;
      }
      </style>
      <input id="${this.id}" name="${this.name}" placeholder="${this.placeholder}" type="text"/>
    `
  }

  render() {
    this.setTemplate()
    this.shadow.innerHTML = this.template
  }
}

if (!customElements.get(`${prefix}-input-text`)) {
  customElements.define(`${prefix}-input-text`, InputText)
}
