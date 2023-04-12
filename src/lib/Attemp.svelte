<script lang="ts">

export let target: number[] = [];
export let attemp: number[] = [];
export let contBelongs: number = 0;
export let contCorrect: number = 0;
let numAttemps: number = 0;


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
</div>




<style>
  .container{
  display: flex;
  justify-content: space-evenly;
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


</style>