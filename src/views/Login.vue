<template >
  <v-container class="main">
    <v-layout justify-center align-center class="content">

      <v-form >   

        <v-text-field label="Account"></v-text-field>
        <v-text-field label="Password"></v-text-field>
        
        <v-row>        
          <v-col>           
            <v-btn small color="primary" disabled>註冊</v-btn>              
          </v-col>
          <v-col>
            <v-btn small color="primary" disabled>登入</v-btn>
          </v-col>
        </v-row>

        <div id="google-sign-in-button"></div>

      </v-form>

    </v-layout>
  
   
  </v-container>
</template>

<script>
import axios from 'axios';
import store from '../store'
  export default {
    name:'Login',
    components: {
     
   },

   data () {
      return {

      }
    },
    
    created(){
      document.title="登入"
      
    },
    mounted() {
      window.gapi.signin2.render('google-sign-in-button', {
        scope: 'profile email',
        width: this.width,
        height: this.height,
        longtitle: true,
        theme: 'light',
        onsuccess: this.signIn,
        onfailure: () => {}
      });
  },
    methods:{
      signIn(googleUser) {
        let id_token = googleUser.getAuthResponse().id_token;
        let url = `/Google/UserInfo?Token=${id_token}`;
        axios({
          method: "get",
          url: url,
          }) .then((res) => {    
            if(res.status==200)
            {
              store.dispatch('updateName',googleUser.Au.VX)
              store.dispatch('updateToken',id_token)
              store.dispatch('updateAPIToken',res.data)
              this.$router.push({path:'/Home'});
            }
            else{
              
            }
          })
        .catch((ex) => {     
            console.log(ex)    
          });
  
      },
  
    },
    

    
  }
  
</script>

<style>

.main,.content{
  width: 100%;
  height: 100%;
}

#google-sign-in-button{
  margin-top: 15px;
}



</style>