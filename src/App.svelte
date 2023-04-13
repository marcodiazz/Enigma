<script lang="ts">
  import Attemp from "./lib/Attemp.svelte";

  const target: number[] = [];
  let attemp: number[][] = [];
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

  function checkVictory(){
    win = (contCorrect[numAttemps] == 5)
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
    checkVictory();
    numAttemps++;
  }

  console.log(target)

startArray();
generateNumber();


</script>


<main>
  <h1>Enigma</h1>
  <div class="gameScreen center-column">
    {#if !win && numAttemps < 6}
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
      <!-- <p>{target}</p> -->
      {:else if (!win &&numAttemps >= 5)}
        <div class="center-column menu" id="loseMenu">
          <h1 id="lose">Sorry You Lost :( </h1>
          <h2>The code was:</h2>
          <div class="code-container">
            <h1>{target[0] + ' ' + target[1] + ' ' + target[2] + ' ' + target[3] + ' ' + target[4]}</h1>
          </div>
        </div>
    {/if}

    {#if win}

    <div class="center-column menu" id="winMenu">
      <h1 id="congratulations">Congratulations You Won!</h1>
      <h2>The code was:</h2>
      <div class="code-container">
        <h1>{target[0] + ' ' + target[1] + ' ' + target[2] + ' ' + target[3] + ' ' + target[4]}</h1>
      </div>
    </div>
    {/if}
  </div>
</main>

<style>

main{
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}

/* .gameScreen{
  margin-top: 5rem;
} */

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

  button {
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

  .menu{
    border-radius: 20px;
    padding-block: 3rem;
    padding-inline: 4rem;
  }
  #winMenu{
    background-color: #3d7241;
  }

  #loseMenu{
    background-color: #731c1c;
  }


  #congratulations{
    color: white;
  }

  .code-container{
    background: #2b2b2b;
    border-radius: 20px;
    padding-inline: 2rem;
  }
</style>