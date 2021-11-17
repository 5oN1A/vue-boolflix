<template>
  <div class="container">
    <Card></Card>
    <div class="searchbar">
      <input v-model="userSearch" type="text" />
      <button @click="searchQuery(movieSearch, userSearch, 'moviesList'); searchQuery(seriesSearch, userSearch, 'seriesList')">
        search
      </button>
    </div>

    <ul>
      <li v-for="movie in moviesList" :key="movie.id">
        <ol>
          <li>Titolo: {{ movie.title }}</li>
          <li>Titolo Originale: {{ movie.original_title }}</li>
          <li>
            Lingua: {{ movie.original_language }}
            <img
              v-if="filter(movie.original_language)"
              :src="require(`@/assets/${movie.original_language}.gif`)"
              alt=""
            />
          </li>
          <li>Voto: {{ movie.vote_average }}</li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue"

export default {
  name: "App",
  components: {
    Card
  },
  data() {
    return {
      apiKey: "91101de13ecb336e5b615f4754a0341a",
      apiUrl: "https://api.themoviedb.org/3",
      movieSearch: "/search/movie",
      seriesSearch: "/search/tv",
      moviesList: [],
      seriesList: [],
      userSearch: "scrubs",
      langFlags: ["de", "hu", "fr", "sp", "it", "en"],
    };
  },
  computed: {},
  methods: {
    /* searchQuery(typeSearch, typeList) {
      axios
        .get(this.apiUrl + "/search/movie", {
          params: {
            api_key: this.apiKey,
            query: this.userSearch,
            language: "it",
          },
        })
        .then((resp) => {
          this.moviesList = resp.data.results;
          this.langCode = this.moviesList.original_language;

        }); */
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
    filter(nationality) {
      // We can't find 'Taiwan' in nationalityArr
      return this.langFlags.filter((n) => n === nationality).length === 0
        ? false
        : true; // false
    },
  },
  mounted() {
      

  },
};
</script>

<style lang="scss">
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
