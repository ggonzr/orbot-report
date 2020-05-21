<template>
  <div class="architecture">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
    <div class="container-fluid mt--7">
      <div class="row mt-5">
        <div class="col-12 col-md-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Arquitectura de software</h1>
              </div>
            </div>
            <p>
              La aplicación utiliza un patrón MVC (modelo, vista, controlador).
              El modelo en la aplicación correspondiente a la lógica del proceso
              radica en las librerías nativas que invoca la aplicación para
              retransmitir el tráfico, realizar procesos de cifrado y mantener
              el anonimato. El controlador en este patrón corresponde a la capa
              de Android, pues la aplicación actúa como mediador para la
              recolección de datos y su transmisión en la red Tor y comunicar el
              estado de la comunicación y la configuración de la red.
              Finalmente, la capa de la vista en la aplicación muestra de manera
              visual el estado de la conexión, opciones para configurar los
              puentes de retransmisión y seleccionar las aplicaciones cuyo
              tráfico va a ser cubierto por el servicio.
            </p>
            <p>
              Por otro lado, la aplicación utiliza diferentes patrones de
              instanciación en el controlador como <b>Singleton</b>, para evitar
              instanciar más de una vez un componente del servicio para invocar
              las librerías externas o instanciar más de una vez un componente
              del sistema. Por ejemplo, en el momento de invocar el Package
              Manager para utilizar las librerías externas para retransmitir el
              tráfico, se obtiene la referencia del objeto que posee el sistema.
              Asimismo, otro patrón que se aplica a lo largo del código de la
              aplicación son decoradores para suprimir algunas advertencias del
              sistema o sobreescribir métodos de los objetos. Por ejemplo, las
              actividades <b>BridgeWizard</b>, <b>OnBoarding</b> y
              <b>Moat</b> heredan la actividad AppManager. El estilo de la
              aplicación se enfoca en el paradigma de Cliente-Servidor, puesto
              que, la aplicación móvil actúa como cliente para el envío de datos
              a la red de servidores Tor para redirigir de manera segura el
              tráfico de la capa de aplicación del dispositivo Android al igual
              para recibir las respuestas.
            </p>

            <p>
              Otro patrón que encontramos es el adaptador el cual es
              implementado para utilizar como interfaces la clase encargada de
              cargar los backup, el listado de cookies de clientes configuradas
              y el listado de servicios de onion agregados. Estos adaptadores
              están siendo utilizados directamente por los componentes de vista
              como Diálogos y Actividades.
            </p>
            <figure class="figure">
              <img
                class="device-screenshot"
                src="img/screenshots/decoratorHeritance.png"
                alt="Decorator Heritance"
              />
              <figcaption class="figure-caption text-center">
                Uso del patrón de decoradores utilizando etiquetas y mecanismo
                de herencia para evitar reutilizar código.
              </figcaption>
            </figure>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>