<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Uso de recursos medioambientales

    img(src='@/assets/curso/temas/tema4/tema4-img-decorativa-01.svg' alt='AvatarTop').tema4-decorativa-01

    .row.justify-content-around.align-items-center.mb-3
      .col-lg-11
        .row.justify-content-around.align-items-center.mb-3
          .col-lg-6
            img(src='@/assets/curso/temas/tema4/tema4-img-01.svg' alt='AvatarTop').index-dos
          .col-lg-6
            p El uso indiscriminado de los recursos naturales por parte del hombre ha generado impactos negativos en el medio ambiente, las malas prácticas han contaminado ríos y recursos naturales valiosos; con el pasar de los años esas malas prácticas han llegado a un nivel que requieren intervención por entidades de control con el fin de regularlas.

    p.mt-3.mb-3 Una normatividad ambiental establece acuerdos entre diferentes sectores sociales generando disposiciones legales que regulan los niveles y uso de las sustancias contaminantes, a su vez cuales son aceptables y seguras para el ser humano y el medio ambiente. 


    .tarjeta.tarjeta--azul.p-4
      .slyderA-02
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h5.mb-2 Para Colombia la legislación ambiental vigente es: 
              ul.color-i
                li
                  i.fas.fa-check
                  | Ley de reserva forestal y protección de suelos y agua.
                li
                  i.fas.fa-check
                  | Ley para crear el Certificado de Incentivo Forestal CIF.
                li
                  i.fas.fa-check
                  | Ley para la protección de la flora colombiana. 
                li
                  i.fas.fa-check
                  | Ley que consagra el derecho de todas las personas residentes en el país para gozar de un ambiente sano.
                li
                  i.fas.fa-check
                  | Régimen de aprovechamiento forestal y acuerdos regionales con este fin.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema4/tema4-img-02.png', alt='Texto que describa la imagen')(data-aos="flip-right")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h5.mb-2 Normatividad ambiental
              p Es la encargada de regular las buenas prácticas que permiten garantizar la conservación del medio ambiente y la protección del ser humano. 
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema4/tema4-img-03.png', alt='Texto que describa la imagen')(data-aos="flip-right")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h5 Normatividad:
              p.mb-2 Para la disposición de los componentes electrónicos en Colombia se cuentan con las siguientes normativas:

              p.mb-2 Decreto 284 de 2018: reglamenta la gestión integral que se debe dar a los residuos y aparatos eléctricos y electrónicos más conocidos como RAEE, para prevenir y minimizar los impactos adversos al ambiente. 

              p.mb-2 Ley 1672 de 2013: expide los lineamientos para adoptar la política de gestión integral de residuos y aparatos eléctricos y electrónicos RAEE en Colombia.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema4/tema4-img-04.png', alt='Texto que describa la imagen')(data-aos="flip-right")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h5.mb-3 Residuos electrónicos:
              p Tanto el decreto 248 como la ley 1672, regulan el manejo de residuos electrónicos y su clasificación según su disposición en elementos aprovechables y no aprovechables, es decir, para la disposición final de los residuos eléctricos y electrónicos, estos se deben clasificar y disponer en lugares especialmente seleccionados y diseñados para evitar la contaminación, daños y riesgos a la salud humana y al medio ambiente, la ley 1672 también advierte: “En todo caso, quedará prohibida la disposición de Residuos de Aparatos Eléctricos y Electrónicos RAEE en rellenos sanitarios”. 
            .col-md-5           
              figure
                img(src='@/assets/curso/temas/tema4/tema4-img-05.png', alt='Texto que describa la imagen')(data-aos="flip-right")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h5.mb-3 Manejo de residuos:
              p Es importante reconocer que no solo las empresas tienen obligación con la disposición de los RAEE, “los usuarios y consumidores también deberán entregar dichos elementos en sitios dispuestos para tal fin, además de asumir la corresponsabilidad social con la gestión integral de RAEE, reconocer y respetar el derecho de todos los ciudadanos a un medio ambiente saludable” (Ley 1672 de 2013). Por ello en lugares públicos como centros comerciales se han creado espacios para la correcta disposición final de los residuos tecnológicos, lámparas, baterías, celulares, portátiles, entre otros. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/tema4-img-06.png', alt='Texto que describa la imagen')(data-aos="flip-right")

    h4.mt-5 Normatividad ambiental en Colombia
    p.mt-3 Para conocer la evolución de la normatividad ambiental en Colombia consulte el siguiente enlace: 
    
    .row.mt-3
      .col-lg-8
        a.anexo.mb-4.mb-lg-0(href="https://www.minambiente.gov.co/lideres-ambientales/normativa-ambiental/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web]. Normatividad Ambiental Vigente en Colombia 2022 - Biblioteca SST. (2020). Biblioteca Virtual de Seguridad y Salud en el Trabajo; Biblioteca Virtual SST. 

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
