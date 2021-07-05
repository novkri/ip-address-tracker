<template>
  <div class="uk-position-relative uk-width-1-1 map-wrapper" >
      <MapInfoCard :geoInfo="geoInfo" />

      <l-map
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
    >
      <l-tile-layer
          :url="url"
          :attribution="attribution"
      />
      <l-marker :lat-lng="withPopup"  @click="innerClick">
        <l-icon
            class-name="someExtraClass"
        >
          <img alt="here" src="@/assets/images/icon-location.svg">
        </l-icon>

      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import MapInfoCard from "@/components/MapInfoCard";

export default {
  name: 'my-map',
  props: {
    geoInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    MapInfoCard,
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data() {
    return {
      zoom: 13,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      showInfo: false,
      mapOptions: {
        zoomSnap: 0.5
      },
    };
  },
  computed: {
    center() {
      return this.geoInfo ? latLng(this.geoInfo.lat, this.geoInfo.lon) : latLng(47.41322, -1.219482)
    },
    withPopup() {
      return this.geoInfo ? latLng(this.geoInfo.lat, this.geoInfo.lon) : latLng(47.41322, -1.219482)
    },
    currentCenter() {
      return this.geoInfo ? latLng(this.geoInfo.lat, this.geoInfo.lon) : latLng(47.41322, -1.219482)
    },
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    innerClick() {
      // alert("Click!");
      this.showInfo = !this.showInfo
    }
  }
}
</script>

<style>
.map-wrapper {
  height: 100vh;
}

@media (min-width: 800px) {
  .map-wrapper {
    height: 500px;
  }
}
</style>