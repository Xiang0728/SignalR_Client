<template>
  <v-app>
    <v-main class="MainContent">
      
      <v-row id="MainGrid" >
        <v-col v-if="isLogin" cols="2">
          <Menu></Menu>
        </v-col >
     
        <v-col>
          
          <router-view />
        </v-col>
       </v-row>

    </v-main>

   
  </v-app>
</template>

<script>

//import * as signalR from '@aspnet/signalr'
import Menu from '@/components/menu.vue';

export default {
  name: "App",
  components:{
    Menu,
  
  },

  data () {
      return {
        isLogin:false
      } 
    },
    created(){
     
        window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
        client_id: '285097445447-8iqs2d21rlb66loq8ufp2devrnouhaqq.apps.googleusercontent.com',
        });
      });
       
    },
    watch: {
      '$store.state.token':function(){       
        if(this.$store.state.token!="")
        {
          this.isLogin=true;
        }
        else
        {
          this.isLogin=false;
        }
      }
    }
    

};
</script>

<style >
  html,body,#MainGrid{
    
    height: 100%;
    padding: 0px;
    margin: 0%;

  }

  .MainContent123{
   
    background-color: #fffcf4;
  }

</style>


