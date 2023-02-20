<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plan de contingencia

    .row.justify-content-around.align-items-center(data-aos="zoom-in")
      .col-lg-10
        img(src='@/assets/curso/temas/tema2/tema2-img-01.svg', alt='Texto que describa la imagen')
      .clr.crd-paleBlue2
        p.posicion-texto-crd2.mt-3.mb-3 En el funcionamiento y operación del centro de datos se deben tener en cuenta todas las variables que pueden afectar su normal operación; para garantizar una disponibilidad del 100% en su funcionamiento se deberá contar con equipos “contingencia” o de respaldo que permitan suplir un requerimiento puntual en caso de ser necesario.

    p.mb-3 Al momento de presentarse una falla, el equipo de contingencia entra en funcionamiento y el sistema sigue operando sin novedad alguna para el usuario final.         

    img(src='@/assets/curso/temas/tema2/tema2-img-decorativa-01.svg', alt='Texto que describa la imagen').tema2-decorativa-01
    img(src='@/assets/curso/temas/tema2/tema2-img-decorativa-02.svg', alt='Texto que describa la imagen').tema2-decorativa-02

    .slyderf-02.mb-3
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-02.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4              
            h2.text-center Contingencias
            p.text-center Las contingencias pueden ser físicas y también lógicas, se puede tener una planta eléctrica, un servidor de respaldo, un disco de respaldo, una conexión física de respaldo, una copia del sistema en la nube o un servidor virtualizado; incluso un centro de datos de respaldo que garantice la operatividad del sistema sin importar la falla que se presente.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-03.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4            
            h2.text-center Copias de seguridad
            p.text-center Para que las contingencias sean operativas deben contar la información actualizada así que el administrador del sistema deberá realizar copias de seguridad permanentes del sistema principal y replicar la información a la contingencia.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-04.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4              
            h2.text-center Copia de seguridad
            p.text-center Así al momento de fallar el sistema se pueda utilizar la copia de respaldo y no se vea afectada la integralidad de la información y la prestación del servicio. 
        
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-05.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4              
            h2.text-center Contingencias
            p.text-center Como se puede observar, las contingencias deberán estar pensadas de acuerdo a la infraestructura TI y como tal deberán suplir el sistema principal en caso de presentarse cualquier novedad.

    .row.mt-5
      h3 Herramientas de simulación
      
    .row.justify-content-around.align-items-center.mb-3
      .col-lg-9
        .cajon.color-primario.p-4.mt-4
          p A continuación, se darán ejemplos de algunas herramientas de simulación que permiten tener respaldo del sistema.

    p.mb-3 A continuación, se mencionan algunas herramientas de simulación para las redes sociales, virtualización y cargas eléctricas.

    .tarjeta.tarjeta--azul.p-4
      .slyderA-01
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Redes de datos
              p.mb-2  Aplicativos que permiten simular redes de datos con el fin de conocer su operación, equipos e infraestructura necesarias para su funcionamiento.
              p.mb-2 Ejemplos de herramientas de Simulación:
              p NetSim, Jimsim, KivaNS, Network Simulator, OMNET ++, Packet Tracer, OPNET Modeler, RouterSim Network Simulators, Toggit y WebNMS Simulación Toolkit, CORE, IMUNES., etc.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-img-06.png', alt='Texto que describa la imagen')(data-aos="zoom-out-down")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h5 Virtualización
              p.mb-3 Una máquina virtual permite tener un equipo host dentro de otro, es decir; un equipo físico se puede convertir en cuantos sea necesario según su arquitectura de hardware. Por lo tanto, a través de la virtualización un administrador TI puede tener la réplica del equipo principal en una máquina virtual y garantizar la continuidad en la operación del sistema ante cualquier anomalía
              p.mb-3 Ejemplos de herramientas de simulación:
              p Synology Virtual Machine Manager, Docker, VirtualBox, Azure, VMware Workstation Player / Pro, Parallels Desktop, Hyper-V, Windows Sandbox, VMware vSphere Enterprise, Citrix XenServer Free Edition, Proxmox, KVMetc.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-img-07.png', alt='Texto que describa la imagen')(data-aos="zoom-out-down")

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h5 Cargas eléctricas
              p.mb-3 Permiten conocer el campo eléctrico y el potencial requerido para la implementación de un sistema. Para los ejemplos, aunque algunas herramientas no son simulaciones, sí permiten conocer las variables que hacen parte del sistema eléctrico y garantizan que al momento de diseñar la infraestructura tecnológica se puedan controlar todas las variables.
              p.mb-3 Ejemplos de herramientas de simulación:
              p.mb-0 PhET, electrical formulator, metal prices, electrical calculations lite, topmatic,
              p.mb-0 two thirty volts, calculadora de costes de energía, electrotecnia (pack),
              p ley de ohm-calc, calculadora de caída de tensión, everycircuit, icircuit, ecomatic, home electrical safety check.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-img-08.png', alt='Texto que describa la imagen')(data-aos="zoom-out-down")

    h4.mt-3 Simulación en el diseño
    p.mt-3 Para conocer sobre la importancia de la simulación en el diseño de un centro de datos consulte: 
    .row.mt-3
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://www.datacenterdynamics.com/es/opinion/por-qu%C3%A9-simular-centros-de-datos/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web]. Khan, N. (2021) ¿Por qué simular un centro de datos? Retrieved August 29, 2022, from  

    .row.justify-content-around.align-items-center.mt-3 
      .col-lg-9
        .cajon.color-acento-contenido.p-4.mt-4(data-aos="flip-up")
          p Las herramientas de simulación son un recurso de gran ayuda para la gestión de los proyectos TI, también para evaluar el impacto en los cambios que se requieran realizar en la infraestructura TI, cargas, sobrecargas, comportamiento del sistema ante novedades como virus, caídas en la red, fallas eléctricas entre otros; por lo tanto, permite tener una visión amplia de la infraestructura TI y simular fallas en la misma con el fin de evitarlas.


</template>

<script>
export default {
  name: 'Tema2',
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
