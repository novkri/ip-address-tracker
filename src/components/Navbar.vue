<template>
  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <header class="home_header">IP Address Tracker</header>
    <div class="history-btn">
      <p uk-margin>
        <button class="uk-button uk-button-default">
          <a href="" class="uk-icon-button" uk-icon="history"></a>
        </button>
      </p>

      <div class="dropdown" uk-dropdown="mode: click">
        <p v-if="history.length === 0">History is empty...</p>
        <div v-else class="uk-list">
          <li><span>Search History:</span></li>
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
  display: flex;
  justify-content: flex-start;
  align-items: end;
  position: relative;
  padding: 45px 30px;
}

.history-btn {
  position: absolute;
  right: 0;
}

.home_header {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

@media (min-width: 800px) {
  nav {
    padding: 25px 30px;
    justify-content: center;
  }
  .home_header {
    font-size: 30px;
  }
}

button {
  border: none;
  padding: 0 20px;
}

.dropdown {
  border-radius: 10px;
  min-width: 250px;
  padding-left: 0;
  padding-right: 0;

  right: 0;
}

@media (min-width: 800px) {
  .dropdown {
    right: auto;
  }
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