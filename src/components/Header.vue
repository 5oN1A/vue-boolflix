<template>
<header>
  <nav>
    <div
      class="container justify-content-between align-items-center d-flex py-3"
    >
      <div class="logo">BOOLFLIX</div>
      <div class="searchbar">
      <input v-model="userSearch" type="text" />
      <button class="btn btn-danger" @click="$emit('search', userSearch)">search</button>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userSearch: "",
    };
  },
};
</script> 