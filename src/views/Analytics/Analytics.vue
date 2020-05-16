<template>
  <div class="analytics">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>No hay eventos de Analitica o Crashalitica</h1>
              </div>
            </div>
            <p>
              No encontramos ninguna funte de registro de evento para analitica
              o crashalitica. No obstante la comunidad de Tor Project cuenta con
              una página para registro y seguimiento de bug y petición de nuevas
              funcionalidades en todos sus productos.
              <a href="https://trac.torproject.org/projects/tor">
                https://trac.torproject.org/projects/tor.</a
              >
            </p>
            <p>
              Para llegar a esta conclusión, realizamos una revision del codigo
              buscando las siguientes palabras claves y dependencias sin obtener
              resultado.
            </p>
            <h4>Palabras Clave</h4>
            <div class="chips">
              <base-button size="sm" class="m-1" type="primary">
                analytics</base-button
              >
              <base-button size="sm" class="m-1" type="primary">
                logEvent</base-button
              >
              <base-button size="sm" class="m-1" type="primary">
                amplitude</base-button
              >
              <base-button size="sm" class="m-1" type="primary">
                event</base-button
              >
              <base-button size="sm" class="m-1" type="primary">
                sentry</base-button
              >
              <base-button size="sm" class="m-1" type="primary">
                fabric</base-button
              >
              <base-button size="sm" class="m-1" type="primary">
                instabug</base-button
              >
            </div>
            <h4>Dependencias de Gradle</h4>
            <div class="chips">
              <base-button class="m-1" size="sm" type="default">
                com.google.firebase:firebase-analytics
              </base-button>
              <base-button class="m-1" size="sm" type="default">
                com.google.firebase:firebase-crashlytics
              </base-button>
              <base-button class="m-1" size="sm" type="default"
                >io.sentry:sentry-android
              </base-button>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>