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
        <img src="img/performance/general1.png" alt="general1" />
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
        <img src="img/performance/cpu1.png" alt="cpu1" />
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
        <img src="img/performance/memory1.png" alt="cpu1" />                
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
        <img src="img/performance/network1.png" alt="cpu1" />
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
        <img src="img/performance/energy1.png" alt="cpu1" />
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
          El siguiente fragmento de código muestra la sección de la 
          aplicación que invoca la actividad principal en el
          momento en que el usuario culmina la introducción (<b>OnboardingActivity</b>).
          La actividad principal muestra el estado de ejecución del servicio <b>Orbot</b> al 
          igual que la configuración del tunel y las aplicaciones sobre las 
          cuales se va a cubir el trafico. Debido al cambio de actividad y los componentes 
          que la actividad principal necesita, aumenta el consumo de CPU y el uso de memoria.
        </p>
        <p>
          En la primera clase de la imagen podemos observar la actividad <b>OnBoarding</b>
          y el método <b>onDonePressed</b> que invoca la actividad principal en el momento en que
          el usuario culmina la introducción. Asimismo, este método almacena en las preferencias
          que yá el usuario observó la introducción para que en accesos posteriores se redirija a
          la actividad principal.
        </p>
        <p>
          Ya en la actividad principal, el metodo recupera del almacenamiento local las variables
          de la actividad y procede a renderizar la vista usando el método
          <a href="" @click="changeView">doLayout()</a> quien dibuja los elementos de la actividad entre
          los que se encuentra varios pickers, una animación principal para indicar si la conexión se encuentra
          en marcha o apagada y los labels que indican al usuario la velocidad de subida y de bajada. Clickeando
          el enlace y bajando un poco en el articulo se encuentra el método en mención.
        </p>
        <img
          class="code"
          src="img/screenshots/performance1.png"
          alt="main activity snippet"
        />
        <figcaption>
          Fragmento de código obtenido del siguiente
          <a
            href="https://github.com/guardianproject/orbot/blob/0a3a4f7ee943e05caa0d5417ed802d2a4e028af3/app/src/main/java/org/torproject/android/ui/onboarding/OnboardingActivity.java"
            target="_blank"
          >
            archivo
          </a>
        </figcaption>
      </card>
    </div>
  </div>
</template>

<script>
export default {
    props: ["callback"],
    methods: {
      changeView: function (ev) {
        ev.preventDefault();        
        this.callback(5);
        window.scrollTo(0,0)
      }
    }    
};
</script>  
<style>
</style>