<template>
  <ol>
   <!--  {{startry}}
    
    <li>Titolo: {{ cardTitle }}</li>
    <li>Titolo Originale: {{ cardOriginalTitle }}</li>
    <li>
      Lingua: {{ cardLanguage }}
      <img
        v-if="filter(cardLanguage)"
        :src="require(`@/assets/${cardLanguage}.gif`)"
        :alt="cardLanguage"
      />
      <img v-else :src="require(`@/assets/no-flag.png`)" alt="no flag" />
    </li>
    <li>Voto <span v-for="i in ratingStars" :key="i">
      {{i}}</span></li>
    <li>
      Immagine di copertina:
      <img v-if="cardImg" :src="imgPath" :alt="cardTitle" />
      <img
        v-else
        :src="require(`@/assets/placeholder.jpg`)"
        alt="no image found"
      />
    </li> -->
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
      startry: '<i class="fa fa-star"></i>',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
