<template>
  <div class="row overdraw">
    <div class="col-md-8 offset-md-2">
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
          aplicaciones para la VPN.  En esta se puede ver como crecen en menos de 
          15s las gráficas de perfil de renderizado gráfico al hacer un scroll inmediato
          sobre las aplicaciones.
        </p>
        <div class="landing-overdraw">
          <img src="img/gpu/apps1.jpg" alt="apps1" />
          <img src="img/gpu/apps2.jpg" alt="apps2" />
        </div>
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