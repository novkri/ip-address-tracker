<template>
  <div>
    <div class="home">
      <header class="home_header">IP Address Tracker</header>
      <SearchInput @onSearch="onSearch" />
    </div>

    <MyMap :geoInfo="geoInfo" />
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
  data() {
    return {
      geoInfo: null,
      // isGeoFetched: false
    }
  },
  methods: {
    async onSearch(e) {
      // this.isGeoFetched = false
      await fetch(`http://ip-api.com/json/${e}`)
          .then(async res => await res.json())
          .then(data => {
            // this.isGeoFetched = true
            console.log(data)
            this.geoInfo = data
          })
    }
  }
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
  font-size: 30px;
  font-weight: bold;
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>