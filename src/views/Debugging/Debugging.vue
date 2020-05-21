<template>
  <div class="debugging">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-8">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Ejecución en General</h1>
              </div>
            </div>
            <p>
              Uno de los problemas más relevantes que encontramos durante las
              pruebas fue la falta de mensajes informativo acerca de las fallas
              de conexión a los servicios de tor. En numerosas ocasiones nos
              encontramos con que la aplicación permanecía en un estado de carga
              infinito sin mostrar ningún mensaje sobre el motivo de no poder
              establecer conexión. En parte este problema se desarrolla en la
              sección de conectividad eventual. Sin embargo se menciona como un
              error de ejecución porque en ocasiones esta funcionalidad dejaba
              de funcionar si haber restringido el acceso a internet. Este
              problema obliga a los usuarios a cerrar la aplicación desde la
              opción “Exit” implementada dentro de Orbot ya que al cerrarla
              desde android esta sigue intentando conectar con los servicios de
              Tor. En algunas ocasiones nos vemos forzados a reiniciar el
              dispositivo para remontar todas las funcionalidades.
            </p>
            <div class="image-wrapper">
              <img
                class="device-screenshot"
                src="img/screenshots/infinit_loading.jpg"
                alt="Loading infinito en varios dispocitivos"
              />
            </div>
            <p>
              Otro problema de interfaz de usuario que encontramos fue la
              sección de log que al parecer no fue implementada utilizando
              alguno de los componentes con scroll motivo por el que es difícil
              navegar en dicho log ya que se cierra fácilmente en parte debido a
              que está implementado sobre un componente de drawer.
            </p>

            <div class="image-wrapper">
              <img
                class="device-screenshot"
                src="img/screenshots/log_screen.jpg"
                alt="Pantalla de log implementada en un drawer de material"
              />
            </div>
          </card>
        </div>
        <div class="col-12 col-md-4">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Instalación</h1>
              </div>
            </div>
            <p>
              La instalación de la aplicación toma un tiempo de instalación del paquete de 10s 
              y un tiempo de desinstalación de 1.5s. No encontramos ningún tipo de error en estos
              procesos al repetirse numerosas veces. Al reinstalar la aplicacion, esta no conserva
              las configuraciones y preferencias guardadas previamente y se vuelve o mostrar el landing page
              con las indicaciones de como utilizar la aplicaciones.
            </p>
          </card>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 col-md-8">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Logs de error</h1>
              </div>
            </div>
            <p>
              Utilizando el comando
              <code>adb logcat | findstr org.torproject.android</code>, pudimos
              revisar los logs del sistema relacionados con la aplicación de
              Orbot.
            </p>
            <p>
              Durante la ejecución de la aplicación se encontró un error
              recurrente en los logs.
              <code
                >Didn't find class
                "android.view.View$OnUnhandledKeyEventListener"</code
              >.
            </p>
            <p>
              A pesar de no ser un error bloqueante y no reflejarse en la
              interfaz de usuario, este error se repite bastante especialmente
              en la pantalla de inicio que se muestra únicamente al iniciar la
              aplicación por primera vez. Puede que este error no sea
              perceptible a los usuarios por el modo en que se manejan los
              errores como se muestra en la sección.
            </p>
            <h2>Test Lab</h2>
            <p>
              Durante la ejecución de prueba en la aplicación en la herramienta
              Test lab de firebase, nos encontramos con un error bloquean que
              que nunca nos permitió ejecutar las pruebas utilizando como
              dispositivo el google pixel 2 y con Android 9.
              <code
                >java.lang.IllegalStateException: Drag shadow dimensions must be
                positive</code
              >
            </p>
            <p>
              Buscando cómo podríamos resolver este error encontramos en varios
              foros (StackOverflow) que es un problema relacionado
              específicamente con Android 9. No obstante podría ser arreglado
              utilizando un DragShadowBuilder el cual crea una imagen que el
              sistema muestra durante la operación de arrastrar y soltar.
            </p>
            <p>
              A parte de esta excepción, no encontramos ningún log que llamará
              nuestra atención durante todas las pruebas de la aplicación, tanto
              en nuestros dispositivos como en BrowserStack o Kobiton.
            </p>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
