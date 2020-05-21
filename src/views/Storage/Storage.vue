<template>
  <div class="storage">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Local Storage & Cache</h1>
              </div>
            </div>
            <p>
              La aplicación implementa un sistema de almacenamiento local de
              clave valor utilizando SharedPreferences. Este almacenamiento
              local se utiliza para almacenar propiedades de la ejecución de la
              aplicación y selección de opciones como lo son: indicar si la
              ventana de saludo inicial <b>(OnBoarding)</b> ya fue mostrada al
              usuario y si es así redirigir directamente a la actividad
              principal. Esta propiedad se encuentra ubicada bajo el nombre de
              <i>connect_first_time</i> y su administración está bajo
              responsabilidad de la actividad OnBoarding.
            </p>
            <img src="img/storage/storage1.png" alt="storage snippet 1" />
            <figcaption>
              Fragmento de código obtenido del siguiente
              <a
                href="https://github.com/guardianproject/orbot/blob/0a3a4f7ee943e05caa0d5417ed802d2a4e028af3/app/src/main/java/org/torproject/android/ui/onboarding/OnboardingActivity.java"
              >
                archivo
              </a>
            </figcaption>
            <p>
              De igual modo, este tipo de almacenamiento se utiliza para llevar
              registro del medio de transmisión de la conexión. De manera
              específica, se almacena el puente seleccionado para transmitir el
              tráfico, entre las opciones se encuentran servidores directos de
              la comunidad Tor, clientes P2P de la comunidad o servidores
              propios del usuario.
            </p>
            <img src="img/storage/storage2.png" alt="storage snippet 2" />
            <figcaption>
              Fragmento de código obtenido del siguiente
              <a
                href="https://github.com/guardianproject/orbot/blob/0a3a4f7ee943e05caa0d5417ed802d2a4e028af3/app/src/main/java/org/torproject/android/ui/onboarding/BridgeWizardActivity.java"
              >
                archivo
              </a>
            </figcaption>
            <p>
              Además, la aplicación realiza un backup de la configuración de la
              aplicación también en el almacenamiento externo con el fin de que
              si la aplicación se borra y se reinstala no sea necesario
              configurarla nuevamente. Dentro de la información que se almacenan
              se encuentran cookies de autenticación con la red Tor, dominio y
              el id del usuario para no tener que realizar una autenticación
              inicial al reinstalar la aplicación. Este proceso también realiza
              el manejo de esta información a manera de cookie realizando un
              proceso de cache en el momento en que recupera la información.
            </p>
            <img src="img/storage/storage3.png" alt="storage snippet 3" />
            <figcaption>
              Fragmento de código obtenido del siguiente
              <a
                href="https://github.com/guardianproject/orbot/blob/0a3a4f7ee943e05caa0d5417ed802d2a4e028af3/app/src/main/java/org/torproject/android/ui/hiddenservices/ClientCookiesActivity.java"
              >
                archivo
              </a>
            </figcaption>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>