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
              conectarse a los servicios de tor.
            </p>
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
                <p v-if="gifSelected === 0">Normal</p>
                <img
                  src="img/eventual_conn/normal.gif "
                  alt="Estado normal"
                  :class="gifSelected !== 0 ? 'inactive' : ''"
                />
                <a
                  v-if="gifSelected !== 0"
                  class="btn btn-sm btn-secondary"
                  @click="() => changeSelected(0)"
                  >Normal</a
                >
              </div>
              <div class="gif-screenshot">
                <p v-if="gifSelected === 1">Sin acceso a internet</p>
                <img
                  src="img/eventual_conn/airplane_mode.gif"
                  alt="Modo Avion"
                  :class="gifSelected !== 1 ? 'inactive' : ''"
                />
                <a
                  v-if="gifSelected !== 1"
                  class="btn btn-sm btn-secondary"
                  @click="() => changeSelected(1)"
                  >Sin acceso a internet</a
                >
              </div>
              <div class="gif-screenshot">
                <p v-if="gifSelected === 2">Acceso a internet de vuelta</p>
                <img
                  src="img/eventual_conn/internet_back.gif"
                  alt="Internet de vuelta"
                  :class="gifSelected !== 2 ? 'inactive' : ''"
                />
                <a
                  v-if="gifSelected !== 2"
                  class="btn btn-sm btn-secondary"
                  @click="() => changeSelected(2)"
                  >Acceso a internet de vuelta</a
                >
              </div>
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