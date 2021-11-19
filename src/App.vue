<template>
  <div class="shell">
    <nav>
      <div
        class="container justify-content-between align-items-center d-flex py-3"
      >
        <div class="logo">BOOLFLIX</div>
        <div class="searchbar">
          <input class="align-middle" v-model="userSearch" type="text" />
          <button
            class="btn btn-danger ms-3 align-middle"
            @click="
              searchQuery(movieSearch, userSearch, 'moviesList');
              searchQuery(seriesSearch, userSearch, 'seriesList');
            "
          >
            search
          </button>
        </div>
      </div>
    </nav>

    <main>
      <div class="container">
        <h1 v-if="moviesList.length > 1">Film</h1>

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
        <h1 v-if="seriesList.length > 1">Series</h1>

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
export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      apiKey: "91101de13ecb336e5b615f4754a0341a",
      apiUrl: "https://api.themoviedb.org/3",
      movieSearch: "/search/movie",
      seriesSearch: "/search/tv",
      moviesList: [],
      seriesList: [],
      userSearch: "apocalipse",
    };
  },
  computed: {},
  methods: {
    searchQuery(typeSearch, query, typeList) {
      axios
        .get(this.apiUrl + typeSearch, {
          params: {
            api_key: this.apiKey,
            query: query,
            language: "it",
          },
        })
        .then((resp) => {
          this[typeList] = resp.data.results;
          console.log(this[typeList]);
        });
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "styles/App";
</style>