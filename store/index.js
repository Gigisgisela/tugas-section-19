import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)


export const state = () => ({
    newsList: [],
})
  
export const mutations = {
    setNewsList(state, payload){
        state.newsList = payload
    }
}

export const actions = {
    fetchNews(store, keyword) {
        axios.get("https://newsapi.org/v2/everything?q="+ keyword + "&apiKey=a088ce87f18f40b89adfaa23fd3c7c4e").then((response) => {
            store.commit("setNewsList", response.data.articles)
        })
    }
}