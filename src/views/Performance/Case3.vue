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
          la aplicación en general. Un patrón anómalo en esta actividad se debe
          a la renderización del slider, en caso de que desplacemos la lista de
          elementos al inicio o al final de manera inmediata, el consumo de
          memoria aumentará hasta que la aplicación falle.
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
          ubicándose alrededor de un 5%. En el momento en el cual desplazamos la
          lista de elementos al inicio y al final de manera inmediata, el
          consumo de CPU aumenta considerablemente hasta situarse en 15%. La
          mayor carga es procesada por el Thread project.android
        </p>
        <img src="img/performance/cpu3.png" alt="cpu1" />
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
        <img src="img/performance/memory3.png" alt="cpu1" />
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
        <img src="img/performance/network3.png" alt="cpu1" />
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
          consumo aumenta de manera considerable en el momento en cual
          desplazamos inmediatamente hacia el inicio y hacia el final la lista
          de configuraciones
        </p>
        <img src="img/performance/energy3.png" alt="cpu1" />
      </card>
    </div>
    <div class="col-12 col-md-8 offset-md-2 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>
              Codigo
            </h1>
          </div>
        </div>
        <p>
          Buscamos la implementación de esta sección de configuraciones para
          entender un poco más y encontramos que esta sección está implementada
          en su totalidad utilizando algunas clases del paquete and
          android.preferences. Esto les permite declara en un archivo xml con el
          listado de preferencias y asignarlo directamente a la clase
          SettingsPreferences que hereda de PreferenceActivity (clase
          perteneciente al paquete android.preferences).
        </p>
        <figure>
          <img src="img/code/prefs.png" alt="prefs snippet" />

          <figcaption>
            Archivo con listado de preferencias agrupadas por categoría.
            Fragmento de código obtenido del siguiente
            <a
              href="https://github.com/guardianproject/orbot/blob/master/app/src/main/res/xml/preferences.xml"
            >
              archivo
            </a>
          </figcaption>
        </figure>
        <p>
          Esta implementación se sale de las manos de los desarrolladores ya que
          depende de la implementación de android, sin embargo encontramos que
          actualmente todos las clases pertenecientes a android.preferences se
          encuentran deprecadas en este momento. En su lugar, se recomienda
          utilizar la librería Preferences de AndroidX la cual asegura tener un
          comportamiento consistente en la mayoría de dispositivos.
        </p>
        <figure>
          <img src="img/code/settings.png" alt="settings snippet" />

          <figcaption>
            Clase heredada de PreferenceActivity. Fragmento de código obtenido
            del siguiente
            <a
              href="https://github.com/guardianproject/orbot/blob/master/app/src/main/java/org/torproject/android/settings/SettingsPreferences.java"
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