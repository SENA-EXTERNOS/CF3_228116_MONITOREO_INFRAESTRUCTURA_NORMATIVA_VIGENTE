<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Establecer procesos de monitoreo

    p.mb-3.index-dos Conocer las principales causas de fallas en el centro de datos permite prevenirlas y garantizan la continuidad del servicio, según estadísticas del Instituto Ponemon, algunas razones son: “fallas en UPS, <em>hackers</em>, errores humanos, problemas en el aire acondicionado y sistemas climáticos, fallas en la planta de emergencia y fallas en los equipos de TI”, todas ellas asociadas a la infraestructura tecnológica.
    
    img(src='@/assets/curso/temas/tema1/tema1-img-decorativa-01.svg', alt='Texto que describa la imagen').tema1-decorativa-01

    .row.justify-content-around.align-items-center.mt-3.mb-3
      .col-lg-6
      figure.p-3
        img(src='@/assets/curso/temas/tema1/tema1-img-01.png', alt='Texto que describa la imagen')(data-aos="flip-left")
      .col-lg-7
        .crd-paleBlue(data-aos="flip-left").p-3
          p.mb-0 Se requiere reconocer que el tiempo en el que se encuentre fuera el sistema de información directamente está relacionado con pérdidas y hasta tanto las organizaciones no tengan presente este principio, no darán la importancia que merece el centro de datos como columna vertebral de la infraestructura tecnológica, pues en él se encuentran ubicados todos los componentes que permiten que los sistemas de información operen. 

    img(src='@/assets/curso/temas/tema1/tema1-img-decorativa-02.svg', alt='Texto que describa la imagen').tema1-decorativa-02
    img(src='@/assets/curso/temas/tema1/tema1-img-decorativa-03.svg', alt='Texto que describa la imagen').tema1-decorativa-03

    .slyderb-01(data-aos="fade-right") 
      SlyderB.mb-5.mt-5(:datos="datosSlyder")
    
    p.mb-2.mt-3 La supervisión y control del centro de datos permite: 

    img(src='@/assets/curso/temas/tema1/tema1-img-decorativa-04.svg', alt='Texto que describa la imagen').tema1-decorativa-04            
    img(src='@/assets/curso/temas/tema1/tema1-img-decorativa-05.svg', alt='Texto que describa la imagen').tema1-decorativa-05

    .puntos-calientes-t1.mt-3.mb-3
      .row.justify-content-around.align-items-center.mt-4
        .col-lg-12
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img-06.png', alt='Texto que describa la imagen')

            .tarjeta.color-blanco1.p-3(x="16.2%" y="94%" numero="A")
              p Controlar y administrar el centro de datos.

            .tarjeta.color-blanco2.p-3(x="29.8%" y="6%" numero="B")
              p Verificar el funcionamiento de la infraestructura en tiempo real. 

            .tarjeta.color-blanco3.p-3(x="43.2%" y="94%" numero="C")
              p Reducir los incidentes.
      
            .tarjeta.color-blanco4.p-3(x="56.8%" y="6%" numero="D")
              p Evitar ataques al sistema informático. 
            
            .tarjeta.color-blanco5.p-3(x="70.3%" y="94%" numero="E")
              p Reducir la saturación y/o <br>congestión en la red.
            
            .tarjeta.color-blanco6.p-3(x="84.3%" y="6%" numero="F")
              p Garantizar la disponibilidad de la red. 
    
    .row.mt-5
      h3 Componentes administrativos del centro de datos

    p.mt-3 El monitoreo de los centros de datos se puede dividir en tres componentes que permiten su administración y control de la siguiente manera:                                          

    .row.justify-content-center.mb-5.mt-4
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0 
        .crd_hover_txt(style="min-height: 300px")
          .crd_hover_txt--img.tam-hover
            figure
              img(src="@/assets/curso/temas/tema1/tema1-img-07.png", alt="alt")
          .crd_hover_txt--body.tam-body
            h5.mb-5 Infraestructura TI
            p.mb-0 Dispositivos de red que permiten la comunicación entre equipos y que a su vez hacen parte de la Infraestructura TI.
            p Ejemplos: #[i switches, router, servidores, firewall], etc.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(style="min-height: 300px")
          .crd_hover_txt--img.tam-hover
            figure
              img(src="@/assets/curso/temas/tema1/tema1-img-08.png", alt="alt")
          .crd_hover_txt--body.tam-body
            h5.posicion-body.mb-3 Aplicaciones y servicios requeridos para el funcionamiento del sistema organizacional  
            p Ejemplos: servidores #[em web], servidores SQL, servidores correo,  sistemas de seguridad, aplicaciones #[em web], etc. 
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(style="min-height: 300px")
          .crd_hover_txt--img.tam-hover
            figure
              img(src="@/assets/curso/temas/tema1/tema1-img-09.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-5 Entorno del centro de datos
            p.mb-2 Instalaciones que se realizan directamente sobre la infraestructura del centro de datos y permiten su control y monitoreo.
            p.pos-texto-h Ejemplo: sensores de movimiento, temperatura, humedad, humo. Cámaras de seguridad, UPS, control de accesos, etc.

    h4.mt-3 Monitoreo
    p.mt-3 Para conocer más sobre Monitoreo, principio básico para la disponibilidad de un centro de datos, consulte: 

    .row
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://www.computerweekly.com/es/opinion/Monitoreo-principio-basico-para-la-disponibilidad-de-un-centro-de-datos" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Enlace web. Ago, P. (2016). Monitoreo, principio básico para la disponibilidad de un centro de datos. ComputerWeekly.es; TechTarget. 

    .row.mt-5
      h3 Técnicas y procedimientos para el monitoreo del centro de datos y gestión de información
    
    .row.justify-content-around.align-items-center.mt-3.mb-3
      .col-lg-6
        img(src='@/assets/curso/temas/tema1/tema1-img-10.png', alt='Texto que describa la imagen')(data-aos="flip-left")
      .col-lg-6
        .clr.crd-paleYellow(data-aos="flip-left")
          p.posicion-texto-crd2.mt-3.mb-3 La infraestructura de cada edificio lo convierte en único, de la misma manera cada #[em data center] está diseñado y ajustado a los requerimientos organizacionales con el fin de responder adecuadamente a las necesidades de sus usuarios; realizar un seguimiento a la infraestructura tecnológica a través de bitácoras manuales ralentiza los procesos y por consiguiente se convierte en una metodología tediosa, por tanto, esto impide tener datos en tiempo real del estado del centro de datos y no facilita su consulta, almacenamiento y control.

    p.mt-3 Lo fundamental a la hora de implementar un #[em data center] es pensar en cómo se puede hacer monitoreo automáticamente, algunos de los sistemas que nos permiten realizarlo son:

    h4.text-center Sistemas de monitoreo de un #[em data center]

    .puntos-calientes-02
      .row.justify-content-around.align-items-center.mt-3.mb-3
        .col-lg-8
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img-11.png', alt='Texto que describa la imagen')
            .tarjeta.color-blanco1.p-3(x="45.5%" y="5%" numero="1")
              p CCTV (Circuito Cerrado de Televisión).

            .tarjeta.color-blanco2.p-3(x="83%" y="17%" numero="2")
              p Control de acceso.

            .tarjeta.color-blanco3.p-3(x="97.5%" y="55%" numero="3")
              p Sistemas de intrusión.
      
            .tarjeta.color-blanco4.p-4(x="81.5%" y="82%" numero="4")
              p Sistema de detección de fuego.
            
            .tarjeta.color-blanco5.p-3(x="27.3%" y="92%" numero="5")
              p Control de Iluminación. 
            
            .tarjeta.color-blanco6.p-3(x="4.3%" y="66%" numero="6")
              p Control de temperatura.

            .tarjeta.color-blanco7.p-3(x="3%" y="33%" numero="7")
              p Monitoreo UPS, equipos <br>activos.                 


    .row.mt-5
      h3 Niveles de Operación de los componentes de monitoreo

    p.mt-3 A continuación, se describen los niveles de operación que componen el monitoreo en el centro de datos para su correcto funcionamiento.
    p.mt-3 Niveles de operación

    .row.justify-content-center.mb-5.mt-4
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="zoom-out-up")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/tema1-img-12.png", alt="alt")
          .crd_hover_txt--body
            h4.text-center.mb-3.mt-2 Elementos de campo 
            p.mb-0 Elementos que se encuentran en contacto directo con las variables. 
            p Sensores, actuadores, variadores de velocidad, detectores de humo, lectores de tarjetas, cámaras de vídeo, etc.


      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="zoom-out-up")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/tema1-img-13.png", alt="alt")
          .crd_hover_txt--body
            h4.text-center.mb-3.mt-2 Controladores procesadores
            p.mb-2 Equipos que se instalan en los sitios diseñados para su alojamiento. 
            p Dispositivos que cuentan con memoria y capacidad de procesar datos. 

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="zoom-out-up")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/tema1-img-14.png", alt="alt")
          .crd_hover_txt--body
            h4.text-center.mb-3.mt-2 #[em Software]
            p.mb-2 Los datos son recibidos directamente desde los controladores y se almacenan para permitir la creación de reportes a través del #[em software.]
            p Aplicativos que permiten realizar el monitoreo en tiempo real, además almacenan la información para su posterior consulta. 

    .row.mt-5
      h3 Sistemas de administración del centro de datos

    p.mt-4 En la siguiente ilustración se mencionan las características de los 3 sistemas que conforman la administración del #[em data center].
    
    .row.justify-content-center.align-items-center.mb-5
      .col-11
        img(src="@/assets/curso/temas/tema1/tema1-img-15.png")(data-aos="fade-left")
        p.mt-1 Fuente SIEMENS Publireportaje, 2020.

    .tarjeta.color-primario1.p-4.p-md-5.mb-5.mt-3
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/tema1-img-16.png")

        .col-md.col-lg-6
          .titulo-segundo.color-acento-contenido.mt-3
            h3 Simulación en el diseño
            
          p.mb-3 Para ampliar información sobre cada uno de los sistemas de gestión de TI y sus características, se invita a revisar el #[b Anexo 1. Sistemas de gestión TI] .
          p.mb-3 Allí se detalla la importancia y sus principales características de: 
          .row.justify-content-around.align-items-center
            .col-lg-10
              ul.color-i
                li
                  i.fas.fa-check
                  | <b> ITSM <em>IT Service Management</em></b> o Administración de Servicios TI.
                li
                  i.fas.fa-check
                  | DCIM <b><em>Data Center Infrastructure Management</em></b> o Gestión de la Infraestructura del Centro de Datos.
                li
                  i.fas.fa-check
                  | BMS <b> <em>Building Management System</em></b> o sistemas de gestión de edificios.                                       

          a.boton(:href="obtenerLink('/downloads/sistemas-gestion-TI.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download            

    img(src='@/assets/curso/temas/tema1/tema1-img-decorativa-06.svg', alt='Texto que describa la imagen').tema1-decorativa-06            
    img(src='@/assets/curso/temas/tema1/tema1-img-decorativa-07.svg', alt='Texto que describa la imagen').tema1-decorativa-07


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Clasificación de la información',
        texto:
          'Ahora, analizando la información de Ponemon, se pueden clasificar las novedades de la siguiente manera: ',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-02.png'),
      },
      {
        titulo: '<em>Hackers</em>',
        texto: 'Humanos: <em>hackers</em>, errores humanos.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-03.png'),
      },
      {
        titulo: 'Infraestructura',
        texto:
          'Infraestructura: UPS, aire acondicionado, planta de emergencia, fallas en los equipos TI.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-04.png'),
      },
      {
        titulo: 'Errores humanos',
        texto:
          'Adicionalmente, se puede concluir que, aunque los errores humanos se pueden presentar y no se descartan, los errores generados por daños directamente relacionados con la infraestructura TI son más frecuentes y comunes, por ello se debe realizar seguimiento y monitoreo constante a toda la infraestructura TI para evitar al máximo su aparición.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-05.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
