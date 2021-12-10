<template>
  <v-container>

    Friend
  </v-container>
</template>
<script>
//import { apiUserToken } from '../utils/request';
  export default {
    
    name:'Friend',
    created(){
      document.title="好友"
      
      if(this.$store.state.token=="")
      {
        this.$router.push({path:'/Login'}); 
      }

      //apiUserToken()

      }
      
      

   
  }
</script>
