<template>
  <div class="repo">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Estrellas"
            type="gradient-red"
            :sub-title="result === null ? '...' : '' + result.stargazers_count"
            icon="fas fa-star"
            class="mb-4 mb-xl-0"
          />
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Forks"
            type="gradient-orange"
            :sub-title="result === null ? '...' : '' + result.forks_count"
            icon="fas fa-code-branch"
            class="mb-4 mb-xl-0"
          />
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Vistas"
            type="gradient-green"
            :sub-title="result === null ? '...' : '' + result.subscribers_count"
            icon="fas fa-binoculars"
            class="mb-4 mb-xl-0"
          />
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Open Issues"
            type="gradient-info"
            :sub-title="result === null ? '...' : '' + result.open_issues_count"
            icon="fas fa-exclamation-triangle"
            class="mb-4 mb-xl-0"
          />
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2">
          <repo-description v-if="result !== null" :result="result" />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12">
          <card>
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Estadísticas del repositorio</h1>
              </div>
            </div>
            <iframe
              width="100%"
              height="700"
              src="https://app.powerbi.com/reportEmbed?reportId=e4e8f95b-33df-4ecc-be32-de5d5b6641d3&autoAuth=true&ctid=fabd047c-ff48-492a-8bbb-8f98b9fb9cca&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
              frameborder="0"
              allowFullScreen="true"
            ></iframe>
            <p>
              Para poder acceder al dashboard hace falta acceder a Microsoft
              Power BI.
            </p>
            <base-button @click="dashboard = !dashboard" class="button">
              {{
                dashboard ? "Ocultar Imagen Dashboard" : "Ver Imagen Dashboard"
              }}
            </base-button>
            <agile
              v-if="dashboard"
              class="custom-agile"
              :dots="false"
              :infinite="false"
              autoplay
            >
              <div class="slide fluid-agile-slide">
                <img
                  class="dashboard"
                  src="img/screenshots/dashboard.PNG"
                  alt="dashboard"
                />
              </div>
              <div class="slide fluid-agile-slide">
                <img
                  class="dashboard"
                  src="img/screenshots/dashboard2.PNG"
                  alt="dashboard"
                />
              </div>
              <template slot="prevButton"
                ><i class="fas fa-chevron-left"></i
              ></template>
              <template slot="nextButton"
                ><i class="fas fa-chevron-right"></i
              ></template>
            </agile>
          </card>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2">
          <card
            ><div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Análisis del repositorio</h1>
              </div>
            </div>
            <p>
              Utilizando el API de github y la herramienta Power BI de Microsoft
              se pudieron obtener algunos datos clave y el dashboard que se
              muestra anteriormente. <br />
              En la pestaña “Top 100 Contributors” se puede ver que este
              proyecto inició en 2014 y tuvo su mayor porcentaje de aportes
              entre finales del 2014 e inicios de 2016. Esto podría indicar que
              el código ya tiene un nivel alto de madurez, por lo menos respecto
              a la funcionalidad principal de conectar con los servicios de tor.
            </p>
            <p>
              En la pestaña de Issues se puede ver que al momento tiene
              alrededor de 145 issues pendientes por resolver, estos Issues
              están constituidos por nuevas funcionalidades pero especialmente
              por bug pendientes por resolver.Además de esto, en promedio la
              comunidad tiene la capacidad de cerrar 43 issues por año.
            </p>
            <p>
              A pesar de que ya no se realizan tantas contribuciones al proyecto
              como en 2015, aún se realizan en alrededor de 40 pull request por
              año al proyecto. Actualmente no se realizan grandes cambios en la
              aplicación pero aún recibe soporte de la comunidad.
            </p>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueAgile } from "vue-agile";
import RepoDescription from "./RepoDescription";
export default {
  name: "repo",
  components: { agile: VueAgile, RepoDescription },
  data() {
    return {
      result: null,
      dashboard: false
    };
  },
  mounted() {
    this.getGithubData();
  },
  methods: {
    getGithubData: function() {
      const owner = "guardianproject";
      const repo = "orbot";
      let individualRepoApiCall = fetch(
        `https://api.github.com/repos/${owner}/${repo}`
      );

      Promise.all([individualRepoApiCall])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(finalVals => {
          this.result = finalVals[0];
        })
        .catch(error => {
          this.setState({ loading: false });
          throw error;
        });
    }
  }
};
</script>