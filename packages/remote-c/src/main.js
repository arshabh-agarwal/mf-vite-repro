import 'remote-a/Button';
import 'remote-b/Card';
import './Dashboard.svelte';

document.querySelector('remote-c-dashboard') || (() => {
  const el = document.createElement('remote-c-dashboard');
  document.getElementById('app').appendChild(el);
})();
