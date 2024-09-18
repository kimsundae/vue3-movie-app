import axios from "axios";
export default {
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: [],
    message: "",
    loading: false,
  }),
  // computed
  getters: {},
  // methods
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    async searchMovies({ commit }, payload) {
      const { title, type, number, year } = payload;
      const OMDB_API_KEY = "7035c60c";
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`
      );
      const { Search, totalResults } = res.data;
      commit("updateState", {
        movies: Search,
        message: "Hello world!",
        loading: true,
      });
    },
  },
};
