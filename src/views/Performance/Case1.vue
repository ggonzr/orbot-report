<template>
  <div class="row performance-case">
    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>Descripcion Caso 1</h1>
          </div>
        </div>
        <p>
          Al iniciar la aplicación por primera vez se muestra un mensaje de
          bienvenida al usuario explicando los principales beneficios que
          obtiene al cifrar su tráfico por la red, este grupo de ventanas se
          agrupa dentro de la actividad OnBoarding. Posteriormente, la
          aplicación ejecuta la actividad principal dentro de la cual se exponen
          diversas funcionalidades cómo iniciar el servicio VPN, cambiar la
          localización de reenvío de paquetes, cambiar la configuración del
          túnel y la configuración general de la aplicación.
        </p>
        <img src="img/performance/general1.PNG" alt="general1" />
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
          En esta sección se presenta el pico máximo de uso de CPU el cual ronda
          alrededor del 23%. Este elevado consumo de CPU en comparación con las
          demás actividades de la aplicación se encuentra sustentado en la
          validación que realiza las librerías de túnel para iniciar la conexión
          y enrutar paquetes por la red Tor. Por ello después de este proceso el
          consumo promedio de CPU ronda alrededor de un 8%. En este punto, el
          sistema se encuentra ejecutando 32 Threads y el principal es
          project.android. Asimismo, se puede observar en Profiler que la
          aplicación utiliza alrededor de 15 Threads para paralelizar el envío
          de paquetes de información.
        </p>
        <img src="img/performance/cpu1.PNG" alt="cpu1" />
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
          Después de cargar la actividad principal, el consumo de memoria se
          estabiliza en un rango entre los 50MB a 64MB. En el momento en el que
          se inicia el servicio de VPN, la aplicación procede con la validación
          de la ruta de envío de paquetes para establecer una conexión segura.
          Este proceso implica que la aplicación duplique su consumo de memoria
          y este se establezca alrededor de 135MB.
        </p>
        <img src="img/performance/memory1.PNG" alt="cpu1" />
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
          En esta sección de la aplicación el consumo de red es notorio debido a
          que realiza procesos de enlace a la capa de transporte para registrar
          el cliente en la red tor. En este proceso se llega a consumir
          alrededor de 240KB para sincronizar la configuración y poner el
          servicio en línea. Posteriormente, la aplicación consume pocos
          recursos de red registrando velocidades de salida y entrada de datos
          que rondan alrededor de los 10 o los 5 Kbps en un estado activo sin
          tráfico de otras aplicaciones.
        </p>
        <img src="img/performance/network1.PNG" alt="cpu1" />
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
          El consumo de energía por parte de la aplicación es relativamente
          bajo, se presentan algunos picos que elevan el consumo a una categoría
          de medio en el momento que se activa el modo VPN de la aplicación y
          fluctúa a lo largo actividad principal. No obstante, la mayor parte
          del tiempo el consumo se mantiene en niveles bajos.
        </p>
        <img src="img/performance/energy1.PNG" alt="cpu1" />
      </card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>