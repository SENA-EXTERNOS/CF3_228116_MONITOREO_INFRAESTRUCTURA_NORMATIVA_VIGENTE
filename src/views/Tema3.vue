<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evaluación de causas

    p.mt-3 El buen uso de un centro de datos no está ligado solamente a su infraestructura física, ni al control de las variables, también está estrechamente ligado al seguimiento, administración y monitoreo que se realice a cada uno de sus componentes con el fin de poder realizar evaluación y seguimiento al desempeño del mismo. 
    
    .row.mt-5
      h3 Ejemplo aplicado a un caso TI

    img(src='@/assets/curso/temas/tema3/tema3-img-decorativa-01.svg' alt='AvatarTop').tema3-decorativa-01

    .bloque-texto-g.color-primario.p-3.p-sm-1.p-md-5.mt-5(data-aos="fade-right")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-img-01.svg')})`}"
      )
      .bloque-texto-g__texto.p-2
        p.mb-0 Al momento de percatarse de una falla del equipo de cómputo que le permite acceder al sistema de información, un usuario registra un #[i ticket] solicitando apoyo para su reparación, mismo que llega directamente al equipo de mesa de ayuda y este a su vez, realiza la asignación de acuerdo con su prioridad; el técnico delegado para resolver el <i>ticket</i> contacta al usuario, realizan un acuerdo para la revisión e inmediatamente trabaja en función de su solución. 

    .row.mt-5
      h3 Servicio <em>HelpDesk</em>
    .row.justify-content-around.align-items-center.mb-3
      .col-lg-7
        .acordionA-01
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Reparación del equipo dañado")
              .col-md-12.mb-4.mb-md-0
                p El técnico requiere de insumos para reparar el equipo, así que instala la contingencia, solicita al departamento de compras el repuesto y una vez llega, resuelve el incidente en el equipo, acuerda nuevamente con el usuario la instalación del equipo principal, documenta el proceso de solución del <i>ticket</i> y lo finaliza; por último, el usuario hará una calificación del servicio al técnico.                                 

            .row(titulo="Análisis de solución del requerimiento")
              .col-md-12.mb-4.mb-md-0
                p.mb-2 Del anterior ejemplo se podrían obtener los siguientes indicadores: 
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span A
                    | Tiempo en la asignación del servicio. 
                  li 
                    .lista-ol--cuadro__vineta
                      span B
                    | Tiempo en contactar al usuario. 
                  li 
                    .lista-ol--cuadro__vineta
                      span C
                    | Tiempo en la solución del servicio. 
                  li 
                    .lista-ol--cuadro__vineta
                      span D
                    p.mb-0 Costo del #[i ticket] (mano de obra, repuestos, etc.). 
                  li 
                    .lista-ol--cuadro__vineta
                      span E
                    | Calificación del servicio. 
                  li 
                    .lista-ol--cuadro__vineta
                      span F
                    | Cantidad de servicios atendidos por hora, día, mes, año, etc.                                                        

            .row(titulo="Puntos a mejorar")
              .col-md-12.mb-4.mb-md-0
                p.mb-2 Como se puede apreciar, los indicadores permiten llevar control y de su análisis se obtienen datos valiosos para el área TI como lo son: 
                ul.color-i
                  li
                    i.fas.fa-check
                    |             Acciones de mejora. 
                  li
                    i.fas.fa-check
                    |             Implementación de buenas prácticas. 
                  li
                    i.fas.fa-check
                    |             Acciones correctivas al proceso TI. 
                  li
                    i.fas.fa-check
                    |             Acciones correctivas al proceso de prestación de servicio. 
                  li
                    i.fas.fa-check
                    |             Solicitar capacitación sobre atención al usuario, tiempos de respuesta, normatividad, ITIL, etc.                                          

            .row(titulo="Indicadores")
              .col-md-12.mb-4.mb-md-0
                p En cualquier actividad se puede implementar un indicador, realizar seguimiento y aplicar las retroalimentaciones necesarias según los requerimientos garantiza que se corrijan las novedades, ofrecer un mejor servicio y mantener la infraestructura TI en condiciones óptimas de funcionamiento. 

      .col-lg-5
        img(src='@/assets/curso/temas/tema3/tema3-img-02.svg' alt='AvatarTop')(data-aos="flip-right") 

    p.mt-3 Las recomendaciones de ASHRAE permiten tener indicadores de seguimiento y control para los #[em data center], por citar un ejemplo el desempeño del enfriamiento está regulado por la métrica PUE (#[i Power Usage Effectiveness]) que mide la eficiencia energética de la infraestructura del <i>data center</i>.
    
    .row.mt-5
      h3 Indicadores de seguimiento y control

    img(src='@/assets/curso/temas/tema3/tema3-img-decorativa-02.svg' alt='AvatarTop').tema3-decorativa-02
    img(src='@/assets/curso/temas/tema3/tema3-img-decorativa-03.svg' alt='AvatarTop').tema3-decorativa-03

    .row.justify-content-around.align-items-center.mb-3
      .col-lg-5
        img(src='@/assets/curso/temas/tema3/tema3-img-03.svg' alt='AvatarTop')(data-aos="flip-up")     

      .col-lg-7
        .acordionA-02
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Ambiente físico <i>data center</i>")
              .col-md-12.mb-4.mb-md-0
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span A
                    | Razón PUE: define la banda de operación como representación del índice de eficiencia energética.
                  li 
                    .lista-ol--cuadro__vineta
                      span B
                    | Conformidad Térmica TI: toma la operación de los equipos TI a temperaturas y condiciones normales de funcionamiento. 
                  li 
                    .lista-ol--cuadro__vineta
                      span C
                    | Resiliencia Térmica TI: operación de equipos TI ante una eventualidad o mantenimiento del sistema de aire acondicionado.  

            .row(titulo="Estándares internacionales")
              .col-md-12.mb-4.mb-md-0
                p Adoptar los estándares internacionales garantizan la ejecución de políticas empresariales enfocadas en buenas prácticas, también se pueden crear indicadores de acuerdo a las necesidades organizacionales mucho más sencillos y que permiten realizar seguimiento al centro de datos y al personal TI encargado de su administración. 

            .row(titulo="Indicadores")
              .col-md-12.mb-4.mb-md-0
                .row
                  .col-lg-5
                    ul.color-i
                      li
                        i.fas.fa-check
                        |             Tiempo de disponibilidad. 
                      li
                        i.fas.fa-check
                        |             Cantidad de caídas al año. 
                      li
                        i.fas.fa-check
                        |             Costos de operación. 
                      li
                        i.fas.fa-check
                        |             Cantidad de correctivos aplicados en un período de tiempo determinado, etc.  
                  .col-lg-7
                    ul.color-i
                      li
                        i.fas.fa-check
                        |             Consumo energético. 
                      li
                        i.fas.fa-check
                        |             Tiempo de respuesta a las eventualidades. 
                      li
                        i.fas.fa-check
                        |             Cantidad de alertas.
                      li
                        i.fas.fa-check
                        |             Equipo TI encargado de realizar las actividades y la cantidad de actividades resueltas en un periodo de tiempo establecido.          
            .row(titulo="Estadísticas <em>data center</em>")
              .col-md-12.mb-4.mb-md-0
                p Así, se podrán llevar datos estadísticos sobre el centro de datos y su funcionamiento, entender su dinámica y evitar fallas; también personalizar los indicadores de gestión del centro de datos de acuerdo a las dinámicas organizacionales propias de cada institución.
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
