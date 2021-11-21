<template>
  <main>
    <div class="container">
      <h1 v-if="propMovie.length > 0">Film</h1>
      <div class="d-flex flex-wrap">
        <Card v-for="movie in propMovie" :key="movie.id" :movie="movie"></Card>
      </div>
      <h1 v-if="propSerie.length > 0">Series</h1>
      <div class="d-flex flex-wrap">
        <Card v-for="serie in propSerie" :key="serie.id" :movie="serie"></Card>
      </div>
    </div>
  </main>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Main",
  props: {
    propMovie: Array,
    propSerie: Array,
  },
  components: {
    Card,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>