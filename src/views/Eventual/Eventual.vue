<template>
  <div class="eventual">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-0">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Conectividad Eventual</h1>
              </div>
            </div>
            <p>
              Durante el análisis de la aplicación no encontramos ningún tipo de
              mensaje referente a errores de conectividad eventual. Por el
              contrario nos encontramos con un problema a la hora de conectar
              con los servicios de tor.
            </p>
            <p>
              Al activar el modo avión para restringir el acceso a internet por
              parte de la aplicación, aún se permite hacer tap en la opción de
              iniciar. Sin embargo no es posible conectar por lo que la
              aplicación permanece en un estado de carga infinito sin mostrar ni
              siquiera un spiner. Los 3 puntos suspensivos y el largo tiempo de
              espera son el único indicativo de que algo puede estar saliendo
              mal. Sumado a esto, encontramos que al desactivar el modo avión
              para permitir el acceso a la aplicación, ya no es posible
              conectarse a los servicios de tor. La imagen de la conexión activa
              de Tor en la actividad principal
              <b>OrbotMainActivity</b> permanece intacto y solo se actualiza
              cuando se clickea para deterner el servicio o reiniciarlo por
              click del usuario en los siguientes métodos.
            </p>
            <figure class="figure">
              <img
                class="device-screenshot"
                src="img/screenshots/connection1.png"
                alt="Image View 1"
              />
              <figcaption class="figure-caption text-center">
                Indicador de conexión con la imagen principal y respuesta a
                eventos
              </figcaption>
            </figure>
            <p>
              Cerramos la aplicación varia veces sin obtener resultado.
              Únicamente conseguimos retomar la funcionalidad completa de la
              aplicación reiniciando el celular. En cuanto a este problema, hace
              falta que se implementen mensajes informativos que indiquen al
              usuario porque no se puede establecer conexion con los servicios y
              cual podria ser el problema. Para evitar mensajes no informativos
              se debería tener en cuenta que Orbot ofrecen un conjunto de
              modificaciones que pueden afectar la conexión.
            </p>
            <p>
              La validación del estado de la conexión en el telefono es
              inexistente puesto que nunca se solicita en el componente visual
              verificar si hay conexión a internet para notificar al usuario.
              Esto lo podemos evidenciar en la actividad principal debido a que
              nunca se invoca el <b>ConnectivityManager</b>, ni siquiera se
              importa el paquete
            </p>
            <figure class="figure">
              <img
                class="device-screenshot"
                src="img/screenshots/connection2.png"
                alt="Image View 2"
              />
              <figcaption class="figure-caption text-center">
                Paquetes importados del core de android en
                <b>OrbotMainActivity</b>
              </figcaption>
            </figure>
          </card>
        </div>
        <div class="col-md-10 offset-md-1 col-xl-6 offset-xl-0">
          <card class="content">
            <div class="table-responsive-sm">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Escenario</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sin permiso de almacenamiento</td>
                    <td>Sin errores</td>
                  </tr>
                  <tr>
                    <td>Sin acceso a notificaciones</td>
                    <td>Sin errores</td>
                  </tr>
                  <tr>
                    <td>
                      Borrado de cache y almacenamiento durante la ejecución
                    </td>
                    <td>
                      Sin errores <br />
                      Vuelve a mostrar la pantalla inicio por primera vez.
                    </td>
                  </tr>
                  <tr>
                    <td>Sin acceso a internet</td>
                    <td>
                      ( Stuck Progress ) Permanece en estado de carga infinito
                      incluso al cerrar y volver a abrir la aplicación con
                      accesos a internet.
                    </td>
                  </tr>
                  <tr>
                    <td>Cierre inesperado de la aplicación (Kill)</td>
                    <td>Sin errores</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Inconsistencia de conectividad eventual</h1>
              </div>
            </div>
            <div class="gifs-section">
              <div class="gif-screenshot">
                <img
                  src="img/eventual_conn/normal.gif "
                  alt="Estado normal"
                  :class="gifSelected !== 0 ? 'inactive' : ''"
                />
                <figcaption v-if="gifSelected === 0">
                  Ejecución en condiciones normales con acceso a Internet
                </figcaption>
                <a
                  v-if="gifSelected !== 0"
                  class="btn btn-sm btn-secondary"
                  @click="() => changeSelected(0)"
                  >Normal</a
                >
              </div>
              <div class="gif-screenshot">
                <img
                  src="img/eventual_conn/airplane_mode.gif"
                  alt="Modo Avion"
                  :class="gifSelected !== 1 ? 'inactive' : ''"
                />
                <figcaption v-if="gifSelected === 1">
                  Intento de conexión a los servicios de tor sin acceso a
                  Internet.
                </figcaption>
                <a
                  v-if="gifSelected !== 1"
                  class="btn btn-sm btn-secondary"
                  @click="() => changeSelected(1)"
                  >Sin acceso a internet</a
                >
              </div>
              <div class="gif-screenshot">
                <img
                  src="img/eventual_conn/internet_back.gif"
                  alt="Internet de vuelta"
                  :class="gifSelected !== 2 ? 'inactive' : ''"
                />
                <figcaption v-if="gifSelected === 2">
                  Intento de conexión a los servicios de tor reactivando el
                  acceso a Internet
                </figcaption>
                <a
                  v-if="gifSelected !== 2"
                  class="btn btn-sm btn-secondary"
                  @click="() => changeSelected(2)"
                  >Acceso a internet de vuelta</a
                >
              </div>
            </div>

            <p>
              Revisando la implementación de la actividad principal de orbot
              encontramos que hay un método encargado de recibir los mensajes de
              estado de la conexión que retorna a librería externa de tor al
              intentar conectar con los servicios. En este encontramos que al
              MainActivity evalúa únicamente 4 condiciones entre las cuales no
              se encuentra ningún estado de error de conectividad. Este podría
              ser motivo por el cual la aplicación persiste en el estado de
              “Staring” que corresponde a los tres puntos que aparecen en el
              botón. En la sección de Bridges, también encontramos que algunos
              de esos puentes retornan mensajes de error eventualmente y en
              general puede que estos errores no estén conectados con la
              actividad principal para informar al usuario que ha fallado la
              conexión con el puente y por eso no se pudo realizar la conexión a
              los servicios de Tor.
            </p>
            <figure>
              <img src="img/code/eventual.png" alt="eventual" />
              <figcaption>
                Fragmento de código obtenido del siguiente
                <a
                  href="https://github.com/guardianproject/orbot/blob/a608a964964506e52878ef55e5b500fd54af90fb/app/src/main/java/org/torproject/android/OrbotMainActivity.java"
                >
                  archivo
                </a>
              </figcaption>
            </figure>
            <div class="screenshot">
              <img
                src="img/eventual_conn/bridge_failed.jpg"
                alt="Fallo bride"
              />
              <figcaption>
                Mensaje de error en la pantalla de puentes al intentar conectar
                con un puente. Este mensaje no siempre aparece.
              </figcaption>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gifSelected: 1
    };
  },
  methods: {
    changeSelected: function(index) {
      this.gifSelected = index;
    }
  }
};
</script>