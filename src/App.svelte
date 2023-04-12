<script lang="ts">
  import { each } from "svelte/internal";

  const target: number[] = [];
  let attemp: number[] = [];
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

  function countBelongs(number){
    
  }
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

  console.log(target)
generateNumber();


</script>

<main>

  <h1>Enigma</h1>
  <div class="container">

    <!-- PRIMER INTENTO -->
    <div class="table-column" id="solucion">
      <div class="numbercell">
        <p class="number">{attemp[0]}</p>
      </div>
      <div class="numbercell">
        <p class="number">{attemp[1]}</p>
      </div>
      <div class="numbercell">
        <p class="number">{attemp[2]}</p>
      </div>
      <div class="numbercell">
        <p class="number">{attemp[3]}</p>
      </div>
      <div class="numbercell">
        <p class="number">{attemp[4]}</p>
      </div>
      
    </div>
    <div class="table-column" id="belongs">
      <p class="numbercell number">{contBelongs}</p>
    </div>
    <div class="table-column" id="correct">
      <p class="numbercell number">{contCorrect}</p>
    </div>
    <!-- SEGUNDO INTENTO -->
  </div>
  <div class="container">

      <!-- SEGUNDO INTENTO -->
    <div class="table-column" id="solucion">
      <div class="numbercell">
        <p class="number">{attemp[0]}</p>
      </div>
      <div class="numbercell">
        <p class="number">{attemp[1]}</p>
      </div>
      <div class="numbercell">
        <p class="number">{attemp[2]}</p>
      </div>
      <div class="numbercell">
        <p class="number">{attemp[3]}</p>
      </div>
      <div class="numbercell">
        <p class="number">{attemp[4]}</p>
      </div>
      
    </div>
    <div class="table-column" id="belongs">
      <p class="numbercell number">{contBelongs}</p>
    </div>
    <div class="table-column" id="correct">
      <p class="numbercell number">{contCorrect}</p>
    </div>
  </div>

  <div class="container">
    <!-- TERCER INTENTO -->
  <div class="table-column" id="solucion">
    <div class="numbercell">
      <p class="number">{attemp[0]}</p>
    </div>
    <div class="numbercell">
      <p class="number">{attemp[1]}</p>
    </div>
    <div class="numbercell">
      <p class="number">{attemp[2]}</p>
    </div>
    <div class="numbercell">
      <p class="number">{attemp[3]}</p>
    </div>
    <div class="numbercell">
      <p class="number">{attemp[4]}</p>
    </div>
    
  </div>
  <div class="table-column" id="belongs">
    <p class="numbercell number">{contBelongs}</p>
  </div>
  <div class="table-column" id="correct">
    <p class="numbercell number">{contCorrect}</p>
  </div>
</div>


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
.container{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.center-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.table-column{
  margin-inline: 8rem;
  margin-top: 4rem;
}

#solucion{
  display: flex;
  justify-content: center;
  align-items: center;
}

.numbercell{
  padding: 20px;
  width: 30px;
  height: 30px;
  background-color: #595959;
  border-radius: 10px;
  margin: 10px;

}

.number{
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
}

#belongs p{
  background: #aa8c03;
}
#correct p{
  background: #03aa11;
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