<template>
  <form @submit.prevent="handleSearch">
    <div class="uk-inline uk-width-1-2">
      <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: chevron-right; ratio: 1.5" @click="handleSearch"></a>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>-->
      <input type="text" v-model="whatToSearch" class="uk-input search-input" placeholder="Search for any IP address or domain" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'search-input',
  // props: {
  //   whatToSearch: String
  // }
  data() {
    return {
      whatToSearch: ''
    }
  },

  methods: {
    handleSearch() {
      console.log(this.whatToSearch)
    }
  }
}
</script>

<style scoped>
.search-input {
  padding: 30px;
  border-radius: 15px;
  border: none;
  outline: none;
}

.uk-form-icon {
  background-color: #000;
  border-radius: 0 15px 15px 0;
  width: 60px;
}

</style>