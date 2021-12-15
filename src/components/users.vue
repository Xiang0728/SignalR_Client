<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-badge dot color="green">
         <v-icon v-bind="attrs"
          v-on="on"
          @click="GetUsers">mdi-account
        </v-icon>
       </v-badge>
      </template>

      <v-card>
          <v-card-title> Online Users</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">           
              <v-list-item v-for="Users in UsersList" :key="Users">
                <v-icon large>{{ UserIcon }}</v-icon>
                  {{Users}} 
              </v-list-item>  
          </v-card-text>

      <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
        
          </v-card-actions>
      </v-card>
    </v-dialog>

  </v-row>
</template>

<script>
import { apiGetUsers } from '../utils/request';
  export default {
    data () {
      return {
        UsersList:[],
        dialog: false,
        UserIcon:'mdi-account-circle'
      }
    },

    methods:{
      GetUsers(){
        apiGetUsers().then((res)=>{
          
          this.UsersList=res.data
        })
      }
    }
  }
</script>