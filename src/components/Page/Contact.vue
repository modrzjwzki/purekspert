<template>
  <div >
    <template v-if="allPagesLoaded">
      <div class="bg-blue-200 w-full page-title flex justify-center items-center" >
        <h1 class=" mb-5 text-white font-bold text-7xl">{{ pageContent.title.rendered }}</h1>
      </div>
      <div class="content max-w-4xl mx-auto pt-4">
        <div class="grid grid-cols-4 gap-2">


          <div class="page-content col-span-3" v-html="pageContent.content.rendered">


          </div>
          <div class=" col-span-1">
            <l-map style="height: 200px" :zoom="zoom" :center="center">
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
              <l-marker :lat-lng="markerLatLng"></l-marker>
            </l-map>

            <div class="offer w-full bg-red-700 ">
              <router-link :to="'/kontakt'" tag="div" class="max-w-sm w-full lg:max-w-full lg:flex">
              <h5>Zapytaj o bezpłatną ofertę</h5>
              <p>
                dopasowaną do Twojej inwestycji
              </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>
    <Loader v-else />
  </div>
</template>

<script>
import Loader from '../partials/Loader.vue';
import { mapGetters } from 'vuex';
import LMap from "vue2-leaflet/src/components/LMap.vue";
import LTileLayer from "vue2-leaflet/src/components/LTileLayer.vue";
import LMarker from "vue2-leaflet/src/components/LMarker.vue";

export default {
  computed: {
    ...mapGetters({
      page: 'page',
      allPagesLoaded: 'allPagesLoaded',
    }),

    pageContent() {
      return this.page(this.$route.params.pageSlug);
    },
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159]
    }
  },


  components: {
    LMarker,
    LTileLayer,
    LMap,
    Loader,
  },
  mounted() {
    console.log(this.allPagesLoaded)
  }
};
</script>

<style type="postcss" scoped>
.page-content {
  & >>> p {
    margin-bottom: 1rem;
  }
}

ul, ol {
  list-style: circle !important;
}



.offer {
  color: #ffffff;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 13px;
  padding: 5px;
}

.offer h5 {
  margin-bottom: 0px;
  font-weight: 700;
}

.offer p {
  padding-bottom: 0;
  margin-bottom: 0;
}
</style>
