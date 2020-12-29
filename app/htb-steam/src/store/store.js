import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		activeTab : 1
	},
	getters:{
		getActiveTab(state){
            return state.activeTab
        }
	},
	// setters
	mutations:{
		CHANGING(state,value){
            state.activeTab = value;
        }
	},
	actions :{
		changeTab ({commit},value){
            commit('CHANGING',value)
        }
	}
});