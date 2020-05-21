<template>
  <section class="google-card">
    <header class="header">
      <div class="image">
        <img src="img/logo.png" alt="orbot logo" />
      </div>
      <div class="app-info">
        <h1 class="app-title">Orbot: Tor for Android</h1>
        <div class="links-stars">
          <div class="links">
            <a
              href="https://play.google.com/store/apps/developer?id=The+Tor+Project"
              target="_blank"
              >The Tor Project</a
            >
            <a
              href="https://play.google.com/store/apps/category/COMMUNICATION"
              target="_blank"
              >Communication</a
            >
          </div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star inactive"></i>
            166,184
            <i class="fas fa-user"></i>
          </div>
        </div>
        <div class="everyone">
          <img
            src="https://lh3.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i=s14-rw"
            alt="Everyone"
          />
          <p>Para todos</p>
        </div>
        <p class="compatibility">
          <i class="fas fa-info-circle"></i> Esta aplicación es compatible con
          tu dispositivo.
        </p>
        <div class="install-button">
          <a
            class="i-button"
            href="https://play.google.com/store/apps/details?id=org.torproject.android&hl=es"
            target="_blank"
          >
            Instalar
          </a>
        </div>
      </div>
    </header>
    <div class="screenshots">
      <agile
        class="custom-agile"
        :slidesToShow="2"
        :dots="false"
        autoplay
        :infinite="false"
      >
        <div
          class="slide agile-slide"
          :key="screen.name"
          v-for="screen in screenshots"
        >
          <img :src="screen.path" :alt="screen.name" />
          <figcaption>{{ screen.name }}</figcaption>
        </div>
        <template slot="prevButton"
          ><i class="fas fa-chevron-left"></i
        ></template>
        <template slot="nextButton"
          ><i class="fas fa-chevron-right"></i
        ></template>
      </agile>
    </div>
    <div class="content">
      <p>
        Orbot es una aplicación de proxy libre que da la posibilidad a otras
        aplicaciones de usar Internet de forma más segura. Orbot usa Tor para
        cifrar su tráfico de Internet y luego lo esconde enviándolo a través de
        una serie de ordenadores alrededor del mundo.
      </p>
      <ul>
        <li>
          Tor es software libre y es una red abierta que le ayuda a defenderse
          contra una forma de vigilancia de red que amenaza la libertad y
          privacidad personas, la realización de negocios, actividades y
          relaciones confidenciales, y la seguridad de los estados, conocida
          como análisis de tráfico.
        </li>
        <li>
          Orbot es la única aplicación que crea una conexión verdaderamente
          privada a Internet.
        </li>
        <li>
          Cualquier aplicación instalada puede usar Tor si tiene funciones de
          proxy. Use Orbot con Twitter, o pruebe la búsqueda web privada con
          DuckDuckGo.
        </li>
        <li>
          Orbot pude ser configurado para intermediar (`proxy`) de forma
          transparente todo su tráfico de Internet a través de Tor. También
          puede escoger qué aplicaciones específicas quiere usar a través de
          Tor.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";
import screenshot from "@/data/screenshots.json";
export default {
  data() {
    return {
      screenshots: screenshot.screenshots
    };
  },
  components: {
    agile: VueAgile
  }
};
</script>



