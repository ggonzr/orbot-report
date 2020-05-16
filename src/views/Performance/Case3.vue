<template>
  <div class="row performance-case">
    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>Descripcion Caso 3</h1>
          </div>
        </div>
        <p>
          En esta actividad podemos realizar la configuración de parámetros de
          la aplicación en general. Un patron anomalo en esta actividad se debe
          a la renderización del slider, en caso de que nos movamos rápidamente
          por la lista de elementos, el consumo de memoria aumentara hasta que
          la aplicación falle.
        </p>
      </card>
    </div>

    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>CPU</h1>
          </div>
        </div>
        <p>
          El porcentaje de consumo de CPU en esta actividad es casi nulo
          ubicándose alrededor de un 5%. En el momento en el cual nos
          desplazamos rápidamente por los elementos, el consumo de CPU aumenta
          considerablemente hasta situarse en 15%. La mayor carga es procesada
          por el Thread project.android.
        </p>
        <img src="img/performance/cpu3.PNG" alt="cpu1" />
      </card>
    </div>

    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>Memoria</h1>
          </div>
        </div>
        <p>
          La aplicación consume memoria en los niveles normales siendo este
          valor alrededor de los 135 MB. Algo a destacar es la liberación de
          memoria cuando la app se cierra de manera inesperada por el bug
          reportado.
        </p>
        <img src="img/performance/memory3.PNG" alt="cpu1" />
      </card>
    </div>
    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>
              Red
            </h1>
          </div>
        </div>
        <p>
          El consumo de recursos de red en esta actividad es casi nulo
          presentándose a lo mucho algunos picos de 1 KB/s cuando se cierra la
          aplicación debido al error se presenta una lectura sucia al final de
          la muestra.
        </p>
        <img src="img/performance/network3.PNG" alt="cpu1" />
      </card>
    </div>
    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>
              Energía
            </h1>
          </div>
        </div>
        <p>
          Esta sección presenta un bajo consumo de energía en general. El
          consumo aumenta de manera considerable en el momento en que nos
          desplazamos rápidamente por los elementos de la lista de
          configuraciones
        </p>
        <img src="img/performance/energy3.PNG" alt="cpu1" />
      </card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>