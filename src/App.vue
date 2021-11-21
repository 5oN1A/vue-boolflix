<template>
  <div class="shell">
    <Header @search="searchQuery"></Header>
    <Main :propMovie="moviesList" :propSerie="seriesList"></Main>
  </div>
</template>

<script>
import axios from "axios";
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      apiKey: "91101de13ecb336e5b615f4754a0341a",
      apiUrl: "https://api.themoviedb.org/3",
      moviesList: [],
      seriesList: [],
    };
  },
  computed: {},
  methods: {
    searchQuery(query) {
      axios
        .get(this.apiUrl + "/search/movie", {
          params: {
            api_key: this.apiKey,
            query: query,
            language: "it",
          },
        })
        .then((resp) => {
          this.moviesList = resp.data.results;
          //console.log(this.moviesList);
        });
      axios
        .get(this.apiUrl + "/search/tv", {
          params: {
            api_key: this.apiKey,
            query: query,
            language: "it",
          },
        })
        .then((resp) => {
          this.seriesList = resp.data.results;
          //console.log(this.seriesList);
        });
    },
  },

  mounted() {},
};
</script>

<style lang="scss">
@import "styles/App";
</style>