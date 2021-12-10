<template>
  <v-container>
 
 
 <v-card max-width="100%" >
    <v-card-title class="white--text blue darken-4">
      User Directory
    </v-card-title>


    <v-divider></v-divider>

    <v-virtual-scroll
      :items="GetMessage"
      :item-height="60"
      height="710" 

    >
    <template v-slot:default="{ item }">
      <v-list-item-content>
        <v-list-item-title :key="item.Msg" >
         {{item.Name}} : <v-chip >  {{item.Msg}}</v-chip>       
        </v-list-item-title>
      </v-list-item-content>
    </template>
    </v-virtual-scroll>
     
  </v-card>
  
    <v-text-field solo label="Message" v-model="Msg" @keyup.enter="SendMsg" height="80px"></v-text-field>

   <Users />
  </v-container>
</template>

<script>
import Users from '@/components/users.vue';
import {signal} from '../utils/signalR'

  export default {
    name:'Home',
    components: {
     Users
   },

  data () {
      return {
        GetMessage:[],
        Msg:'',
        UserName:'',
        signalID:''
      }      
  },
    
  created(){
    document.title="首頁"

    if(this.$store.state.token=="")
    {
      this.$router.push({path:'/Login'}); 
    }
    else
    {
      let _this=this
      this.UserName=this.$store.state.name;
      
      signal.start().then(()=>{          
        _this.GetMessage.push({Name:"系統",Msg:"連線成功"})
      })
      .catch((ex) => {     
        console.log(ex)    
      });
  

      signal.on('SendMessage', function(getName,getMsg) {
        
        _this.GetMessage.push({Name:getName,Msg:getMsg})         
      }); 
        
    }
  },

  methods:{
    SendMsg(){
      
      signal.invoke("GetMessage",this.UserName,this.Msg)      
        this.Msg="";
      
    }
  },
    
}
  
</script>

