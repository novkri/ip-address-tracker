<template>
  <div class="info" v-if="geoInfo">
    <div class="uk-card uk-card-default uk-card-body info_card">
      <div class="info_item">
        <header>IP Address</header>
        <p>{{geoInfo.query}}</p>
      </div>
      <hr class="uk-divider-vertical">
      <div class="info_item">
        <header>Location</header>
        <p>{{geoInfo.country}}, {{geoInfo.city}}, {{geoInfo.zip}}</p>
      </div>
      <hr class="uk-divider-vertical">
      <div class="info_item">
        <header>Timezone</header>
        <p>{{geoInfo.timezone}}</p>
      </div>
      <hr class="uk-divider-vertical">
      <div class="info_item">
        <header>ISP</header>
        <p>{{geoInfo.isp}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'map-info-card',
    props: {
      geoInfo: {
        type: Object,
        default: () => ({}),
      },
    }
  }
</script>

<style>
.info {
  height: 200px;
  position: absolute;
  z-index: 1000;
  top: -50px;
  width: 100%;
}

.uk-card {
  padding: 30px;
  border-radius: 15px;
  max-width: 75%;
  margin: auto;
}

.info_card {
  display: grid;
  grid-template-columns: 5fr 1fr 5fr 1fr 5fr 1fr 5fr;
}

.info_item {
  position: relative;
}

.uk-divider-vertical {
  height: 80px;
  border-left: 2px solid #e5e5e5;
  margin-top: 10px;
  margin-bottom: 10px;
}

.info_item header {
  font-weight: bold;
  color: #848484;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
}

.info_item p {
  font-size: 1.4em;
  margin: 5px 0;
  color: #1f1f1f;
  font-weight: bold;
}
</style>