<template>
  <div id="app">
  <v-app>
    <v-content>
      <v-container fluid pa-0>
        <br>
    <center><v-img src="../assets/uabc.png" height="130" width="100"></v-img></center>
        <v-layout row wrap>
  
          <v-flex md12 md8 id="sign-up-form-wrapper">
            <v-layout column align-center justify-center pa-3 mt-5>
      
                <div class="login-wrapper text-md-center">
                  <font class=".font-regular display-1">Universidad Autónoma de Baja California</font>
                  <div class="display-1 color">Portal de Alumnos</div>
                </div>
              <v-flex md12 class="form-wrapper">
                <v-text-field   label="Email" background-color="#f4f8f7" color="grey darken-2" prepend-inner-icon="mdi-email-outline"></v-text-field>
                <v-text-field  label="Password" background-color="#f4f8f7" color="grey darken-2" prepend-inner-icon="mdi-lock-outline"></v-text-field>
              </v-flex>
              <v-btn round large dark ripple color="teal"  @click="show = !show">Acceder</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

 <v-footer
    dark
    padless
    app
  >
    <v-card class="flex"> 
      <v-card-title class="teal">
      <img src="../assets/logouabc.png" class="footer">
        <p class="letra font-regular " img ="../assets/uabc">Universidad Autónoma <br> de Baja California</p>
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card>
  </v-footer>



  </v-app>
</div>
</template>

<script>
export default {


}
</script>
<style scoped>
.container {
  min-height: 530px;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(253deg, #40b09b 0, #3fb493 100%);
  color: white;
}



#sign-up-form-wrapper {
  position: absolute;
  height: 100vh;
  left: 18%;
  width:65%;
}
.color{
  color:#FFEB3B;
}
.letra{
  font-size: 13px;
  margin: 10px 20px 0 70%;
  
   
}
.footer{
margin-left:50px;
padding:0;
width:80px;
height:70px;
}
</style>