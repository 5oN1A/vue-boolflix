<template>
  <div class="shell">
    <Header @search="searchQuery"></Header>

    <main>
      <div class="container">
        <h1 v-if="moviesList.length > 0">Film</h1>

        <div class="d-flex flex-wrap">
          <Card
            v-for="movie in moviesList"
            :key="movie.id"
            :cardTitle="movie.title"
            :cardOriginalTitle="movie.original_title"
            :cardLanguage="movie.original_language"
            :cardVote="movie.vote_average"
            :cardOverview="movie.overview"
            :cardImg="movie.poster_path"
          ></Card>
        </div>
        <h1 v-if="seriesList.length > 0">Series</h1>

        <div class="d-flex flex-wrap">
          <Card
            v-for="serie in seriesList"
            :key="serie.id"
            :cardTitle="serie.name"
            :cardOriginalTitle="serie.original_name"
            :cardLanguage="serie.original_language"
            :cardVote="serie.vote_average"
            :cardOverview="serie.overview"
            :cardImg="serie.poster_path"
          ></Card>
        </div>
      </div>
    </main>
  </div>
</template>



<script>
import axios from "axios";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Card,
    Header,
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
          console.log(this.moviesList);
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
          console.log(this.seriesList);
        });
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "styles/App";
</style>