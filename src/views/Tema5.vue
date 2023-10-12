<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manejo de posturas

    p.mt-3 La Seguridad y Salud en el Trabajo o SST garantizan el monitoreo y control de las variables que puedan afectar al individuo dentro de las instalaciones de la organización; por tanto, llevar control de los riesgos y evitar los accidentes se vuelven en los motores primarios de este sistema organizacional.       
    
    img(src='@/assets/curso/temas/tema5/tema5-img-decorativa-01.svg', alt='Texto que describa la imagen').tema5-decorativa-01

    .row.justify-content-around.align-items-center
      .col-lg-10
        .clr-background-3.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-5.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema5/tema5-img-02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.color-blanco.mb-3  Seguridad y Salud en el Trabajo
                  p.color-blanco.mb-5.text-small Para ampliar los conceptos sobre SST consultar el siguiente vídeo:
                  p.color-blanco.mb-1.text-small Ecosistema de Recursos Educativos Digitales SENA, E. (2022). Seguridad y salud en el trabajo (SST)
                .col-sm-auto.d_ind
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/embed/87fQFljT7OQ" target="_blank")
                    span Enlace Web
                    i.fas.fa-paperclip


    .row.justify-content-around.align-items-center(data-aos="zoom-in-up")
      .col-lg-12
        .row
          img(src='@/assets/curso/temas/tema5/tema5-img-03.svg', alt='Texto que describa la imagen').tema5-img-03
          img(src='@/assets/curso/temas/tema5/tema5-img-04.svg', alt='Texto que describa la imagen').tema5-img-04
      .clr.crd-white(data-aos="zoom-in-up")
        p.posicion-texto-t5.mt-3 Hablando específicamente de la Seguridad y Salud en el Trabajo enfocado en TI, podría decirse que el nivel de riesgo no sea alto o peor aún, que no existan riesgos que deban ser mitigados debido a la naturaleza misma de la actividad que se realiza, monitoreo de cámaras o del centro de datos, analizar la red, desarrollar aplicativos, utilizar el sistema de información para hacer consultas, entre otros; son algunas de las actividades del día a día, completamente diferentes a los que por ejemplo en la construcción se encuentran de manera mucho más evidentes y hacen que se consideren actividades de riesgo; sin embargo; algunas de los riesgos más relevantes dentro de TI son: 

    .row.mt-5
      h3 Seguridad y Salud en el Trabajo

    .row.infografica-b-01
      .col-lg-5
        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/tema5-img-05.svg', alt='Texto que describa la imagen')            

          div(x="100%" y="17%" tooltip="Ver Más" numero="+")
            .row.justify-content-around.align-items-center
              .col-lg-6
                h5 Fatiga visual o muscular
                p La realización de actividades en donde se deba adoptar la misma postura y fijar la vista sobre una pantalla por tiempo prolongado generan cansancio y fatiga, se deben realizar pausas activas que activen al individuo. Si se cuenta con una ventana se pueden hacer pausas y mirar objetos a diferentes distancias, así el ojo podrá ejercitarse, también si con frecuencia se levanta de su silla y realiza movimientos que activen el cuerpo, podrá garantizar que el cansancio y la fatiga no lleguen. Adicionalmente, implementar buenas posturas, garantizar el cumplimiento ergonómico en el puesto de trabajo pueden ser buenas prácticas que reducen daños físicos en el cuerpo humano, así la cabeza levantada, columna erguida, pies apoyados, rodillas en ángulo recto y brazos apoyados, son algunas de las prácticas que se deben aplicar a la hora de desarrollar las labores en oficinas. 
              .col-lg-6
                img(src='@/assets/curso/temas/tema5/tema5-img-06.svg', alt='Texto que describa la imagen')

          div(x="100%" y="37%" tooltip="Ver Más" numero="+")
            .row.justify-content-around.align-items-center
              .col-lg-6
                h5 Golpes o caídas
                p En el centro de datos existen elementos en el suelo, piso y espacio en general que pueden ocasionar golpes o generar caídas, se deben identificar estos factores de riesgo, marcarlos y en caso de ser posible eliminarlos, así los riesgos se reducen. También es importante resaltar que por ejemplo al caerse por un cable en el suelo, no solamente existe el riesgo del daño físico al individuo, también se pone en riesgo el sistema y su operación. ITIL, COBIT, RETIE, entre otros, dan parámetros, normas y estándares nacionales e internacionales para el manejo de cableado y garantizar su correcta ubicación según el cuarto de datos. 
              .col-lg-6
                img(src='@/assets/curso/temas/tema5/tema5-img-07.svg', alt='Texto que describa la imagen')

          div(x="100%" y="57%" tooltip="Ver Más" numero="+")
            .row.justify-content-around.align-items-center
              .col-lg-6
                h5 Contacto eléctrico
                p Es inevitable que al trabajar con equipos electrónicos se sufra un riesgo eléctrico. La electricidad puede ocasionar daños en cuatro maneras diferentes: choque eléctrico o electrocución, ignición de vapores inflamables, incendios por sobrecargas, caídas por electrocución, para evitar estos riesgos y sus perjudiciales consecuencias, se debe contar con las instalaciones adecuadas, además de realizar mantenimientos periódicos que garanticen su operabilidad. Respecto a los equipos eléctricos, se debe conocer y comprender su uso, mismo que deberá ser realizado por un experto y jamás permitir el acceso a zonas con peligro de descargas eléctricas como plantas o subestaciones a personal no autorizado. Puede consultar la guía RETIE colombiana para conocer más sobre este tema. 
              .col-lg-6
                img(src='@/assets/curso/temas/tema5/tema5-img-08.svg', alt='Texto que describa la imagen')

          div(x="100%" y="77%" tooltip="Ver Más" numero="+")
            .row.justify-content-around.align-items-center
              .col-lg-6
                h5 Carga mental
                p Factor presente en todas las actividades, se debe tener presente que la carga mental para una actividad que requiera fuerza o destrezas físicas será la misma a una actividad que requiere de la lógica, el pensamiento y la toma de decisiones permanentes; por tanto se puede determinar que el nivel de carga mental está directamente relacionado con la exigencia del trabajo que se desarrolle y las condiciones en las que se realice en conjunto con las características de cada individuo. Algunos de los factores que determinan la carga mental son: contenido del trabajo, las condiciones ambientales, los aspectos psicosociales y organizativos, el puesto de trabajo, las exigencias del cargo, capacidad de respuesta del individuo, además de los factores personales y las condiciones extralaborales. 
              .col-lg-6
                img(src='@/assets/curso/temas/tema5/tema5-img-09.svg', alt='Texto que describa la imagen')

    p.mt-3 Cumplir con lo establecido en el Sistema de Seguridad y Salud en el Trabajo, permiten tener condiciones favorables para la ejecución de las actividades cotidianas, además; garantizan que el individuo desarrolle sus funciones en espacios propicios para tal fin.

    h4.mt-3  Riesgos laborales 
    p.mt-3 Para ampliar los conceptos sobre los riesgos laborales del trabajo informático consulte el siguiente enlace:
    .row.mt-3
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://www.unir.net/ingenieria/revista/riesgos-laborales-informatica/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web]. UNIR Revista. (2020). ¿Cuáles son los riesgos laborales del trabajo informático? UNIR.  

    img(src='@/assets/curso/temas/tema5/tema5-img-decorativa-02.svg', alt='Texto que describa la imagen').tema5-decorativa-02
    img(src='@/assets/curso/temas/tema5/tema5-img-decorativa-03.svg', alt='Texto que describa la imagen').tema5-decorativa-03

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
