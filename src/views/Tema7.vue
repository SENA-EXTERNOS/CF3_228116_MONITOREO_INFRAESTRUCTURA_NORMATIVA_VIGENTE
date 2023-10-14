<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Bitácoras e inventarios

    img(src='@/assets/curso/temas/tema7/tema7-img-decorativa-03.svg', alt='Texto que describa la imagen').tema7-decorativa-03
    .row.justify-content-around.align-items-center.g-0
      .col-lg-4(data-aos="zoom-out")
        img(src='@/assets/curso/temas/tema7/tema7-img-01.png', alt='Texto que describa la imagen').tema7-img-01.w-100
      .col-lg-8(data-aos="zoom-out")
        .gradient.p-4.h-100
          .bg-white.p-2
            p.p-3.mt-3.mb-3 La palabra Bitácora proviene del francés #[i Bitacle] y su principal uso fue en la vida marítima. Corresponde a un instrumento que se fijaba a la cubierta, cerca del timón y de la aguja náutica que facilitaba la navegación en océanos desconocidos, era un cuaderno donde se narraban todos los acontecimientos que se presentaban, así quedaba constancia de cada uno de ellos. En la actualidad obtuvieron gran apogeo gracias a los #[i weblogs] o blogs que son bitácoras virtuales publicadas en Internet.

    p.mt-3 A continuación, se explica la importancia de tener registro de todos los eventos en las bitácoras donde se hace un regimiento y control en el campo de TI. 


    .tarjeta.tarjeta--azul.p-4
      .slyderA-02
        SlyderA(tipo="b")
          .row
            .col-md-5.mb-4.mb-md-0
              h5.mb-2 Registro histórico 
              p Las bitácoras tienen la función de guardar el día a día como un registro histórico que garantiza el seguimiento y control, se encuentra siempre organizado de manera cronológica y su consulta debe ser de fácil acceso. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-03.png', alt='Texto que describa la imagen')(data-aos="fade-right")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-5.mb-4.mb-md-0
              h5.mb-2 Recopilar datos
              p En el campo de Infraestructuras TI, las bitácoras son de gran ayuda, permiten recopilar los históricos de cada dispositivo y así administrarlo para prevenir y/o corregir fallas que puedan afectar al sistema.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-04.png', alt='Texto que describa la imagen')(data-aos="fade-right")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-5.mb-4.mb-md-0
              h5.mb-2 Hoja de mantenimiento
              p Para dar un ejemplo de uso, si en la infraestructura TI ocurre un siniestro y es necesario acudir a la aseguradora para recuperar los activos que se vieron afectados, ésta solicitará al administrador TI la bitácora o hoja de mantenimiento de los mismos para garantizar su correcto uso, actividades de mantenimiento y reparaciones hechas; así podrá calcular el valor actual de cada dispositivo y proyectarlo de acuerdo a los criterios de la póliza, ofreciendo una compensación monetaria que permita recuperarlos nuevamente. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-05.png', alt='Texto que describa la imagen')(data-aos="fade-right")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-5.mb-4.mb-md-0
              h5.mb-2 Inventarios
              p Con respecto a los inventarios no solo permiten conocer la cantidad de dispositivos que tiene una organización, su ubicación, valor de compra y depreciación; también una correcta gestión de inventarios garantiza la correcta administración de la infraestructura física de la organización y su futuro éxito.
            .col-md-6              
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-06.png', alt='Texto que describa la imagen')(data-aos="fade-right")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-5.mb-4.mb-md-0
              h5.mb-3 Registro de bienes
              p Inventario hace referencia a un documento o aplicación en el cual se registran todos los bienes tangibles e intangibles de la empresa, así en cada momento se conoce el patrimonio de la organización.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-07.png', alt='Texto que describa la imagen')(data-aos="fade-right")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h5.mb-2 Los inventarios pueden ajustarse de acuerdo a las necesidades de cada empresa así:
              .row 
                .col-lg-6
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span A
                      | Físicos.
                    li 
                      .lista-ol--cuadro__vineta
                        span B
                      | Intangibles.
                    li 
                      .lista-ol--cuadro__vineta
                        span C
                      | Materias Primas.
                    li 
                      .lista-ol--cuadro__vineta
                        span D
                      | Productos en proceso de fabricación.
                    li 
                      .lista-ol--cuadro__vineta
                        span E
                      | Productos Terminados.
                    li 
                      .lista-ol--cuadro__vineta
                        span F
                      | Suministros de fábrica.
                    li 
                      .lista-ol--cuadro__vineta
                        span G
                      | Seguridad o reserva.
                    li 
                      .lista-ol--cuadro__vineta
                        span H
                      | Desacoplamiento.                     
                .col-lg-6
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span I
                      | En tránsito.
                    li 
                      .lista-ol--cuadro__vineta
                        span J
                      | De ciclo.
                    li 
                      .lista-ol--cuadro__vineta
                        span K
                      | Estacional.
                    li 
                      .lista-ol--cuadro__vineta
                        span L
                      | En ductos.
                    li 
                      .lista-ol--cuadro__vineta
                        span M
                      | Para la especulación.
                    li 
                      .lista-ol--cuadro__vineta
                        span N
                      | De naturaleza regular o cíclica.
                    li 
                      .lista-ol--cuadro__vineta
                        span O
                      | De seguridad.
                    li 
                      .lista-ol--cuadro__vineta
                        span P
                      | De existencias obsoletas.                    

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-08.png', alt='Texto que describa la imagen')(data-aos="fade-right")

    .row.mt-5
      h3 Clasificación de los Inventarios

    p.mt-3 A continuación, se muestra la clasificación de inventarios según tipo de inventario, producto, función y logística.

    .crd-hover-2
      .row.justify-content-center.mb-5.mt-4
        .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema7/tema7-img-09.png", alt="alt")
            .crd_hover_txt--body
              h5.text-center.mb-2 Tipo de inventario
              p.text-center Según su ubicación: físicos, intangibles.

        .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema7/tema7-img-10.png", alt="alt")
            .crd_hover_txt--body
              h5.text-center.mb-2 Tipo de producto
              p.text-center Materias primas, productos en proceso de fabricación, productos terminados, suministros de fábrica.

        .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema7/tema7-img-11.png", alt="alt")
            .crd_hover_txt--body
              h5.text-center.mb-2 De acuerdo a su función
              p.text-center Seguridad o reserva, desacoplamiento, en tránsito, de ciclo, estacional. 
        .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema7/tema7-img-12.png", alt="alt")
            .crd_hover_txt--body
              h5.text-center.mb-2 Según la logística
              p.text-center Ductos, especulación, naturaleza regular o cíclica, de seguridad, existencias obsoletas o muertas.

    .row.mt-5
      h3 Paso a paso para implementar un inventario

    //- img(src='@/assets/curso/temas/tema7/tema7-img-decorativa-01.svg', alt='Texto que describa la imagen').tema7-decorativa-01
    //- img(src='@/assets/curso/temas/tema7/tema7-img-decorativa-02.svg', alt='Texto que describa la imagen').tema7-decorativa-02

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        img(src='@/assets/curso/temas/tema7/tema7-img-13.svg', alt='Texto que describa la imagen')
      .col-lg-5
        p.mb-2 La gestión de activos hace referencia a la implementación de un aplicativo que permita ejercer control sobre los activos y garantice que a través de consultas se conozca su ubicación, valor real, depreciación, entre otros; por último, la administración se aplica de acuerdo con el método de control de inventarios que se implemente y rigurosidad con la que el equipo de trabajo hará seguimiento. 
        p Lo anterior se puede resumir de la siguiente manera: 

    p.mt-3 Paso a paso para implementar un inventario:

    .row.justify-content-center.align-items-center.mt-5.index-dos
      .col-10
        img(src="@/assets/curso/temas/tema7/tema7-img-14.svg")  

    .row.justify-content-around.align-items-center.mt-3 
      .col-lg-9
        .cajon.color-primario1.p-4
          p Para iniciar la implementación de un inventario se debe en primera medida identificar todos los elementos que componen los activos tangibles e intangibles de la organización, seguido se debe contar con un lugar en el cual se puedan almacenar los activos que no están en uso, tenerlos disponibles y en custodia; además, de tener un espacio físico en el cual se pueda ubicar el equipo de trabajo que garantice el seguimiento y control de cada uno de ellos.


    p.mt-3 A continuación, se detalla los sistemas de control de inventarios. 

    .row.justify-content-around.align-items-center.mt-3 
      .col-lg-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="ABC")
            .col-md-6.mb-4.mb-md-0
              p.text-small Calificación de mercancía por valor y cantidad.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-15.svg', alt='Texto que describa la imagen')

          .row(numero="2" titulo="PEPS")
            .col-md-6.mb-4.mb-md-0
              p.text-small Identificación de artículos del inventario de acuerdo a su fecha de ingreso, así los más antiguos deben tener prioridad para su salida.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-16.svg', alt='Texto que describa la imagen')

          .row(numero="3" titulo="EOQ")
            .col-md-6.mb-4.mb-md-0
              p.text-small Identifica un tope mínimo de pedido que garantice el funcionamiento del negocio pero que no requiera de gran inversión o cantidad innecesaria de inventario. 

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-17.svg', alt='Texto que describa la imagen')

          .row(numero="4" titulo="UEPS")
            .col-md-6.mb-4.mb-md-0
              p.text-small Priorización de ventas según el orden de ingreso de los artículos en <em>stock</em>.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-18.svg', alt='Texto que describa la imagen')

          .row(numero="5" titulo="Conteo cíclico")
            .col-md-6.mb-4.mb-md-0
              p.text-small Conteo regular de las existencias clasificados por lotes.
                      
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-19.svg', alt='Texto que describa la imagen')

          .row(numero="6" titulo="Precio ponderado")
            .col-md-6.mb-4.mb-md-0
              p.text-small Se crea un promedio del lote sin importar su fecha de ingreso o salida. 

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-img-20.svg', alt='Texto que describa la imagen')


    .row.my-5
      h3 Actividad integradora

      p Utilice las técnicas de comunicación escrita para crear un informe en el cual dé a conocer el inventario existente de la Alcaldía de los Patios del Norte de Santander, emita un concepto técnico según lo observado en donde pueda realizar una clasificación de los activos fijos tangibles e intangibles y de acuerdo con los sistemas de control de inventario, defina cuál sería el más apropiado para la alcaldía argumentando su respuesta. 

      p Técnicas de redacción y ortografía. 
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            //- .col-3.col-sm-2.col-lg-1
            //-   img(src="@/assets/componentes/ej-02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0
                  h3.mb-1 Sistema de control de inventarios
                  p.text-small Alcaldía Municipal de Chaparral, Tolima. (2023). Matriz de inventario de activos de información. 
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-contenido(href="https://www.google.com/url?client=internal-element-cse&cx=17378af97b20a9ddf&q=https://www.lospatios-nortedesantander.gov.co/Conectividad/InformesGEL/Matriz%2520de%2520Inventario%2520Activos%2520de%2520Informaci%25C3%25B3n%25202016.xlsx&sa=U&ved=2ahUKEwjVxpDPxOz5AhXWmIQIHW0OAb4QFnoECAcQAQ&usg=AOvVaw3p-XH2TGFkKA_eqdkq77C9" target="_blank" type="application/pdf")
                    span Abrir enlace
                    i.fas.fa-link
    .row.justify-content-around.align-items-center.mt-2
      .col-lg-9
        .cajon.color-primario1.p-4
          p.mb-2 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, como son la síntesis, la actividad didáctica, material complementario, entre otros.



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
