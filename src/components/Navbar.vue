<template>
  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-center">
      <header class="home_header">IP Address Tracker</header>
    </div>
    <div class="uk-navbar-right">
      <p uk-margin>
        <button class="uk-button uk-button-default">
          <a href="" class="uk-icon-button" uk-icon="history"></a>
        </button>
      </p>

      <div class="dropdown" uk-dropdown="mode: click">
        <p v-if="history.length === 0">History is empty...</p>
        <div v-else class="uk-list">
          <li @click="onItemClick(item)" class="history-item" v-for="item in history" :key="item">{{item}}</li>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: {
    history: Array
  },
  methods: {
    onItemClick(item) {
      this.$emit('onSearch', item)
    }
  }
}
</script>

<style scoped>
nav {
  padding: 25px 0;
}
.home_header {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}

button {
  padding-bottom: 0;
  border: none;
  margin-right: 10px;
}

.dropdown {
  border-radius: 10px;
  min-width: 250px;
  padding-left: 0;
  padding-right: 0;
}

.history-item {
  padding: 10px 25px;
  font-weight: bolder;
  transition: .3s all ease;
}

.history-item:hover {
  background-color: #e5e5e5;
  cursor: pointer;
  color: #1f1f1f;
}
</style>