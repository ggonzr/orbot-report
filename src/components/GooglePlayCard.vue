<template>
  <section class="google-card">
    <header class="header">
      <div class="image">
        <img src="img/logo.png" alt="orbot logo" />
      </div>
      <div class="app-info">
        <h1 class="app-title">Orbot: Tor for Android</h1>
        <div class="links-stars">
          <div class="links">
            <a
              href="https://play.google.com/store/apps/developer?id=The+Tor+Project"
              target="_blank"
              >The Tor Project</a
            >
            <a
              href="https://play.google.com/store/apps/category/COMMUNICATION"
              target="_blank"
              >Communication</a
            >
          </div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star inactive"></i>
            166,184
            <i class="fas fa-user"></i>
          </div>
        </div>
        <div class="everyone">
          <img
            src="https://lh3.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i=s14-rw"
            alt="Everyone"
          />
          <p>Para todos</p>
        </div>
        <p class="compatibility">
          <i class="fas fa-info-circle"></i> Esta aplicación es compatible con
          tu dispositivo.
        </p>
        <div class="install-button">
          <a
            class="i-button"
            href="https://play.google.com/store/apps/details?id=org.torproject.android&hl=es"
            target="_blank"
          >
            Instalar
          </a>
        </div>
      </div>
    </header>
    <div class="screenshots">
      <agile
        class="custom-agile"
        :slidesToShow="2"
        :dots="false"
        autoplay
        :infinite="false"
      >
        <div
          class="slide agile-slide"
          :key="screen.name"
          v-for="screen in screenshots"
        >
          <img :src="screen.path" :alt="screen.name" />
        </div>
        <template slot="prevButton"
          ><i class="fas fa-chevron-left"></i
        ></template>
        <template slot="nextButton"
          ><i class="fas fa-chevron-right"></i
        ></template>
      </agile>
    </div>
    <div class="content">
      <p>
        Orbot es una aplicación de proxy libre que da la posibilidad a otras
        aplicaciones de usar Internet de forma más segura. Orbot usa Tor para
        cifrar su tráfico de Internet y luego lo esconde enviándolo a través de
        una serie de ordenadores alrededor del mundo.
      </p>
      <ul>
        <li>
          Tor es software libre y es una red abierta que le ayuda a defenderse
          contra una forma de vigilancia de red que amenaza la libertad y
          privacidad personas, la realización de negocios, actividades y
          relaciones confidenciales, y la seguridad de los estados, conocida
          como análisis de tráfico.
        </li>
        <li>
          Orbot es la única aplicación que crea una conexión verdaderamente
          privada a Internet.
        </li>
        <li>
          Cualquier aplicación instalada puede usar Tor si tiene funciones de
          proxy. Use Orbot con Twitter, o pruebe la búsqueda web privada con
          DuckDuckGo.
        </li>
        <li>
          Orbot pude ser configurado para intermediar (`proxy`) de forma
          transparente todo su tráfico de Internet a través de Tor. También
          puede escoger qué aplicaciones específicas quiere usar a través de
          Tor.
        </li>
      </ul>
    </div>
    <div class="content">
        <b>Análisis de aplicaciones similares</b>
        <p>
          A continuación se realiza una descripción de las funcionalidades que poseen 
          las principales aplicaciones competidoras con Orbot. Posteriormente se menciona
          el factor diferenciador de Orbot que hacer que destaque sobre sus rivales.
        </p>
        <ul>
            <li>
                <b>Tunnelbear: </b>
                <p> Permite realizar una conexión de túnel VPN con distintos servidores
                    de la compañía alrededor del mundo de manera directa suministrando 
                    el tráfico de manera cifrada utilizando AES-256:
                    <a href="https://www.tunnelbear.com" target="_blank">Tunnelbear Home Page</a>. 
                    Realiza una auditoría independiente anual de su código para verificar 
                    la seguridad del mismo y evitar cualquier brecha. 
                    El informe se encuentra disponible en su página web.
                    Ofrece únicamente una capacidad de 500MB para enviar tráfico de manera gratuita,
                    luego es necesario realizar algún pago.
                </p>
            </li>
            <li>
                <b>ExpressVPN: </b>
                <p> 
                    Permite realizar una conexión de túnel VPN con distintos servidores de la compañía alrededor del mundo
                    de manera directa suministrando el tráfico de manera cifrada evitando rastreo por DNS o WebRTC. 
                    Su funcionalidad es completamente de pago. <a href="https://www.expressvpn.com/" target="_blank">ExpressVPN Home Page</a>. 
                </p>
            </li>
            <li>
                <b>Hola Free: </b>
                <p> 
                    Permite realizar una conexión proxy P2P para enviar tráfico a través de la red
                    con el fin de burlar los bloqueos por proxy compartiendo un poco del ancho de banda de sus usuarios.
                    Funciona de manera gratuita compartiendo un poco del ancho de banda de la red del cliente para servir de nodo P2P.
                    Si se paga la funcionalidad pro se elimina la restricción que obliga al cliente a servir de nodo.                    
                    <a href="https://www.expressvpn.com/" target="_blank">Hola Home Page</a>.
                </p>
            </li>                      
        </ul>
        <b> Ventajas de Orbot </b>
        <p>
            La principal ventaja de Orbot con respecto a sus competidores
            es la alto número de nodos que posee la red Tor para enviar 
            tráfico cifrado lo que dificulta en gran medida su rastreo 
            en la red, a diferencia de sus competidores que tienden a centralizar
            el tráfico en un conjunto pequeño de datacenter. Estos nodos pueden ser
            desde servidores en datacenters de la organización Tor como laptops y PCs
            de hogar de cada uno de los clientes que se comunican utilizando el protocolo P2P.
            Asimismo, la redirección del tráfico de red en Orbot encripta la información de las
            peticiones tanto en datos como en cabecera a diferencia de su competidor <b>Hola</b>
            que únicamente sirve de proxy para redirigir trafico exponiendo la información de sus usuarios en la red.
            Además, Orbot utiliza sus servidores
            DNS para solicitar direcciones IP de un dominio de manera segura impidiendo que
            los proveedores de servicios de internet (ISP) realicen una traza de los servidores destino
            a los que se dirige el tráfico utilizando los logs de DNS de sus sistemas. Esta caracteristica
            permite mantener el anonimato y no es provista en sus competidores
            <b>VPN Proxy Master Lite</b>, <b>Free VPN Proxy</b>.
            De igual modo, la ubicación de servidores de la red Tor se realiza en países donde la reglamentación estatal
            no contempla rastreo al tráfico de red. Por ejemplo algunos servidores de <b>ExpressVPN</b> y <b>Tunnelbear VPN</b>
            se localizan en los Estados Unidos y las agencias legales pueden radica una solicitud
            para perfilar la actividad en la red de los usuarios lo que impide mantener el anonimato.
        </p>
    </div>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";
import screenshot from "@/data/screenshots.json";
export default {
  data() {
    return {
      screenshots: screenshot.screenshots
    };
  },
  components: {
    agile: VueAgile
  }
};
</script>



