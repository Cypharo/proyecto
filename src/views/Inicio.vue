<template>
  <div>
     <v-toolbar
       :extended="extended"
       :prominent="prominent"
       :dense="dense"
       :collapse="collapse"
       :flat="flat"
       :src="bg ? 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg' : undefined"
       :extension-height="extensionHeight"
     >
       <template v-if="extendedSlot" #extension>
         <v-toolbar-items>
           <v-btn text>Link 1</v-btn>
           <v-btn text>Link 2</v-btn>
           <v-btn text>Link 3</v-btn>
         </v-toolbar-items>
       </template>
<img src="../assets/uabc.png" width="70" height="93" class="posicion" >
       <v-toolbar-title>
       <center><font size="2"><b>Universidad Autónoma de Baja California<br>Coordinación de Formación Básica<br>Coordinación de Formación Profesional y Vinculación Universitaria<br>Sistema Integral de Servicio Social</b></font></center></v-toolbar-title>
       <v-spacer></v-spacer>

       <v-toolbar-items>
         <v-btn text>Taller de Inducción</v-btn>
         <v-btn text router to="/estadoAlumno">Programas de Servicio Social</v-btn>
         <v-btn text>Configuración</v-btn>
       </v-toolbar-items>

       <template v-if="$vuetify.breakpoint.smAndUp">
         <v-btn icon>
           <v-icon>mdi-export-variant</v-icon>
         </v-btn>
       </template>
     </v-toolbar>
      
   </div>
</template>
<script>
  export default {
    data: () => ({
      extended: true,
      extendedSlot: false,
      prominent: false,
      dense: false,
      collapse: false,
      flat: true,
      bg: true,
      extensionHeight: 70,
    }),
  }
</script>

<style>
  .change-font {
    font-family: "Arial", Helvetica, sans-serif;
  }
  .posicion{
    margin-top: 50px;
  }
</style>