<svelte:options customElement="remote-b-card" />

<script>
  let { title = 'Remote B Card', body = 'Hello from Remote B!' } = $props();
</script>

<div class="card">
  <h3>{title}</h3>
  <p>{body}</p>
</div>

<style>
  .card {
    padding: 16px 24px;
    background: #42b883;
    color: white;
    border-radius: 8px;
    margin: 8px;
    font-family: sans-serif;
    display: inline-block;
    min-width: 200px;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 18px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
</style>
