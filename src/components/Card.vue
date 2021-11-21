<template>
  <div class="my-col">
    <div class="card">
      <img
        class="card-img"
        v-if="movie.poster_path"
        :src="imgPath"
        :alt="movieTitle"
      />
      <img
        v-else
        :src="require(`@/assets/placeholder.jpg`)"
        alt="no image found"
      />
      <div class="overlay">
        <ul>
          <li>
            <h3 class="mb-3">{{ movieOriginalTitle }}</h3>
          </li>
          <li v-if="movieOriginalTitle != movieTitle">
            <h4 class="mb-3">{{ movieTitle }}</h4>
          </li>
          <li>
            <img
              v-if="filter(movie.original_language)"
              class="flag-img mb-3"
              :src="require(`@/assets/${movie.original_language}.gif`)"
              :alt="movie.original_language"
            />
            <p v-else>{{ movie.original_language }}</p>
          </li>
          <li>
            <div v-if="ratingStars">
              <i
                v-for="num in 5"
                :key="'vote_star_' + num"
                class="fa mb-2"
                :class="num <= ratingStars ? 'fa-star' : 'fa-star-o'"
              ></i>
            </div>
          </li>
          <li>
            <h4 v-if="movie.overview">Trama</h4>
            <p>{{ movie.overview }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    movie: Object,
  },
  data() {
    return {
      langFlags: ["de", "hu", "fr", "sp", "it", "en"],
    };
  },
  computed: {
    movieTitle() {
      return this.movie.title ? this.movie.title : this.movie.name;
    },
    movieOriginalTitle() {
      return this.movie.original_title
        ? this.movie.original_title
        : this.movie.original_name;
    },
    imgPath() {
      let url = "https://image.tmdb.org/t/p/";
      let size = "w342";
      return url + size + this.movie.poster_path;
    },
    ratingStars() {
      let voteRating = this.movie.vote_average;
      return Math.ceil(voteRating / 2);
    },
  },
  methods: {
    filter(nationality) {
      return this.langFlags.filter((n) => n === nationality).length === 0
        ? false
        : true;
    },
  },
  mounted() {},
};
</script>



<style scoped lang="scss">
</style>