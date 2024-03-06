import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token :'izlogovan',
    allProducts: [],
    myProducts: [],
  },

  getters:{
    getProducts: state => state.allProducts,
    getMyProducts: state => state.myProducts
  },

  mutations: {
    /*dodajemo sve aranzmane u kolekciju */
    addProducts(state, product){
      state.allProducts = product;
    },

    /*sve rezervacije koje je klijent do sad ostvario */
    getClientProducts(state, product){
      state.myProducts = product;
    },

    /**klijent pravi novu rezervaciju */
    addProduct(state, product){
      state.myProducts.push(product);
    },

    /**operacije sa tokenom */
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    //LOGOUT
    removeToken(state) {
      state.token = "izlogovan";
      localStorage.token = "izlogovan";
    },

    //dohvatanje tokena iz storage-a
    getToken() {
      return localStorage.token;
    },
 
  },
  actions: {
    /**uzimanje svih posotjecih aranzmana iz liste */
    fetchProducts({ commit }) {
      fetch("http://localhost:7000/admin/aranzman", {
        method: "GET",
      })
        .then((obj) => obj.json())
        .then((res) => {
          commit('addProducts', res)
        });
    },

    /**uzimanje svih klijentovih dosadasnjih rezervacija */
    fetchMyReservations({commit}){
      fetch("http://localhost:7000/admin/racun", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
        .then((nnn) => nnn.json())
        .then((data) => {
            commit('getClientProducts', data)
        });
          
    },

    /**korisnik pravi novu rezervaciju */
    rezervisi({commit}){
      fetch("http://localhost:7000/admin/racun", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.token}`
       },
      })
        .then((res) => res.json())
        .then((tkn) => {
          if (tkn.msg) {
            alert(tkn.msg);
            return tkn.msg;
          }
        });
    },
 
    /**registorvanje novog korisnika */
    register({ commit }, obj) {
      fetch("http://localhost:8080/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => {
            if (tkn.msg) {
              alert(tkn.msg);
              return;
            } else {
              commit("setToken", tkn.token);
            }
          });
    },

    /**logovanje postojeceg korisnika */
    login({ commit }, obj) {
      return fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
      .then((res) => {
        if (!res.ok) {
          return false; // Return false if status is not in the range 200-299
        }
        return res.json();
      })
      .then((tkn) => {
        if (tkn && tkn.msg) {
          alert(tkn.msg);
          return false;
        } else {
          commit("setToken", tkn.token);
          return true;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        return false; // Return false in case of any error
      });
    }
  }
})
