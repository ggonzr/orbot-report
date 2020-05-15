<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ year }} Hecho en Vue
        </div>
      </div>
      <div class="col-lg-6">
        <ul
          class="nav nav-footer justify-content-center justify-content-lg-end"
        >
          <li class="nav-item">
            <a href="https://vuejs.org/" class="nav-link" target="_blank"
              >Vue JS</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com"
              class="nav-link"
              target="_blank"
              >Creative Tim</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://github.com/srodriguez20/orbot-report"
              class="nav-link"
              target="_blank"
              >Repositorio</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/license"
              class="nav-link"
              target="_blank"
              >Licencia</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
