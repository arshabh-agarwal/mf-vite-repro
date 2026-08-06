<svelte:options customElement="remote-a-button" />

<script>
  let { label = 'Hello from Remote A!' } = $props();
</script>

<button>
  {label}
</button>

<style>
  button {
    padding: 12px 24px;
    font-size: 16px;
    background: #646cff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin: 8px;
    font-family: sans-serif;
  }
  button:hover {
    background: #535bf2;
  }
</style>
