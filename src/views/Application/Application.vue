<template>
  <div>
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 col-lg-8">
          <google-play-card />
          <card class="mt-5">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Análisis de aplicaciones similares</h1>
              </div>
            </div>
            <div class="content">
              <p>
                A continuación se realiza una descripción de las funcionalidades
                que poseen las principales aplicaciones competidoras de Orbot.
                Posteriormente se menciona el factor diferenciador de Orbot que
                hace que destaque sobre sus rivales.
              </p>
              <ul>
                <li>
                  <b>Tunnelbear: </b>
                  <p>
                    Permite realizar una conexión de túnel VPN con distintos
                    servidores de la compañía alrededor del mundo de manera
                    directa suministrando el tráfico de manera cifrada
                    utilizando AES-256:
                    <a href="https://www.tunnelbear.com" target="_blank"
                      >Tunnelbear Home Page</a
                    >. Realiza una auditoría independiente anual de su código
                    para verificar la seguridad del mismo y evitar cualquier
                    brecha. El informe se encuentra disponible en su página web.
                    Ofrece únicamente una capacidad de 500MB para enviar tráfico
                    de manera gratuita, luego es necesario realizar algún pago.
                  </p>
                </li>
                <li>
                  <b>ExpressVPN: </b>
                  <p>
                    Permite realizar una conexión de túnel VPN con distintos
                    servidores de la compañía alrededor del mundo de manera
                    directa suministrando el tráfico de manera cifrada evitando
                    rastreo por DNS o WebRTC. Su funcionalidad es completamente
                    de pago.
                    <a href="https://www.expressvpn.com/" target="_blank"
                      >ExpressVPN Home Page</a
                    >.
                  </p>
                </li>
                <li>
                  <b>Hola Free: </b>
                  <p>
                    Permite realizar una conexión proxy P2P para enviar tráfico
                    a través de la red con el fin de burlar los bloqueos por
                    proxy compartiendo un poco del ancho de banda de sus
                    usuarios. Funciona de manera gratuita compartiendo un poco
                    del ancho de banda de la red del cliente para servir de nodo
                    P2P. Si se paga la funcionalidad pro se elimina la
                    restricción que obliga al cliente a servir de nodo.
                    <a href="https://www.expressvpn.com/" target="_blank"
                      >Hola Home Page</a
                    >.
                  </p>
                </li>
              </ul>
            </div>
          </card>
          <card class="mt-5">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h1>Ventajas de Orbot</h1>
              </div>
            </div>

            <p>
              La principal ventaja de Orbot con respecto a sus competidores es
              la alto número de nodos que posee la red Tor para enviar tráfico
              cifrado lo que dificulta en gran medida su rastreo en la red, a
              diferencia de sus competidores que tienden a centralizar el
              tráfico en un conjunto pequeño de datacenter. Estos nodos pueden
              ser desde servidores en datacenters de la organización Tor como
              laptops y PCs de hogar de cada uno de los clientes que se
              comunican utilizando el protocolo P2P.
            </p>
            <p>
              Asimismo, la redirección del tráfico de red en Orbot encripta la
              información de las peticiones tanto en datos como en cabecera a
              diferencia de su competidor <b>Hola</b> que únicamente sirve de
              proxy para redirigir trafico exponiendo la información de sus
              usuarios en la red.
            </p>

            <p>
              Orbot utiliza sus servidores DNS para solicitar direcciones IP de
              un dominio de manera segura impidiendo que los proveedores de
              servicios de internet (ISP) realicen una traza de los servidores
              destino a los que se dirige el tráfico utilizando los logs de DNS
              de sus sistemas. Esta caracteristica permite mantener el anonimato
              y no es provista en sus competidores <b>VPN Proxy Master Lite</b>,
              <b>Free VPN Proxy</b>. De igual modo, la ubicación de servidores
              de la red Tor se realiza en países donde la reglamentación estatal
              no contempla rastreo al tráfico de red. Por ejemplo algunos
              servidores de <b>ExpressVPN</b> y <b>Tunnelbear VPN</b> se
              localizan en los Estados Unidos y las agencias legales pueden
              radica una solicitud para perfilar la actividad en la red de los
              usuarios lo que impide mantener el anonimato.
            </p>
          </card>
        </div>
        <div class="col-12 col-lg-4">
          <h3 class="similar-apps-title">Aplicaciones Similares</h3>
          <div class="similar-apps">
            <app-card :app="app" :key="app.title" v-for="app in apps.apps" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GooglePlayCard from "@/components/GooglePlayCard";
import AppCard from "@/components/AppCard";
import apps from "@/data/apps.json";

export default {
  name: "tables",
  data() {
    return {
      apps
    };
  },
  components: {
    GooglePlayCard,
    AppCard
  }
};
</script>