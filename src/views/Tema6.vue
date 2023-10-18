<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Buenas prácticas

    .row.justify-content-around.align-items-center.mt-3 
      .col-lg-9
        .cajon.color-primario1.p-4
          p.mb-2 Según informes internacionales, “los ataques a los sistemas de información utilizando <i>malware</i> aumentaron en un 150%, garantizar la seguridad informática en la plataforma tecnológica de la empresa es vital para el funcionamiento de la organización”. 

          p Para ilustrar mejor la información anterior, puede consultar el siguiente enlace:


    h4.mt-4  Ataques de sistemas de información
    p.mt-3 Para ampliar los conceptos sobre los riesgos laborales del trabajo informático consulte el siguiente enlace:
    .row.mt-3
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://www.trt.net.tr/espanol/ciencia-y-tecnologia/2021/06/01/el-mundo-registra-un-alarmante-aumento-de-los-ataques-ciberneticos-con-sistemas-de-ransomware-1649506 " target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web]. El mundo registra un alarmante aumento de los ataques cibernéticos con sistemas de ransomware. (2021). TRT  

    img(src='@/assets/curso/temas/tema6/tema6-img-decorativa-01.svg', alt='Texto que describa la imagen').tema6-decorativa-01
    img(src='@/assets/curso/temas/tema6/tema6-img-decorativa-02.svg', alt='Texto que describa la imagen').tema6-decorativa-02
    img(src='@/assets/curso/temas/tema6/tema6-img-decorativa-03.svg', alt='Texto que describa la imagen').tema6-decorativa-03

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-7
        p.mb-2 Así como en COBIT e ITIL se aplican buenas prácticas en el uso de los sistemas de información para evitar los “riesgos” en los que puede caer la infraestructura tecnológica de la organización, se darán a continuación algunos criterios de seguridad para el <i>software</i> y la red de datos que permiten mejorar e incrementar la protección del sistema. 

        p Algunos de los criterios de seguridad del <i>software</i> son: 

      .col-lg-5
        img(src='@/assets/curso/temas/tema6/tema6-img-01.png', alt='Texto que describa la imagen')(data-aos="fade-left") 

    p.mt-3 Criterios de seguridad del <i>software</i>

    .puntos-calientes-t6.mt-3.mb-3
      .row.justify-content-around.align-items-center.mt-4  
        .col-lg-12
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema6/tema6-img-02.png', alt='Texto que describa la imagen')

            .tarjeta.color-blanco1.p-3(x="10.2%" y="39%" numero="")
              h5.mt-3 Servidor propio:
              p Utilizar los servicios directamente en un servidor local permiten reducir los riesgos de los incidentes en el sistema de información, dará estabilidad a la red y reduce los tiempos de consulta agilizando las respuestas a los usuarios, también garantiza la ejecución de los aplicativos en un ambiente controlado y seguro. 

            .tarjeta.color-blanco2.p-3(x="31.8%" y="39%" numero="")
              h5.mt-3 Antivirus y #[i firewall]:
              p Proteger el sistema utilizando <i>software</i> especializado, para ello incrementa los niveles de seguridad, la combinación de un antivirus con un <i>firewall</i> reduce los riesgos de ataques informáticos y garantiza la disponibilidad del <i>software</i> o programas del sistema. También se puede contar con un antispam para evitar al máximo correos y mensajes con código malicioso que pueda afectar el funcionamiento del sistema de información. 

            .tarjeta.color-blanco3.p-3(x="51.2%" y="39%" numero="")
              h5.mt-3 Cifrado de información:
              p Proteger la información a través de la encriptación de los mensajes y paquetes en la red, permiten que el sistema de información sea seguro, también garantizan que los accesos no autorizados al sistema no puedan acceder a éstos sin descifrarlos.

            .tarjeta.color-blanco4.p-3(x="69.8%" y="39%" numero="")
              h5.mt-3 Plan de contingencia:
              p Los aplicativos o programas del sistema, permiten que la organización funcione con normalidad, implementar un plan de contingencia en el cual un servidor pueda suplir las necesidades inmediatas del sistema ante la caída del servidor principal permite la disponibilidad de los servicios en la red y garantizan la ejecución de los programas con normalidad, así las “fallas” en la plataforma tecnológica no afectarán por un tiempo prolongado el sistema.

            .tarjeta.color-blanco5.p-3(x="90.3%" y="39%" numero="")
              h5.mt-3 Proteger el sistema:
              p Incrementar los niveles de protección, encriptar la información, crear niveles de acceso, implementar <i>software</i> antivirus, proteger el sistema a través de monitoreo, entre otros; permiten incrementar los niveles de seguridad, pero si el <i>software</i> como tal no es seguro, no vendrá bien todo el esfuerzo hecho con los demás elementos que integran al sistema; por lo tanto, el mismo <i>software</i> deberá contar con niveles de seguridad suficientes para protegerse ante anomalías como caídas del sistema, accesos no permitidos y fallas en la operación.

    .row.justify-content-around.align-items-center.mt-3 
      .col-lg-9
        .cajon.color-acento-contenido.p-4.mt-4
          p En el siguiente video se identifican los criterios más importantes a tener presentes en temas de seguridad en la red a la hora de implementar un centro de datos y así poder obtener buenas prácticas en dicha implementación y minimizar peligros, fallas y riesgos tanto para el personal como para los equipos de cómputo.

    .row
      figure.mb-5.mt-3
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/ODHXTKN4-Ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h4.mt-4  Seguridad informática
    p.mt-3 Para conocer más información sobre medidas de seguridad informática consulte:
    .row.mt-3
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://www.teamnet.com.mx/blog/las-mejores-medidas-de-seguridad-informatica" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web]. Palacio, A. (2017). Las mejores medidas de Seguridad Informática. Com.mx.   
    .row.mt-3
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://www.datos101.com/blog/las-9-medidas-de-seguridad-informatica-basicas/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web].  Las 9 medidas de seguridad informática. (2019). Datos 101.  


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
