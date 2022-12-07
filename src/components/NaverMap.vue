<template>
  <div id="map1" style="width: 100%; height: 400px" ref="map"></div>
</template>

<script>
import load from 'load-script';
export default {
  mounted() {
    const url = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${
      import.meta.env.VITE_NCP_CLIENT_ID
    }`;
    load(url, () => {
      this.naver = window.naver;
    });
  },
  props: {
    stores: Array,
  },
  data() {
    return {
      naver: null,
      map: null,
      markers: [],
      infoWindows: [],
    };
  },
  watch: {
    naver(value) {
      if (!value) return;

      this.map = new value.maps.Map('map1');
      this.markers = this.stores.map(
        el =>
          new value.maps.Marker({
            position: new value.maps.LatLng(el.lat, el.lon),
            map: this.map,
          }),
      );
      this.infoWindows = this.stores.map(
        el =>
          new value.maps.InfoWindow({
            content: `
        <div>
          <span>${el.name}</span>
          <span>${el.rating}</span>
        </div>
      `,
          }),
      );
      for (let i = 0; i < this.markers.length; i++) {
        value.maps.Event.addListener(this.markers[i], 'click', () => {
          if (this.infoWindows[i].getMap()) {
            this.infoWindows[i].close();
          } else {
            this.infoWindows[i].open(this.map, this.markers[i]);
          }
        });
      }
    },
  },
};
</script>
