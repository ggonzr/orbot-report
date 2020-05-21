<template>
  <div class="performance">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <base-button
          @click="selected = 1"
          :type="selected === 1 ? 'secondary' : 'default'"
        >
          Tamaño
        </base-button>
        <base-button
          @click="selected = 2"
          :type="selected === 2 ? 'secondary' : 'default'"
        >
          Caso 1
        </base-button>
        <base-button
          @click="selected = 3"
          :type="selected === 3 ? 'secondary' : 'default'"
        >
          Caso 2
        </base-button>
        <base-button
          @click="selected = 4"
          :type="selected === 4 ? 'secondary' : 'default'"
        >
          Caso 3
        </base-button>
        <base-button
          @click="selected = 5"
          :type="selected === 5 ? 'secondary' : 'default'"
        >
          Caso 4
        </base-button>
        <base-button
          @click="selected = 6"
          :type="selected === 6 ? 'secondary' : 'default'"
        >
          GPU
        </base-button>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <case1 v-if="selected === 2" :callback="changeView"/>
      <case2 v-if="selected === 3" />
      <case3 v-if="selected === 4" />
      <case4 v-if="selected === 5" />
      <over-draw v-if="selected === 6" />
      <div class="row" v-if="selected === 1">
        <div class="col-xl-6">
          <size-files-table />
        </div>
        <div class="col-xl-6 mb-5 mb-xl-0">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Tamaño</h1>
              </div>
            </div>
            <p>
              El tamaño de la aplicación es óptimo llegando a tener un tamaño
              total de 10 MB. De este archivo más de la mitad de su tamaño
              corresponde a las librerías binarias en C que utiliza la
              aplicación para conectarse al sistema Tor con un tamaño total de
              5.2 MB. El código de la aplicación compilado en el archivo
              classes.dex ocupa 1.4 MB, alrededor del 10% del espacio solo
              corresponde al código lo cual denota que en el uso de clases se
              encuentra optimizado. Para culminar, en la carpeta assets se
              incluye las bases de datos geoip y geoip6 que incluye las
              geolocalizaciones de los servidores de la red en un formato
              cifrado.
            </p>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Case1 from "./Case1";
import Case2 from "./Case2";
import Case3 from "./Case3";
import Case4 from "./Case4";
import OverDraw from "./OverDraw";
import SizeFilesTable from "./SizeFilesTable";
export default {
  name: "repo",
  components: {
    Case1,
    Case2,
    Case3,
    Case4,
    SizeFilesTable,
    OverDraw
  },
  data() {
    return {
      selected: 1
    };
  },
  methods: {
    changeView: function (view) {
      this.selected = view;
    }
  }
};
</script>