import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:'',
    token:'',
    APItoken:''
  },
  mutations: {
    DoUpdateName(state, Name) {      
			state.name = Name;
		},
    DoUpdateToken(state, Token) {      
			state.token = Token;
		},
    DoUpdateAPIToken(state, APIToken) {      
			state.APItoken = APIToken;
		}
  },
  actions: {
    updateName(context, name) {
			context.commit('DoUpdateName', name)    
		},
    updateToken(context, Token) {
			context.commit('DoUpdateToken', Token)    
		},
    updateAPIToken(context, APIToken) {
			context.commit('DoUpdateAPIToken', APIToken)    
		}
  },
  modules: {
    
  },
});
