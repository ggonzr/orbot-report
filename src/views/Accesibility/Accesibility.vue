<template>
  <div class="accesibility">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-12">
          <h2 class="header-title">Matices de colores</h2>
        </div>
        <div class="col-lg-3">
          <div class="palette-card palette-card-1"><p>#3F2B50</p></div>
        </div>
        <div class="col-lg-2 ">
          <div class="palette-card palette-card-2"><p>#4A3659</p></div>
        </div>
        <div class="col-lg-2 ">
          <div class="palette-card palette-card-3"><p>#6F617A</p></div>
        </div>

        <div class="col-lg-2 ">
          <div class="palette-card palette-card-4"><p>#AC9CB9</p></div>
        </div>
        <div class="col-lg-3 ">
          <div class="palette-card palette-card-5"><p>#C3B5CE</p></div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Accesibilidad</h1>
              </div>
            </div>
            <p>
              Durante el análisis encontramos que la vista principal de la
              aplicación utiliza diferentes matices del color morado que podrían
              dificultar la visualización de las diferentes secciones. Sin
              embargo el color del texto no presenta muchos problemas de lectura
              evaluando los diferentes tipos de discapacidades visuales. Uno de
              los escenarios más afectados es el caso de pérdida de visión
              moderada en el cual se dificulta leer algunos textos o botones.
              Fuera de la configuración de la aplicación, el botón principal de
              iniciar los servicios de Tor es bastante grande y distinguible al
              contraste de color que tiene al estar activo o inactivo es
              notorio.
            </p>
            <div class="accesibility-screenshots">
              <form>
                <h2>Discapacidades visuales más comunes</h2>
                <p>Seleccione una de las opciones</p>
                <template v-for="(visual, index) in visualVersion">
                  <input
                    :key="visual.name + 'input'"
                    type="radio"
                    :id="visual.name"
                    :value="index"
                    v-model="empathySelected"
                  />
                  <label :key="visual.name + 'label'" :for="visual.name">
                    {{ visual.name }}</label
                  >
                  <br :key="visual.name + 'br'" />
                </template>
              </form>
              <div class="screenshot">
                <img
                  :src="visualVersion[empathySelected].path"
                  :alt="visualVersion[empathySelected].name"
                />
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import screenshots from "@/data/screenshots.json";
export default {
  data() {
    return {
      visualVersion: screenshots.accesibility,
      empathySelected: 0
    };
  },
  components: {}
};
</script>