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
}

class Button extends HTMLElement {
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
      :host button {
        height: var(--button---height, 60px);
        padding: var(--button---padding, 10px 35px);
        background: var(--button---background, #b7b7b7);
        border: var(--button---border, 1px solid #b7b7b7);
        border-radius: var(--button---border-radius, none);
        color: var(--button---color, black);
        font-family: var(--button---font-family, sans-serif);
        font-size: var(--button---font-size, 16px);
        font-weight: var(--button---font-weight, 600);
        text-transform: var(--button---text-transform, uppercase);
      }
      :host button:hover {
        cursor: var(--button--hover---cursor, pointer);
        color: var(--button--hover---color, black);
        background: var(--button--hover---background, #a0a0a0);
        transition: var(--button---transition);
      }
      :host button:focus {
        outline: none;
      }
      :host button.primary {
        color: var(--button--primary---color);
        background: var(--button--primary---background, #888888);
        border: var(--button--primary---border, 1px solid #888888);
      }
      :host button.primary:hover {
        color: var(--button--primary--hover---color);
        background: var(--button--primary--hover---background, #7d7d7d);
        border: var(--button--primary--hover---border, 1px solid #7d7d7d);
      }
      :host button.outline {
        color: var(--button--outline---color, #888888);
        background: var(--button--outline---background, transparent);
        border: var(--button--outline---border, 1px solid #888888);
      }
      :host button.outline:hover {
        color: var(--button--outline--hover---color, #6b6b6b);
        background: var(--button--outline--hover---background, transparent);
        border: var(--button--outline--hover---border, 1px solid #6b6b6b);
      }
      </style>
      <button class="${this.type}">${this.label}</button>
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
