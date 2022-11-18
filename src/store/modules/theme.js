const theme = {
  namespaced: true,
  state: {
    mode : "light"
  },
  getters: {
    watchMode(state){
      return state.mode
    }
  },
  mutations: {
    darkMode(state , mode){
      return state.mode = mode
    } , 
    lightMode(state , mode){
      return state.mode = mode
    }
  },
};

export default theme;
