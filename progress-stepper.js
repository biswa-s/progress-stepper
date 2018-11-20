import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `progress-stepper`
 * A simple progress-stepper polymer 3.0 component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ProgressStepper extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'progress-stepper',
      },
    };
  }
}

window.customElements.define('progress-stepper', ProgressStepper);
