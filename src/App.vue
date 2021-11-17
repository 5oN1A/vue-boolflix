<template>
  <div class="container">
    <div class="searchbar">
      <input v-model="userSearch" type="text" />
      <button @click="searchQuery()">search</button>
    </div>

    <ul>
      <li v-for="movie in moviesList" :key="movie.id">
        <ol>
          <li>Titolo: {{ movie.title }}</li>
          <li>Titolo Originale: {{ movie.original_title }}</li>
          <li>
            Lingua: {{ movie.original_language }}
            <img :src="require(`@/assets/${movie.original_language}.gif`)" alt="" />
          </li>
          <li>Voto: {{ movie.vote_average }}</li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      apiKey: "91101de13ecb336e5b615f4754a0341a",
      apiUrl: "https://api.themoviedb.org/3",
      moviesList: [],
      seriesList: [],
      userSearch: "",
     /*  langFlags: {
        de: "de.gif",
        hu: "hu.gif",
        fr: "fr.gif",
        sp: "sp.gif",
        it: "it.gif",
        en: "en.gif"
      }, */
    };
  },
  computed: {},
  methods: {
    searchQuery() {
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
          console.log(this.moviesList);

          console.log(this.langCode);
        });
    },
  },
  mounted() {},
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
