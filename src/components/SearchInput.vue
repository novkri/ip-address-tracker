<template>
  <form @submit.prevent="handleSearch" class="search">
    <div class="uk-inline uk-width-1-1 uk-width-1-2@m search-wrapper">
      <input type="text" v-model="whatToSearch" class="uk-input search-input" placeholder="Search for any IP address or domain" />
      <span class="append-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
      </span>
    </div>
  </form>
</template>

<script>
export default {
  name: 'search-input',
  data() {
    return {
      whatToSearch: ''
    }
  },

  methods: {
    handleSearch() {
      this.$emit('onSearch', this.whatToSearch)
    }
  }
}
</script>

<style scoped>
.search {
  padding: 0 15px;
}

.search-input {
  padding: 30px;
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 1.1em;
}

.search-input:focus {
  color: #1a1a1a;
}


.append-icon {
  background-color: #000;
  border-radius: 0 15px 15px 0;
  width: 60px;

  right: 0;
  left: auto;

  position: absolute;
  top: 0;
  bottom: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #999;

  margin: 0;
  border: none;
  overflow: visible;
  font: inherit;
  text-transform: none;
  padding: 0;
  fill: currentcolor;
  line-height: 0;

  text-decoration: none;
  cursor: pointer;

  transition: 0.3s all ease;
}

.append-icon:hover, .append-icon:active {
  background-color: #1f1f1f;
}
</style>