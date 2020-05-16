<template>
  <div class="integration">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-4 offset-4">
          <figure class="figure">
              <img src="/img/security/security.jpeg" class="figure-img img-fluid z-depth-1"
              alt="Security Orbot Log" style="width: 400px">
              <figcaption class="figure-caption text-right">Conexión con el servicio de Tor denegada debido a la brecha interna</figcaption>
          </figure>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Seguridad en conexión VPN</h1>
              </div>
            </div>
            <p>
              Una de las funcionalidades que llama la atención de Orbot es la capacidad de idenficar 
              posibles vulnerabilidades en la red local y evitar que se realice una conexión insegura.
              Lo anterior lo logra debido a que realiza una inspección de las interfaces de red y las conexiones habilitadas
              en el dispositivo. Esta caracteristica fue descubierta como el resultado de realizar un sniffing en el mismo dispositivo Android 
              utilizando la aplicación <b>PCAP Remote</b>. En el momento de capturar trafico, <b>Orbot</b> intenta
              ejecutar un cambio de identidad con el ánimo de encubrir la retransmisión de paquetes. Esta acción ejecuta
              el código de acción <b>NEWNYM</b> en la libreria nativa de Tor que utiliza la aplicación y con ello borra la
              cache del DNS que la aplicación posee para redirigir el trafico. A continuación se muestra el código de los servicios 
              de Orbot que ejecuta la funcionalidad mencionada.              
            </p>
            <vue-embed-gist
              gist-id="84e94475af0987a89fa43ebe9eafda66"              
            />
            <p>
              Por otro lado, el comando para ejecutarse atraviesa diferentes capas en la 
              aplicación. La clase <b>OrbotService</b> extiende las caracteristicas de <b>VpnService</b>
              expuesto por el paquete <b>android.net.VpnService</b> y define un metodo para la inicialización y el cierre del tunel VPN.
              Este en su implementación utiliza las caracteristicas de <b>OrbotVpnManager</b>, clase la cual invoca directamente a la libreria nativa 
              para que esta detenga el servicio por la falla de seguridad. A continuación se incluye la invocación del metodo nativo de la clase <b>OrbotVpnManager</b>
            </p>

            <vue-embed-gist
              gist-id="2baed64150ddd418e4989fb5ab77fb9c"              
            />
            <p>
              Para culminar, detallamos el manejo de la clase <b>Tune2Socks</b> que invoca directamente la libreria escrita en C
              utilizando el JNI
            </p>
            <vue-embed-gist
              gist-id="402d9374d6e4e2a51d7ee60d0cbe9bf7"              
            />
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueEmbedGist from "vue-embed-gist";
export default {
  data() {
    return {
      app: {
        title: "Barcode Scanner",
        owner: "ZXing Team",
        description:
          "Scan barcodes on products, or Data Matrix and QR Codes containing URLs, contact info, etc.",
        image:
          "https://lh3.googleusercontent.com/os72icmFlDtbxpYbZCP-v6kOereSLGDmlKsBl1ISTPdgbcpoc4rSIuXDuoDECvgcvoFJ=s180-rw",
        rate: 4.1,
        link:
          "https://play.google.com/store/apps/details?id=com.google.zxing.client.android"
      }
    };
  },
  components: {
    VueEmbedGist,    
  }
};
</script> 