<template>
  <div>
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-lg-8">
          <google-play-card />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GooglePlayCard from "@/components/GooglePlayCard";
export default {
  name: "tables",
  components: {
    GooglePlayCard
  }
};
</script>