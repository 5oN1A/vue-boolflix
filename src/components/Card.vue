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
    <li>Voto: {{ cardVote }}</li>
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
  },
  data() {
    return {
      langFlags: ["de", "hu", "fr", "sp", "it", "en"],
    };
  },
  computed: {},
  methods: {
    filter(nationality) {
      // We can't find 'Taiwan' in nationalityArr
      return this.langFlags.filter((n) => n === nationality).length === 0
        ? false
        : true; // false
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
