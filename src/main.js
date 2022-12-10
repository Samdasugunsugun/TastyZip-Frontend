import { createApp } from 'vue';
import App from '@/App.vue';
import vClickOutside from 'click-outside-vue3';
import router from '@/router';
import { createStore } from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const store = createStore({
  state() {
    return {
      query: '',
      store: {},
      stores: [],
      reviews: [],
    };
  },
  mutations: {
    setQuery(state, query) {
      state.query = query;
    },
    setStores(state, stores) {
      state.stores = stores;
    },
    setStore(state, store) {
      state.store = store;
    },
    setReviews(state, reviews) {
      state.reviews = reviews;
    }
  },
  actions: {
    async search({ commit }, data) {
      commit('setQuery', data);
      const response = await axios.get(`/api/v1/search?query=${data}`);
      // commit('setStores', [
      //   {
      //     id: 1,
      //     name: '가게1',
      //     category: '유흥업소',
      //     address: '서울특별시 성북구',
      //     rating: 2.5,
      //     lat: 37.3595704,
      //     lon: 127.105399,
      //   },
      //   {
      //     id: 2,
      //     name: '가게2',
      //     category: '유흥업소',
      //     address: '서울특별시 성남구',
      //     rating: 2.0,
      //     lat: 37.3585704,
      //     lon: 127.115399,
      //   },
      //   {
      //     id: 3,
      //     name: '가게3',
      //     category: '유흥업소',
      //     address: '서울특별시 성동구',
      //     rating: 1.5,
      //     lat: 37.3575704,
      //     lon: 127.102399,
      //   },
      // ]);
      commit('setStores', response.data);
    },
    async getDetail({ commit }, id) {
      const response = await axios.get(`/api/v1/restaurants/${id}`);
      // commit('setStore', {
      //   id: 1,
      //   name: '유흥유흥',
      //   category: '유흥업소',
      //   address: '서울특별시 성북구 고려대학교',
      //   rating: 2.5,
      //   lat: 37.3575704,
      //   lon: 127.102399,
      // });
      commit('setStore', response.data);
    },
    async getReviews({commit}, id) {
      const response = await axios.get(`/api/v1/restaurants/${id}/reviews`);
      // commit('setReviews', [
      //   {
      //     content: '정말 맛있어요',
      //     rating: 2.5,
      //   },
      //   {
      //     content: '정말 맛있어요',
      //     rating: 2.0,
      //   },
      //   {
      //     content: '정말 맛있어요',
      //     rating: 1.5,
      //   },
      //   {
      //     content: '정말 맛있어요',
      //     rating: 0.5,
      //   },
      // ]);
      commit('setReviews', response.data);
    }
  },
});

const app = createApp(App);

app.use(router);
app.use(vClickOutside);
app.use(store);

app.mount('#app');
