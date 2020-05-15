<template>
  <div class="permissions">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>INTERNET</h1>
              </div>
            </div>
            <p><code>android.permission.INTERNET</code></p>
            <p class="api-level">Implementado en el API <b>nivel 1</b></p>
            <p>Permite que las aplicaciones abran conexiones de red.</p>
            <p class="protection">Nivel de protección: <b>normal</b></p>
          </card>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>FOREGROUND_SERVICE</h1>
              </div>
            </div>
            <p><code>android.permission.FOREGROUND_SERVICE</code></p>
            <p class="api-level">Implementado en el API <b>nivel 28</b></p>
            <p>
              Permite que una aplicación normal use
              <b>Service.startForeground</b> <br />
              Se utiliza startForeground si la interrupción de el servicio
              perjudica al usuario.
              <br />
              Orbot sigue la recomendación de google de mostrar una notificación
              siempre que la aplicación se esté ejecutando.
            </p>
            <p class="protection">Nivel de protección: <b>normal</b></p>
          </card>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>ACCESS_NETWORK_STATE</h1>
              </div>
            </div>
            <p><code>android.permission.ACCESS_NETWORK_STATE</code></p>
            <p class="api-level">Implementado en el API <b>nivel 1</b></p>
            <p>
              Permite que las aplicaciones accedan a información sobre redes.
            </p>
            <p class="protection">Nivel de protección: <b>normal</b></p>
          </card>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-md-7">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</h1>
              </div>
            </div>
            <p>
              <code
                >android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</code
              >
            </p>
            <p class="api-level">Implementado en el API <b>nivel 23</b></p>
            <p>
              Permiso que debe tener una aplicación para usar la
              Configuración.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS.<br />
              La mayoría de las aplicaciones no deberían usar esto.<br />
              El API de Android ofrece muchas facilidades para que las
              aplicaciones funcionen correctamente en los diversos modos de
              ahorro de energía. Esto es solo para aplicaciones inusuales que
              necesitan controlar profundamente su propia ejecución, a costa de
              la vida útil de la batería del usuario.
            </p>
            <p class="protection">Nivel de protección: <b>normal</b></p>
          </card>
        </div>

        <div class="col-12 col-md-5">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>RECEIVE_BOOT_COMPLETED</h1>
              </div>
            </div>
            <p><code>android.permission.RECEIVE_BOOT_COMPLETED</code></p>
            <p class="api-level">Implementado en el API <b>nivel 1</b></p>
            <p>
              Permite que una aplicación reciba el Intent.ACTION_BOOT_COMPLETED
              que se transmite una vez que el sistema finaliza el arranque.
              <br />
              Si no solicita este permiso, no recibirá la transmisión en ese
              momento. <br />
              Aunque tener este permiso no tiene implicaciones de seguridad,
              puede tener un impacto negativo en la experiencia del usuario al
              aumentar la cantidad de tiempo que tarda el sistema en iniciarse y
              permitiendo que las aplicaciones se ejecuten sin que el usuario
              las conozca. <br />
              Se debe declarar explícitamente su uso de esta función para que
              sea visible para el usuario.
            </p>
            <p class="protection">Nivel de protección: <b>normal</b></p>
          </card>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-md-6">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>WRITE_EXTERNAL_STORAGE</h1>
              </div>
            </div>
            <p><code>android.permission.WRITE_EXTERNAL_STORAGE</code></p>
            <p class="api-level">Implementado en el API <b>nivel 4</b></p>
            <p>
              Permite que una aplicación escriba en almacenamiento externo.
              <br />
              A partir del API nivel 19, este permiso no es necesario para leer
              / escribir archivos en los directorios específicos de la
              aplicación devueltos por Context.getExternalFilesDir(String) y
              Context.getExternalCacheDir().
            </p>
            <p class="protection">
              Nivel de protección: <b class="danger">peligroso</b>
            </p>
          </card>
        </div>

        <div class="col-12 col-md-6">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>READ_EXTERNAL_STORAGE</h1>
              </div>
            </div>
            <p><code>android.permission.READ_EXTERNAL_STORAGE</code></p>
            <p class="api-level">Implementado en el API <b>nivel 16</b></p>
            <p>
              Cualquier aplicación que declare el permiso WRITE_EXTERNAL_STORAGE
              recibe implícitamente este permiso. <br />
              Este es un permiso restringido suavemente que no puede ser
              retenido por una aplicación completamente hasta que el instalador
              en la lista blanca de registro lo autorice. Específicamente, si el
              permiso está incluido en la lista blanca, la aplicación puede
              acceder al almacenamiento externo y las colecciones de medios
              visuales y auditivos.
            </p>
            <p class="protection">
              Nivel de protección: <b class="danger">peligroso</b>
            </p>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>