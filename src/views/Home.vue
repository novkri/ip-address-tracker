<template>
  <div>
    <div class="home">
      <header class="home_header">IP Address Tracker</header>
      <SearchInput />
    </div>

    <MyMap />
  </div>
</template>

<script>

import SearchInput from "@/components/SearchInput";
import MyMap from "@/components/Map";
export default {
  name: "Home",
  components: {
    MyMap,
    SearchInput,
  },

};
</script>

<style>
.home {
  background-image: url("~@/assets/images/pattern-bg.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 250px;
  text-align: center;
  height: 250px;
}

.home_header {
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 25px;
}
</style>