class customButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `<button>Custom Button</button>`;
      this._color = 'blue';
    }
  
    static get observedAttributes() {
      return ['color'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'color') {
        this._color = newValue;
        this.updateColor();
      }
    }
  
    updateColor() {
      this.shadowRoot.querySelector('button').style.backgroundColor = this._color;
    }
  
    changeColor(newColor) {
      this.setAttribute('color', newColor);
    }
  }
  
  customElements.define('custom-button', customButton);