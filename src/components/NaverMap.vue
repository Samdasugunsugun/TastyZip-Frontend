<template>
  <div id="map" style="width: 100%; height: 400px" ref="map"></div>
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
  computed: {
    isReady() {
      return this.naver && this.stores;
    }
  },
  watch: {
    isReady() {
      if (!this.naver) return;
      
      const option = {
        zoom: 13,
        zoomControl: true,
      };
      
      if (this.stores.length > 0) {
        option.center = new naver.maps.LatLng(this.stores[0].lat, this.stores[0].lon); //지도의 초기 중심 좌표
      }

      this.map = new this.naver.maps.Map('map', option);
      this.markers = this.stores.map(
        el =>
          new this.naver.maps.Marker({
            position: new this.naver.maps.LatLng(el.lat, el.lon),
            map: this.map,
          }),
      );
      this.infoWindows = this.stores.map(
        el =>
          new this.naver.maps.InfoWindow({
            content: `
        <div onclick="console.log('a');" style="padding: 10px;">
          <span>${el.name}</span>
          <span>${el.category}</span>
          <span class="text-red-500 mr-1">★</span>
          <span>${el.rating}</span>
        </div>
      `,
            maxWidth: 700,
            backgroundColor: '#fff',
            borderColor: '#000000',
            borderWidth: 3,
            anchorSize: new naver.maps.Size(20, 5),
            anchorSkew: true,
            anchorColor: '#fff',
            pixelOffset: new naver.maps.Point(0, -5),
          }),
      );
      for (let i = 0; i < this.markers.length; i++) {
        this.naver.maps.Event.addListener(this.map, 'click', () => {
          this.infoWindows[i].close();
        });
        this.naver.maps.Event.addListener(this.markers[i], 'click', () => {
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
