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
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2 mt-5">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Análisis</h1>
              </div>
            </div>

            <p>
              Haciendo un análisis general de la aplicación encontramos que no
              es consistente el uso de colores de la aplicación. Tanto la
              pantalla de inicio como la principal, utilizan colores que hacen
              alusión a los colores principales del navegador Tor, lo que tiene
              bastante sentido al tratarse de una aplicación que provee a sus
              usuarios funcionalidades parecidas por medio de un proxy. Si bien
              identificamos una paleta de colores en la pantalla principal, esta
              no se mantiene en las demás vistas. Como se puede ver en las
              siguientes capturas, el color de los header en cada una de estas,
              no es el mismo utilizado en la vista principal.
            </p>
            <div class="headers">
              <img
                src="/img/screenshots/headers/header_main.jpg"
                alt="header pantalla de inicio"
              />
              <figcaption>Header de la pantalla principal</figcaption>
              <img
                src="/img/screenshots/headers/header_setting.jpg"
                alt="header pantalla de configuracion"
              />
              <figcaption>
                Header de la pantalla de configuracion
              </figcaption>
              <img
                src="/img/screenshots/headers/header_vpn.jpg"
                alt="header vpn"
              />
              <figcaption>
                Header de la pantalla de seleccion de apps para VPN
              </figcaption>
            </div>
            <p>
              Al utilizar componentes de material design, el único elemento
              visual que le da personalidad a la aplicación es el botón de
              iniciar los servicios de Tor, el cual es suficientemente grande y
              distinguible. Aparte de este botón, los otros componentes son
              fácilmente identificables por su amplio uso en las aplicaciones de
              Android. Esto no resulta ser necesariamente un aspecto negativo ya
              que estos componentes funcionan muy bien y el estilo de se
              mantiene en toda la aplicación.
            </p>
            <p>
              Como se muestra en los flujos de la aplicación, hay algunos
              pantallas que muestran listas de elementos o configuraciones. En
              ninguna de estas vistas se utilizan mensajes para notificar al
              usuario que está viendo una lista vacía cuando no hay ningún
              elemento.
            </p>
            <p>
              Finalmente, el último aspecto que consideramos se debe resaltar es
              la falta de mensaje y pantallas informativas relacionadas con la
              configuración, ya que no resulta fácil entender de dónde provienen
              estas propiedades a configurar ni las funcionalidades que se están
              configurando.
            </p>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>