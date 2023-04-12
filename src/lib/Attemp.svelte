<script lang="ts">
import App from "../App.svelte";
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
