<script lang="ts">
    import Attemp from "./Attemp.svelte";
    export let attemp: number[] = []
    
</script>

<div class="input">
    <form class="center-column">
      <label for="attemp">Insert a number:</label>
      <input bind:value={attemp} id="attemp">
      <button id="sub" on:click|preventDefault={compareNumbers}>Submit</button>

    </form>
  </div>

  <p>{target}</p>