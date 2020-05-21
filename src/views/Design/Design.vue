<template>
  <div class="design">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-12">
          <h2 class="header-title">Paleta de colores principal</h2>
        </div>
        <div class="col-lg-3">
          <div class="palette-card palette-card-1">
            <p>#4A3659</p>
          </div>
        </div>
        <div class="col-lg-3 ">
          <div class="palette-card palette-card-2"><p>#9DCD2B</p></div>
        </div>
        <div class="col-lg-3 ">
          <div class="palette-card palette-card-3"><p>#FFFFFF</p></div>
        </div>
        <div class="col-lg-3 ">
          <div class="palette-card palette-card-4"><p>#B9B9B9</p></div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Componentes</h1>
              </div>
            </div>
            <p>
              Revisando la aplicación tanto visualmente con revisando el código
              a profundidad, encontramos que utiliza la librería de componentes
              de material design lo que hace bastante reconocible la mayoría de
              componentes que se utilizan en la aplicación.
            </p>
            <img
              src="img/design/components.jpg"
              alt="Componentes de material"
            />
            <figcaption>
              Componentes de material design extraídos de la aplicación.
            </figcaption>
            <p>
              Esta imagen muestra algunos de los componentes más distinguibles
              de la aplicación que notoriamente caracterizan a una aplicación
              implementada con material design tales como los header y footer
              del layout basico, sliders, dropdowns, checkbox, outlined button,
              entre otros.
            </p>
          </card>
        </div>
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2 mt-5">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Flujos de la aplicación</h1>
              </div>
            </div>

            <iframe
              allowfullscreen
              frameborder="0"
              width="100%"
              height="720"
              src="https://app.lucidchart.com/documents/embeddedchart/68f096d8-7ca8-4af4-be3f-f8ac16a1da69"
              id="Mxv0UG0Tg9C9"
            ></iframe>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>