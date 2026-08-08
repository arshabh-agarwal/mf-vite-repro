console.log('[shared-lib] module evaluated');
customElements.define('shared-lib-element', class extends HTMLElement {});
export const value = 'hello from shared-lib';
