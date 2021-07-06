<template>
  <div>
    <div class="home">
      <Navbar :history="history" @onSearch="onSearch" />

      <SearchInput @onSearch="onSearch" :historyText="historyText" />
    </div>

    <MyMap :geoInfo="geoInfo" />
  </div>
</template>

<script>

import SearchInput from "@/components/SearchInput";
import MyMap from "@/components/Map";
import { mapActions, mapGetters } from 'vuex'
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
    MyMap,
    SearchInput,
  },
  data() {
    return {
      geoInfo: null,
      historyText: ''
    }
  },
  methods: {
    ...mapActions(['setHistoryItem']),

    async onSearch(e) {
      await fetch(`http://ip-api.com/json/${e}`)
          .then(async res => await res.json())
          .then(data => {
            console.log(data)
            if (data.status === 'success') {
              this.historyText = e
              this.geoInfo = data
              this.setHistoryItem(e)
            }
          })
          .catch(e => {
            console.log(e)
          })
    }
  },

  computed: {
    ...mapGetters(['history'])
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

</style>