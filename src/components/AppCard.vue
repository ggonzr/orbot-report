<template>
  <div class="app-card">
    <div class="app-image">
      <img :src="app.image" :alt="app.title" />
    </div>
    <div class="app-info">
      <h3>{{ app.title }}</h3>
      <p class="owner">{{ app.owner }}</p>
      <p class="description">{{ app.description }}</p>

      <div class="rate">
        <i :class="'fas fa-star ' + (app.rate < 1 ? 'inactive' : '')"></i>
        <i :class="'fas fa-star ' + (app.rate < 2 ? 'inactive' : '')"></i>
        <i :class="'fas fa-star ' + (app.rate < 3 ? 'inactive' : '')"></i>
        <i :class="'fas fa-star ' + (app.rate < 4 ? 'inactive' : '')"></i>
        <i :class="'fas fa-star ' + (app.rate < 5 ? 'inactive' : '')"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["app"]
};
</script>

<style>
</style>