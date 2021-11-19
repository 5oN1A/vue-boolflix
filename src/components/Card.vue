<template>
  <div class="my-col">
    <div class="card">
        <img class="card-img" v-if="cardImg" :src="imgPath" :alt="cardTitle" />
        <img
          v-else
          :src="require(`@/assets/placeholder.jpg`)"
          alt="no image found"
        />
      <div class="overlay">
        <ul>
        <li>
          <h3 class="mb-3">{{ cardOriginalTitle }}</h3>
        </li>
        <li v-if="cardOriginalTitle != cardTitle">
          <h4 class="mb-3">{{ cardTitle }}</h4>
        </li>
        <li>
          <img
            v-if="filter(cardLanguage)"
            class="flag-img mb-3"
            :src="require(`@/assets/${cardLanguage}.gif`)"
            :alt="cardTitle"
          />
          <p v-else>{{ cardLanguage }}</p>
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
          <h4 v-if="cardOverview">Trama</h4>
          <p>{{ cardOverview }}</p>
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
    cardTitle: String,
    cardOriginalTitle: String,
    cardLanguage: String,
    cardVote: Number,
    cardOverview: String,
    cardImg: String,
  },
  data() {
    return {
      langFlags: ["de", "hu", "fr", "sp", "it", "en"],
    };
  },
  computed: {
    imgPath() {
      let url = "https://image.tmdb.org/t/p/";
      let size = "w342";
      return url + size + this.cardImg;
    },

    ratingStars() {
      let voteRating = this.cardVote;
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