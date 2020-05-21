<template>
  <div class="integration">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-4 offset-4">
          <app-card :app="app" />
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-md-2">
          <card class="content">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Integración con otras aplicaciónes</h1>
              </div>
            </div>
            <p>
              A pesar de que la aplicación no se integra con la aplicación
              comunes del sistema, se encontró que Orbot contiene dentro del
              codigo el paquete <b>com.google.zxing.client.android</b> al que
              hace intents al seleccionar la opción de compartir o escanear un
              código QR para crear un puente de conexión.
            </p>
            <figure class="figure">
              <img
                class="device-screenshot"
                src="img/screenshots/integration1.png"
                alt="Integration 1"
              />              
            </figure>
            <p>
              Es curioso que utilicen esta función en específico para escanear
              códigos QR en lugar de utilizar la Aplicacion de camara nativa que
              en muchas ocaciones ya incluye esta funcionalidad. Sin embargo,
              imaginamos que se utiliza debido a que pueden incluir junto al
              intent un payload que utilizan para enviar el action filter que
              desean generar.
            </p>
            <figure class="figure">
              <img
                class="device-screenshot"
                src="img/screenshots/integration2.png"
                alt="Integration 2"
              />              
            </figure>
            <p>
              Asimismo, en el archivo manifest.xml incluyen el tag
              <b>intent-filter</b>
              necesario para que los dispositivos dirijan los códigos QR
              escaneados a la aplicación a la aplicación de Orbot.
            </p>
            <figure class="figure">
              <img
                class="device-screenshot"
                src="img/screenshots/integration2.png"
                alt="Integration 2"
              />              
            </figure>            
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppCard from "@/components/AppCard";

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
    AppCard,
  }
};
</script> 