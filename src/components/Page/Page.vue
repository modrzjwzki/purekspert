<template>
  <div>
    <template v-if="allPagesLoaded">
<!--      <div class="bg-blue-200 w-full page-title flex justify-center items-center" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">-->
<!--        <h1 class=" mb-5 text-white text-center font-bold text-7xl">{{ pageContent.title.rendered }}</h1>-->
<!--      </div>-->

      <PageTitle :background="true" height="400" :title="pageContent.title.rendered"/>
      <div class="content container mx-auto pt-4 mb-5">
        <div class="grid md:grid-cols-6 gap-2">


          <div class="page-content col-span-4 p-4" v-html="pageContent.content.rendered">


          </div>
          <div class=" md:col-span-2 col-span-6 mb-5">
            <l-map style="height: 200px" :zoom="zoom" :center="center">
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
              <l-marker :lat-lng="markerLatLng"></l-marker>
            </l-map>

            <router-link :to="'/kontakt'" tag="div" class="offer bg-red-800  w-full lg:flex">

              <h5>Zapytaj o bezpłatną ofertę</h5>
              <p>dopasowaną do Twojej inwestycji</p>
            </router-link>
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
import backgroundImage from '../../assets/img/naglowek1.jpg'
import PageTitle from "../partials/PageTitle.vue";

export default {
  computed: {
    ...mapGetters({
      page: 'page',
      allPagesLoaded: 'allPagesLoaded',
    }),

    pageContent() {
      console.log(this.page(this.$route.params.pageSlug))
      return this.page(this.$route.params.pageSlug);
    },
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      backgroundImage,
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 18,
      center: [54.39631, 18.60245],
      markerLatLng: [54.39631, 18.60245]
    }
  },


  components: {
    PageTitle,
    LMarker,
    LTileLayer,
    LMap,
    Loader,
  },
  mounted() {
    // console.log(this.allPagesLoaded)
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
  width: 100%;
}

.offer h5 {
  margin-bottom: 0px;
  font-weight: 700;
}

.offer:hover {
  cursor: pointer;
}

.offer p {
  padding-bottom: 0;
  margin-bottom: 0;
}
</style>
