<script lang="ts">
    import Attemp from "./Attemp.svelte";
    export let attemp: number[] = []
    export let target: number[] = [];
    let contBelongs: number = 0;
  let contCorrect: number = 0;

    function compareNumbers(){
    let targetCopy = target;
    let found: boolean = false;
    for(let i=0; i<5; i++){
      found = false;
      if(attemp[i] == target[i]) contCorrect++;
      for(let j=0; j<5 && !found; j++){
        if (attemp[i] == targetCopy[j]){
          contBelongs++;
          targetCopy[j] = -1;
          found = true;
        } 
      }
    }
  }
</script>

<div class="input">
    <form class="center-column">
      <label for="attemp">Insert a number:</label>
      <input bind:value={attemp} id="attemp">
      <button id="sub" on:click|preventDefault={compareNumbers}>Submit</button>

    </form>
  </div>

  <!-- <p>{target}</p> -->

  <style>
  .center-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .input{
    margin-top: 5rem;
  }
  .input label{
    font-size: 1.2rem;
  }
  .input input{
    height: 2.5rem;
    font-size: 1.2rem;
  }
  #sub{
    margin-top: 1rem;
  }
  </style>