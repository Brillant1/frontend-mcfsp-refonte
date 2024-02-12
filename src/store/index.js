import { defineStore } from 'pinia'
import router from '@/router'
export const authStore = defineStore('auth', {
  state: () => {
    return { 
      user: 0 ,
      token: 0,
      current_layout: router.currentRoute
    }
  },

  getters: {
    isAuthenticated(state){
      return state.user ?true: false
    },
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getLayout: (state) => state.current_layout
  },

  actions: {
    setUser(user) {
      this.user = user;
    },
    setToken(token){
      this.token = token
    },
    logout() {
      this.user = null;
      localStorage.clear();
      sessionStorage.clear();
      // router.push('/')
    },
  },

  persist: true,
})
export const useCounterStore = defineStore('counter', {
	state: () => ({ count: 0, name: 'Eduardo' }),
	getters: {
		doubleCount: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});
