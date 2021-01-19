import { customElementPrefix as prefix } from '../../particle'

class Label extends HTMLElement {
  constructor(...args) {
    super(...args)
    this.setShadowRoot()
  }

  static get observedAttributes() {
    // put here your observedAttributes
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
        :host label {
          font-family: var(--label---font-family);
          font-size: var(--label---font-size);
          font-weight: var(--label---font-weight);
        }
      </style>
      <label>
        <slot name="label"></slot>
      </label>
    `
  }

  render() {
    this.setTemplate()
    this.shadow.innerHTML = this.template
  }
}

if (!customElements.get(`${prefix}-label`)) {
  customElements.define(`${prefix}-label`, Label)
}
