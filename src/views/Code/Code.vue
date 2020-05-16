<template>
  <div class="code">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Android Profiler</h1>
              </div>
            </div>
            <p>
              La herramienta Android Profiler permite realizar un análisis de
              los recursos que consume el sistema al ejecutar la aplicación. En
              esta vista podemos observar el consumo de CPU, Memoria RAM, uso de
              red y consumo de batería. Al iniciar la aplicación se ejecuta la
              actividad <b>OnBoard</b> que da un saludo de bienvenida al
              usuario. Esta vista consume alrededor de 60 MB para la ejecución.
              El UI se compone de X vistas algunas de ellas son
              <b>OnBoardActivity</b>, <b>MainActivity</b>, <b>Settings</b> y
              <b>BridgeWizard</b>. Una falencia de rendimiento que posee el UI a
              lo largo de la aplicación es el indebido uso de la función
              findViewByID() para obtener cualquier elemento de la vista. A
              continuación el código de algunas vistas donde se utiliza la
              función de manera desmedida.
            </p>

            <p>
              Por ello al iniciar el servicio de Proxy/VPN e ir cambiando entre
              las diferentes vistas mencionadas con anterioridad, el sistema
              escala el uso de la memoria RAM a 170 MB y cambiando entre las
              vistas de manera rápida a 230MB. Asimismo se encontraron diversos
              bugs en la aplicación. El primero de ellos se encuentra al
              seleccionar un puente para el envío de datos en la red tor
              <b>(Modo Bridge)</b>, independientemente de la opción que se
              seleccione, el slider no registra la opción de escogencia
              desactivando el modo puente en el momento en que la vista de
              selección se cierra.
              <br />
              Otro bug se encuentra en el manejo de los elementos de la UI al
              rotar la pantalla. Si se rota la pantalla rápidamente para mostrar
              los elementos de manera vertical u horizontal, la aplicación se
              reinicia y el servicio de VPN se cierra. Para culminar, un último
              bug se dispara en la pantalla de Settings cuando la opción de VPN
              se encuentra activa, si nos dirigimos a la lista de opciones y
              realizamos un scroll rápido de la pantalla, la aplicación se
              cierra.
            </p>
            <p>
              Con el fin de optimizar el uso de memoria y evitar el uso de este
              método podemos utilizar en su lugar una vinculación de vistas.
              Esta funcionalidad crea un clase con las referencias a los objetos
              de la vista de manera que sean rápidamente accesibles y no sea
              necesario buscar el ID por todas las vistas que posee la
              aplicación.
            </p>
            <p>
              View Binding:
              <a
                href="https://developer.android.com/topic/libraries/view-binding"
                >https://developer.android.com/topic/libraries/view-binding</a
              >
            </p>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script> 