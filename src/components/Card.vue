<template>
  <ol>
    <li>Titolo: {{ cardTitle }}</li>
    <li>Titolo Originale: {{ cardOriginalTitle }}</li>
    <li>
      Lingua: {{ cardLanguage }}
      <img
        v-if="filter(cardLanguage)"
        :src="require(`@/assets/${cardLanguage}.gif`)"
        alt=""
      />
    </li>
    <li>
      Voto:
      <div v-if="ratingStars">
        <span v-for="i in ratingStars" :key="i">
          <i class="fa fa-star"></i>
        </span>
        <span v-for="i in 5 - ratingStars" :key="i">
          <i class="fa fa-star-o"></i>
        </span>
      </div>
    </li>
    <li>
      Immagine di copertina:
      <img v-if="cardImg" :src="imgPath" :alt="cardTitle" />
      <img
        v-else
        :src="require(`@/assets/placeholder.jpg`)"
        alt="no image found"
      />
    </li>
    -->
  </ol>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardTitle: String,
    cardOriginalTitle: String,
    cardLanguage: String,
    cardVote: Number,
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