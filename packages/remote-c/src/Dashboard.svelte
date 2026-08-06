<svelte:options customElement="remote-c-dashboard" />

<script>
  import 'remote-a/Button';
  import 'remote-b/Card';
</script>

<div class="dashboard">
  <p>Dashboard from Remote C (composes A + B)</p>
  <remote-a-button label="Button via Remote C → A"></remote-a-button>
  <remote-b-card title="Card via Remote C → B" body="Remote C loaded this from Remote B"></remote-b-card>
</div>

<style>
  .dashboard {
    border: 2px dashed #aaa;
    padding: 16px;
    border-radius: 8px;
    display: inline-block;
    font-family: sans-serif;
  }
  p {
    font-weight: bold;
    margin: 0 0 12px;
  }
</style>
