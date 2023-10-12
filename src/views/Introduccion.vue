<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .clr-background-1
      .row.justify-content-around.align-items-center.mt-5 
        .col-lg-6
          .clr-background-2
            p.posicion-texto-intro.mb-3 Cada edificación posee un diseño que lo hace único, por ello podemos reconocer en fotografías el Burj Khalifa en Emiratos Árabes o el One World Trade Center ubicado en Estados Unidos, cada arquitecto plasma en ellos un patrón que permite integrarlo al contexto en el que se encuentre; de la misma manera diseñará un espacio en el cual se controle toda la parte lógica del edificio en un solo espacio y para ello se deben tener presentes las normativas y estándares internacionales que permitan su administración y control evitando el colapso de todo el sistema de información.  
            p.posicion-texto-intro Este componente formativo aborda la temática del monitoreo del centro de datos según la normatividad vigente; a través de la apropiación de conceptos claves, se reconocerán los estándares internacionales que permiten administrar las variables del centro de datos, así evitar caídas del sistema y errores humanos que afecten el normal funcionamiento y operación de la empresa. 
        .col-lg-6
          img(src='@/assets/curso/intro/intro-img-03.svg', alt='Texto que describa la imagen').img-intro-01(data-aos="zoom-in-right") 

    //- img(src='@/assets/curso/intro/intro-decorativa-01.svg', alt='Texto que describa la imagen').intro-decorativa-01

    .row.justify-content-center.align-items-center
      .col-lg-11
        .cajon.color-acento-botones.p-4.mt-4
          p Comprender la importancia de las contingencias, evaluar las causas de los incidentes, aplicar buenas prácticas en el ejercicio administrativo del centro de datos, llevar bitácoras e inventarios de los equipos que integran la infraestructura TI, además de reconocer el correcto manejo de residuos, son algunos de los temas que serán tratados. 

    img(src='@/assets/curso/intro/intro-decorativa-02.svg', alt='Texto que describa la imagen').intro-decorativa-02

    p.mt-4 Extendemos una invitación a leer el material y apropiarse de los conceptos aquí inmersos, serán de gran aporte en su formación y le permitirán reconocer y aplicar las normativas vigentes para el monitoreo a los centros de datos, implementar buenas prácticas de seguridad y salud en el trabajo, además del manejo medioambiental de los residuos. 
    p.mt-3 En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!
    p ¡Bienvenido! 

    .row
      figure.mb-5.mt-3
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/bmeFML_dR_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
