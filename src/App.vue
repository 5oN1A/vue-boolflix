<template>
  <div class="container">
    <i class="fa fa-star-o"></i>
    <Nav @search="searchQuery"></Nav>
    <!-- <div class="searchbar">
      <input v-model="userSearch" type="text" />
      <button
        @click="
          searchQuery(movieSearch, userSearch, 'moviesList');
          searchQuery(seriesSearch, userSearch, 'seriesList');
        "
      >
        search
      </button>
    </div> -->
    <div class="cards-container">
      <Card
        v-for="movie in moviesList"
        :key="movie.id"
        :cardTitle="movie.title"
        :cardOriginalTitle="movie.original_title"
        :cardLanguage="movie.original_language"
        :cardVote="movie.vote_average"
        :cardImg="movie.poster_path"
      ></Card>
      <h1>series</h1>
      <Card
        v-for="serie in seriesList"
        :key="serie.id"
        :cardTitle="serie.name"
        :cardOriginalTitle="serie.original_name"
        :cardLanguage="serie.original_language"
        :cardVote="serie.vote_average"
        :cardImg="serie.poster_path"
      ></Card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Crd.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Card,
    Nav,
  },
  data() {
    return {
      apiKey: "91101de13ecb336e5b615f4754a0341a",
      apiUrl: "https://api.themoviedb.org/3",
      moviesList: [],
      seriesList: [],
      newSearch: "",
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
          this.movieList = resp.data.results;
          console.log(this.movieList);
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
          this.serieList = resp.data.results;
          console.log(this.serieList);
        });
    },
  },
};
</script>

<style lang="scss">
@import "styles/app";
.searchbar {
  text-align: center;
  input {
    width: 300px;
    height: 30px;
    vertical-align: middle;
  }
  button {
    width: 50px;
    height: 30px;
    vertical-align: middle;
  }
}

l {
  margin-bottom: 20px;
}
</style>
