<template>
  <section class="repoDescription">
    <div class="repo-image">
      <img
        src="https://guardianproject.info/GP_Logo_with_text.png"
        :alt="result.login"
      />
    </div>
    <div class="repo-details">
      <h1>{{ result.name }}</h1>
      <div>
        <strong>Dueño: </strong>
        Guardian Project
      </div>
      <div>
        <strong>Descripción: </strong>
        {{ result.description }}
      </div>
      <div>
        <strong>Fecha de creación: </strong>
        {{
          result.created_at
            .substr(0, 10)
            .split("-")
            .reverse()
            .join("/")
        }}
      </div>
      <div>
        <strong>Ultima actualización: </strong>
        {{
          result.updated_at
            .substr(0, 10)
            .split("-")
            .reverse()
            .join("/")
        }}
      </div>
      <div>
        <strong>Licencia: </strong>
        {{ result.license.name }}
      </div>
      <div>
        <strong>URL: </strong>
        <a href="https://github.com/guardianproject/orbot" target="_blank">
          https://github.com/guardianproject/orbot
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["result"]
};
</script>

<style>
</style>