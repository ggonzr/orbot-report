<template>
  <div class="row overdraw">
    <div class="col-md-6 mt-5">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>Hardware Accelerated</h1>
          </div>
        </div>
        <p>
          Por defecto la aplicación está configurada para no habilitar las
          funcionalidades de hadwareAcceletation lo cual se declara en el
          AndroidManifes.xml.
        </p>
        <code>android:hardwareAccelerated="false"</code>
        <p>
          Al no tener habilitada esta opción, no es posible utilizar las
          opciones de desarrollador de GPU Overdraw y la aplicación no muestra
          ningún recuadro al abrirla con esta opción activa. Sin embargo, solo
          hace falta cambiar el manifest y construir de nuevo la aplicación para
          poder obtener las siguientes visualizaciones.
        </p>
      </card>
    </div>
    <div class="col-xl-6 mt-5 ">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>Pagina Onbording</h1>
          </div>
        </div>
        <p>
          Al analizar el comportamiento de la aplicación respuesto al uso de GPU
          pudimo observar unos comportamientos extraños. En la página de
          onboarding al usuario, encontramos que al hacer tap en el botón de
          abajo, ese parece que solo se mantuviera presionado ocasionando que
          haya un overdraw mayor a 4 en esa zona.
        </p>
        <div class="landing-overdraw">
          <img src="img/gpu/landing1.jpg" alt="landing1" />
          <img src="img/gpu/landing2.jpg" alt="landing2" />
        </div>
      </card>
    </div>
    <div class="col-xl-6 mt-5 ">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>Rendering y OverDraw</h1>
          </div>
        </div>
        <p>
          Uno de lo comportamientos que mas no llamo la atencion es que en en la
          pantalla principal, la aplicación está constantemente renderizando
          debido a la animación que tiene el boton principal. Este botón tiene
          un efecto de onda que provoca un uso relativamente bajo pero constante
          del GPU.
        </p>
        <div class="overdraw-actions">
          <base-button type="success" @click="overdraw = !overdraw">
            {{ overdraw ? "Ver Rendering" : " Ver OverDraw" }}
          </base-button>
        </div>
        <div class="overdraw-gif">
          <img
            :src="overdraw ? 'img/gpu/overdraw.gif' : 'img/gpu/rendering.gif'"
            alt="overdraw"
          />
        </div>
        <p>
          Ese comportamiento se debe a que debajo del botón de inicio se están
          utilizando la librería <b>Pulsator4Droid</b> la cual es iniciada si
          los servicios de tor no están iniciados y es pausada cuando se
          inician. Esta animación se ejecuta constantemente en lo que genera que
          constantemente se renderiza la vista principal.
        </p>
        <figure>
          <img src="img/code/pulsator.png" alt="pulsator snippet" />

          <figcaption>
            Fragmento de código obtenido del siguiente
            <a
              href="https://github.com/guardianproject/orbot/blob/a608a964964506e52878ef55e5b500fd54af90fb/app/src/main/java/org/torproject/android/OrbotMainActivity.java"
            >
              archivo
            </a>
          </figcaption>
        </figure>
        <div class="overdraw-gif">
          <img
            src="https://raw.githubusercontent.com/booncol/Pulsator4Droid/master/demo.gif"
            alt="pulsator example"
          />
        </div>
      </card>
    </div>
    <div class="col-xl-6 mt-5 ">
      <card class="content">
        <div slot="header" class="row align-items-center">
          <div class="col">
            <h1>Scroll View</h1>
          </div>
        </div>
        <p>
          Finalmente, encontramos que una de las vistas que más frames renderiza
          y que más impacto tiene sobre el GPU es la vista de selección de
          aplicaciones para la VPN. En esta se puede ver como crecen en menos de
          15s las gráficas de perfil de renderizado gráfico al hacer un scroll
          inmediato sobre las aplicaciones.
        </p>
        <div class="landing-overdraw">
          <img src="img/gpu/apps1.jpg" alt="apps1" />
          <img src="img/gpu/apps2.jpg" alt="apps2" />
        </div>
        <p>
          Revisando la implementación de esta vista encontramos que fue creada
          utilizando el componente GridView. Para agregar las aplicaciones a
          esta lista, utiliza el patrón adaptado, en el cual por cada aplicación
          encontrada crean una instancia del objeto ListEntry que contiene a su
          vez un TextView, un CheckBox y un Image View.
        </p>
        <figure>
          <img src="img/code/list_entry.png" alt="pulsator snippet" />
        </figure>
        <p>
          Este puede ser el motivo de que se vean estos picos en la gráfica de
          renderizado ya que al hacer scroll de manera hasta llegar a el final
          de la lista, se debe renderizar un mayor número de ListEntry cada uno
          con la imagen, título y checkbox dependiendo de la cantidad de
          aplicaciones que se tengan instaladas en el dispositivo.
        </p>
        <figure>
          <img src="img/code/grid_view.png" alt="pulsator snippet" />

          <figcaption>
            Fragmento de código obtenido del siguiente
            <a
              href="https://github.com/guardianproject/orbot/blob/master/app/src/main/java/org/torproject/android/ui/AppManagerActivity.java"
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
export default {
  data() {
    return {
      overdraw: true
    };
  }
};
</script>

<style>
</style>