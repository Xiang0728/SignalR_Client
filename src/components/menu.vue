<template>
   
   <v-navigation-drawer >


    <v-list-item >
      <v-list-item-content >
        
            <v-list-item-icon >
              <v-icon x-large>{{ UserIcon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-h6"> {{UserName}}</v-list-item-title>
            </v-list-item-content>
                            
      
      </v-list-item-content>
    </v-list-item>
        
    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="item in items" :key="item.title" @click="$router.push({ path: item.route })" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>

      <v-list-item link>

          <v-list-item-icon>
          <v-icon>{{LogOutIcon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title @click="Logout">登出</v-list-item-title>
        </v-list-item-content>

      </v-list-item>

    </v-list>
   </v-navigation-drawer>


   
   
</template>

<script>
import {signal} from '../utils/signalR'
export default {

  name: "Menu",
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home', route:'Home'},
          { title: 'Friend', icon: 'mdi-account-supervisor' ,route:'Friend'},
          { title: 'Setting', icon: 'settings',route:'Setting' },
        ],
        UserIcon:'mdi-account-circle',
        LogOutIcon:'mdi-logout',
        UserName:""
        
      }
    },
    created(){
      
        this.UserName=this.$store.state.name
      
    },
     watch: {
       '$store.state.name':function(){
         this.UserName=this.$store.state.name
       }
    },
     methods:{
      async Logout() {
        try {
          const isLogout = window.confirm('確定要登出');
          if (isLogout) {
            const auth2 = window.gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
              signal.stop();
              this.$store.dispatch('updateToken',"")          
              this.$router.push({path:'/Login'}); // 回到登入頁
            });
          
          }
        } 
        catch (error) {
          if (error instanceof Error) {
            window.alert(error.messages);
          } else {
            window.alert(error.detail);
          }
        }
      },
    },
    
  
};
</script>

<style scoped>

</style>
