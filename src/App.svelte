<script lang="ts">
  import { each } from "svelte/internal";
  import Attemp from "./lib/Attemp.svelte";


  const target: number[] = [];
  export let attemp: number[][] = [];
  let contBelongs: number[] = [];
  let contCorrect: number[] = [];
  let numAttemps: number = 0;
  let win: boolean = false;

  function startArray(){
    for (let i = 0; i < 6; i++) {
      attemp[i] = [];
      contBelongs[i] = 0;
      contCorrect[i] = 0;
}
  } 

  function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

  function generateNumber() {
    for(let i=0; i<5; i++){
      target.push(randomInt(0,9));
    }
  }

  function compareNumbers(){
    let targetCopy = [].concat(target);
    let found: boolean = false;
    for(let i=0; i<5; i++){
     
      console.log(attemp[numAttemps] + typeof(attemp[numAttemps]))
      found = false;
      if(attemp[numAttemps][i] == target[i]) contCorrect[numAttemps]++;
      for(let j=0; j<5 && !found; j++){
        if (attemp[numAttemps][i] == targetCopy[j]){
          contBelongs[numAttemps]++;
          targetCopy[j] = -1;
          found = true;
        } 
      }
    }
    numAttemps++;
  }
  function checkVictory(){
    return (contCorrect[numAttemps] == 5)
  }
  console.log(target)

startArray();
generateNumber();


</script>

<main>

  <h1>Enigma</h1>
  <Attemp attemp={attemp[0]} contBelongs={contBelongs[0]} contCorrect={contCorrect[0]}/>
  {#if numAttemps >=1}
  <Attemp attemp={attemp[1]} contBelongs={contBelongs[1]} contCorrect={contCorrect[1]}/>
  {/if}
  {#if numAttemps >=2}
  <Attemp attemp={attemp[2]} contBelongs={contBelongs[2]} contCorrect={contCorrect[2]}/>
  {/if}
  {#if numAttemps >=3}
  <Attemp attemp={attemp[3]} contBelongs={contBelongs[3]} contCorrect={contCorrect[3]}/>
  {/if}
  {#if numAttemps >=4}
  <Attemp attemp={attemp[4]} contBelongs={contBelongs[4]} contCorrect={contCorrect[4]}/>
  {/if}
  {#if numAttemps >=5}
  <Attemp attemp={attemp[5]} contBelongs={contBelongs[5]} contCorrect={contCorrect[5]}/>
  {/if}


  <div class="input">
    <form class="center-column">
      <label for="attemp">Insert a number:</label>
      <input bind:value={attemp[numAttemps]} id="attemp">
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