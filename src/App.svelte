<script lang="ts">
  import { each } from "svelte/internal";
  import Attemp from "./lib/Attemp.svelte";


  const target: number[] = [];
  export let attemp: number[] = [];
  let contBelongs: number = 0;
  let contCorrect: number = 0;
  let numAttemps: number = 0

  function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

  function generateNumber() {
    for(let i=0; i<5; i++){
      target.push(randomInt(0,9));
    }
  }

  function compareNumbers(){
    let targetCopy = target;
    let found: boolean = false;
    for(let i=0; i<5; i++){
      console.log('works')
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

  console.log(target)
generateNumber();


</script>

<main>

  <h1>Enigma</h1>
  <Attemp target={target} attemp={attemp} contBelongs={contBelongs} contCorrect={contCorrect}/>
  {#if numAttemps >=1}
    <Attemp target={target}/>
  {/if}
  {#if numAttemps >=2}
  <Attemp target={target}/>
  {/if}

  <div class="input">
    <form class="center-column">
      <label for="attemp">Insert a number:</label>
      <input bind:value={attemp} id="attemp">
      <button id="sub" on:click|preventDefault={compareNumbers}>Submit</button>
    </form>
  </div>
  <p>{target}</p>
</main>

<style>

main{
  font-family: 'Poppins', sans-serif;
}
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