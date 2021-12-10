<template>
  <v-container>
  
        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="info" small fab @click="darkMode">
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode On</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="info" small fab @click="darkMode">
              <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode Off</span>
        </v-tooltip>
    
  </v-container>
</template>
<script>
  
  export default {
    name:'Setting',
    created(){     
      document.title="設定"
      if(this.$store.state.token=="")
        {
          this.$router.push({path:'/Login'}); 
        }
    },
    data: () => ({
      dark: false
    }),
    methods: {
      darkMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
    }
  }
 
</script>
