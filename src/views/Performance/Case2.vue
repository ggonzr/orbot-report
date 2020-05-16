<template>
  <div class="row performance-case">
    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>Descripcion Caso 2</h1>
          </div>
        </div>
        <p>
          En esta actividad, la aplicación le permite al usuario seleccionar el
          modo de conexión para el reenvío de paquetes. El usuario puede
          seleccionar comunicarse con servidores de Tor directamente, establecer
          sus nodos propios o conectarse a servidores de la propia comunidad que
          transmiten el tráfico como una red P2P.
        </p>
        <img src="img/performance/general2.PNG" alt="general1" />
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
          El consumo de CPU se mantiene estable dentro de los rangos propuestos
          y reporta un consumo del 9,8% ejecutando sus procesos dentro del
          thread project.android.
        </p>
        <img src="img/performance/cpu2.PNG" alt="cpu1" />
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
          En esta actividad, la memoria RAM se mantiene dentro de los límites
          normales después de activar el servicio de VPN utilizando 120MB. La
          mayoría parte de esta memoria se utiliza para ejecutar el código de la
          aplicación (61MB) seguida de los procesos que realizan las librerías
          nativas (36MB) y el código Java (21MB).
        </p>
        <img src="img/performance/memory2.PNG" alt="cpu1" />
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
          El tráfico de red que se realiza en esta actividad es mínimo por lo
          cual podemos observar que las velocidades de carga y descarga no
          superan más de 3,5 KB/s.
        </p>
        <img src="img/performance/network2.PNG" alt="cpu1" />
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
          En esta sección se presentan algunos picos de consumo medio de
          energía. No obstante, la mayor parte del tiempo se consume un nivel
          bajo de batería. Esto se debe a un consumo principalmente del
          componente de CPU.
        </p>
        <img src="img/performance/energy2.PNG" alt="cpu1" />
      </card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>