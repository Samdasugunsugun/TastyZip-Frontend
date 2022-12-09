import { createApp } from 'vue';
import App from '@/App.vue';
import vClickOutside from 'click-outside-vue3';
import router from '@/router';
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      query: '',
      store: {
        id: 0,
        name: '유흥유흥d',
        category: '유흥업소',
        address: '서울특별시 성북구 고려대학교',
        score: 2.5,
        lat: 37.3575704,
        lon: 127.102399,
      },
      stores: [
        {
          id: 1,
          name: '가게1',
          category: '유흥업소',
          address: '서울특별시 성북구',
          rating: 2.5,
          lat: 37.3595704,
          lon: 127.105399,
        },
        {
          id: 2,
          name: '가게2',
          category: '유흥업소',
          address: '서울특별시 성남구',
          rating: 2.0,
          lat: 37.3585704,
          lon: 127.115399,
        },
        {
          id: 3,
          name: '가게3',
          category: '유흥업소',
          address: '서울특별시 성동구',
          rating: 1.5,
          lat: 37.3575704,
          lon: 127.102399,
        },
      ],
      reviews: [
        {
          content: '정말 맛있어요',
          rating: 2.5,
        },
        {
          content: '정말 맛있어요',
          rating: 2.0,
        },
        {
          content: '정말 맛있어요',
          rating: 1.5,
        },
        {
          content: '정말 맛있어요',
          rating: 0.5,
        },
      ],
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
  },
  actions: {
    async search({ commit }, data) {
      commit('setQuery', data);
      const response = await axios.get(`/api/v1/search?query=${data}`);
    },
    async getDetail({ commit }, id) {
      const response = await axios.get(`/api/v1/store/${id}`);
      //   commit('setStore', response);
      commit('setStore', {
        name: '유흥유흥',
        category: '유흥업소',
        address: '서울특별시 성북구 고려대학교',
        score: 2.5,
        lat: 37.3575704,
        lon: 127.102399,
      });
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vClickOutside);
app.use(store);

app.mount('#app');
