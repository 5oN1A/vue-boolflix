<template>
  <div class="searchbar">
    <input v-model="userSearch" type="text" />
    <button @click="$emit('search', userSearch)">search</button>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      userSearch: "ciao",
    };
  },
 
};
</script>