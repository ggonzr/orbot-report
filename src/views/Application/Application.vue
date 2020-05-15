<template>
  <div>
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-lg-8">
          <google-play-card />
        </div>
        <div class="col-12 col-lg-4">
          <h3 class="similar-apps-title">Aplicaciones Similares</h3>
          <div class="similar-apps">
            <app-card :app="app" :key="app.title" v-for="app in apps.apps" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GooglePlayCard from "@/components/GooglePlayCard";
import AppCard from "@/components/AppCard";
import apps from "@/data/apps.json";

export default {
  name: "tables",
  data() {
    return {
      apps
    };
  },
  components: {
    GooglePlayCard,
    AppCard
  }
};
</script>