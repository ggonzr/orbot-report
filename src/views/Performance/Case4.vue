<template>
  <div class="row performance-case">
    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>Descripcion Caso 4</h1>
          </div>
        </div>
        <p>
          Después de haber documentado el rendimiento en las principales
          actividades que posee la aplicación nos enfocaremos en determinar el
          comportamiento de la UI de la actividad principal cuando se intenta
          renderizar los diversos elementos al tiempo. Para ello
          experimentaremos girando inmediatamente la pantalla para desplegar los
          elementos de manera vertical u horizontal. El resultado de esta prueba
          muestra que la aplicación posee un bug pues el servicio se desactiva
          continuamente. A continuación, presentamos el desempeño de esta
          situación.
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
          El consumo de recursos de CPU en la actividad principal se mantiene
          dentro de los rangos normales alcanzando un porcentaje de 9,2% del
          dispositivo de medición. Se encuentran los 35 Threads disponibles para
          ejecutar acciones en la aplicación y de ellos el thread
          project.android ejecuta la mayor cantidad de trabajo.
        </p>
        <img src="img/performance/cpu4.png" alt="cpu1" />
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
          En esta actividad el consumo de memoria incrementa demasiado con
          respecto al comportamiento de los anteriores casos. Al girar la
          pantalla, la vista se renderiza nuevamente y debido al incorrecto uso
          del método findViewById() para buscar los elementos de la vista, la
          aplicación requiere más memoria para ir buscando estos elementos cada
          vez que se gira la pantalla. De ahí el por qué la memoria escala
          alrededor de los 200MB. Asimismo, después de girar la pantalla varias
          veces, la aplicación cierra inesperadamente.
        </p>
        <img src="img/performance/memory4.png" alt="cpu1" />                
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
          En este escenario algunas aplicaciones en segundo plano se encuentran
          enviando tráfico por la red. Por ello podemos observar cómo fluctúa la
          velocidad de carga y descarga en algunos KB/s alcanzando un límite de
          12KB/s.
        </p>
        <img src="img/performance/network4.png" alt="cpu1" />
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
          El consumo de energía se mantiene en bajo a lo largo de la ejecución
          de la aplicación y del experimento situándose los valores en un nivel
          bajo.
        </p>
        <img src="img/performance/energy4.png" alt="cpu1" />
      </card>
    </div>
    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>
              Código
            </h1>
          </div>
        </div>
        <p>
          En esta sección destaca el método <b>doLayout()</b> quien se encarga de pintar 
          la actividad principal. Este método utiliza <b>findViewById()</b> para obtener cada uno 
          de los elementos gráficos entre los que se encuentran <b>Toolbars, Drawers, ImageView</b>
          y por supuesto <b>Labels</b> y <b>Button</b>. Por el continuo uso del método <b>findViewById()</b>
          el rendimiento disminuye y esto se observa en el aumento de memoria que expusimos con anterioridad.
          Sumado a lo anterior, este método se ejecuta en <b>onResume()</b> lo que ocasiona que al girar 
          continuamente la pantalla inmediatamente entre la posición vertical y horizontal, 
          se renderizen los elementos en cada momento hasta que la aplicación se crashea.
        </p>
        <figure>
          <img
            class="code"
            src="img/screenshots/doLayout.png"
            alt="main activity snippet"
          />
          <figcaption>
            Fragmento de código obtenido del siguiente
            <a
              href="https://github.com/guardianproject/orbot/blob/a608a964964506e52878ef55e5b500fd54af90fb/app/src/main/java/org/torproject/android/OrbotMainActivity.java"
              target="_blank"
            >
              archivo
            </a>
          </figcaption>
        </figure>
      </card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>