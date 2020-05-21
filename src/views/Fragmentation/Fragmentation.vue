<template>
  <div class="fragmentation">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Fragmentación</h1>
              </div>
            </div>
            <p>
              Probando en diferentes dispositivos de distintos tamaños
              encontramos que la aplicación únicamente tiene un breakpoint. la
              aplicación tiene el misma distribución de componentes visuales sin
              importar el tamaño del dispositivo. Durante el análisis probamos
              en los siguientes dispositivos.
              <br />
              Durante el análisis probamos en los siguientes dispositivos
            </p>
            <ul>
              <li>Galaxy S10e - Android 10</li>
              <li>Pixel 3xl - Android 9 (BrowserStack)</li>
              <li>Galaxy Tap (BrowserStack)</li>
              <li>Galaxy A10e - Android 9 (Kobiton)</li>
              <li>Pixel 3a - Android 10 (Kobiton)</li>
              <li>Xperia 10 plus - Android 9 (Kobiton)</li>
              <li>Pixel C - Android 8.1 (Kobiton)</li>
            </ul>
            <div class="screenshot-dropdowns">
              <select class="form-control" @change="changeDevice">
                <option
                  :key="device.device"
                  v-for="(device, index) in otherDevices"
                  :value="index"
                  >{{ device.device }}</option
                >
                <option value="-1">Galaxy S10e</option>
              </select>

              <select class="form-control" v-model="screenshotSelected">
                <option
                  :key="screenshot.name"
                  v-for="(screenshot, index) in screenshots"
                  :value="index"
                  >{{ screenshot.name }}</option
                >
              </select>
            </div>
            <div class="image-wrapper">
              <img
                class="device-screenshot"
                :src="screenshots[screenshotSelected].path"
                :alt="screenshots[screenshotSelected].name"
              />
              <figcaption>
                {{ screenshots[screenshotSelected].name }}
              </figcaption>
              <div class="screenshot-actions">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="screenshotSelected--"
                  :disabled="screenshotSelected === 0"
                >
                  Anterior</button
                ><button
                  type="button"
                  class="btn btn-primary"
                  @click="screenshotSelected++"
                  :disabled="screenshotSelected + 1 >= screenshots.length"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </card>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 col-md-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Casos Particulares</h1>
              </div>
            </div>
            <p>
              Durante las pruebas en estos dispositivos únicamente encontramos
              problemas de visualización en el Google Pixel C en modo landscape
              en el que algunos botones tienen overflow de texto debido a que
              los botones tienen un tamaño de alto fijo. Esto se puede ven en el
              archivo custom slide big text.xml en donde definen el tamaño fijo
              tanto del ancho como del alto.
            </p>
            <figure>
              <img src="img/code/button.png" alt="button snippet" />
              <figcaption>
                Fragmento de código obtenido del siguiente
                <a
                  href="https://github.com/guardianproject/orbot/blob/a608a964964506e52878ef55e5b500fd54af90fb/app/src/main/res/layout/custom_slide_big_text.xml"
                >
                  archivo
                </a>
              </figcaption>
            </figure>
            <p>
              Adicionalmente, el dropdown de selección de la zona que a pesar de
              tener suficiente espacio, abarca una pequeña zona y no muestra los
              nombres completos.
            </p>
            <div class="image-wrapper">
              <img
                class="device-screenshot"
                src="img/screenshots/other_devices/pixel_c2.PNG"
                alt="Pixel C style error"
              />
              <figcaption>
                Google Pixel C Pantalla inicial paso 4 con errores de estilos en
                el botón en orientación landscape
              </figcaption>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueEmbedGist from "vue-embed-gist";
import screenshots from "@/data/screenshots.json";
export default {
  components: {
    VueEmbedGist
  },
  data() {
    return {
      mainDevices: screenshots.screenshots,
      otherDevices: screenshots.otherDevices,
      deviceSelected: 0,
      screenshotSelected: 0,
      loading: false
    };
  },
  methods: {
    changeDevice: function(ev) {
      this.deviceSelected = ev.target.value;
      this.screenshotSelected = 0;
    }
  },
  computed: {
    screenshots: function() {
      return this.deviceSelected < 0
        ? this.mainDevices
        : this.otherDevices[this.deviceSelected].screenshots;
    }
  }
};
</script>