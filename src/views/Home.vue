<template>
  <v-container>
 
 
    <v-card max-width="100%" >
    
      <v-toolbar
          color="indigo"
          dark>
       
          <v-toolbar-title style="width:95%">Hall</v-toolbar-title>
          
          <Users />
    
      </v-toolbar>
      <v-divider></v-divider>

      <v-virtual-scroll
        :items="GetMessage"
        :item-height="60"
        height="710"
        @scroll.native="scrolling"
      >
        <template v-slot:default="{ item }">
          <v-list-item-content>
            <v-list-item-title :key="item.Msg" 
            >

              {{item.Name}}  
              <v-chip v-if="item.Msg!=''"  :style="{color:item.Color!=''?item.Color : 'Black'}">
                {{item.Msg}}               
              </v-chip>  
                 <div class="caption">
                  {{item.time}} 
                </div>
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-virtual-scroll>

      
    </v-card>
      
    <v-textarea solo label="Message" v-model="Msg" @keyup.enter="SendMsg" height="80px" append-icon="mdi-send" @click:append="SendMsg"></v-textarea>
     
  </v-container>
</template>

<script>
import { apiGetPrice } from '../utils/request';
import {signal} from '../utils/signalR'
import Users from '@/components/users.vue';

  export default {
    name:'Home',
    components: {
     Users
   },

  data () {
      return {
        GetMessage:[],          //獲得訊息
        Msg:'',                 //發送訊息
        BT_SendIcon:'mdi-send', //發送訊息Icon
        mode:'Chat',            //模式判斷用
        UserName:'',
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
      
          signal.on('NewConnect', function(getName,time) {
          _this.GetMessage.push({Name:getName,Msg:'',Color:'',time:time})             
          
        });
        signal.invoke("UserConnected",_this.UserName)  
      })
      .catch((ex) => {     
        console.log(ex)    
      });
  

      signal.on('SendMessage', function(getName,getMsg,time) {
 
        _this.GetMessage.push({Name:getName,Msg:getMsg,Color:'',time:time})         
      }); 

        
    }
  },

  methods:{
     scrolling (event) {
         
        const element = event.currentTarget || event.target
        console.log(event.scrollHeight)
        if (element && element.scrollHeight - element.scrollTop === element.clientHeight) {
           this.$emit('scroll-end')
        }
    },

    SendMsg(){

      if(this.Msg.trim().toLowerCase()=="mode-p")
      {
        this.mode="Price"
        this.GetMessage.push({Name:"系統 : 已更改為P",Msg:'',Color:''})
      }
      else if(this.Msg.trim().toLowerCase()=="mode-c")
      {
        this.mode="Chat"
        this.GetMessage.push({Name:"系統 : 已更改為C",Msg:'',Color:''})
      }
      else if(this.mode=="Price")
      {
          this.GetMessage.push({Name:this.UserName+" : ",Msg:this.Msg,Color:''}) //只能自己看到輸入訊息

          apiGetPrice({Number:this.Msg.trim()}).then((res)=>{                 
            this.GetMessage.push({Name:"Robot : ",Msg:res.data[0],Color:res.data[1],Time:res.data[2]})   
        })
      }
      else
      {
        signal.invoke("GetMessage",this.UserName+" : ",this.Msg)  
      }
   
      this.Msg="";
      console.log(this.scrolling)
    },
   
  },
    
}
  
</script>
<style scoped>
  .text-wrapper {
  word-break: break-all;
  word-wrap: break-word;
  max-width: 100px;
}

</style>


