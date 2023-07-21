
<template>

  <div class="mb-10">


    <PageTitle :background="false" height="200" :title="this.$route.params.category"></PageTitle>

    <template v-if="loading">

      <div class="container flex justify-center mt-10">



        <div role="status" class="grid grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
          <div>
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style="width: 400px; height: 400px"></div>
          </div>
          <div>
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style="width: 400px; height: 400px"></div>
          </div>
          <div>
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style="width: 400px; height: 400px"></div>
          </div>
          <div>
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style="width: 400px; height: 400px"></div>
          </div>
          <div>
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style="width: 400px; height: 400px"></div>
          </div>
          <div>
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style="width: 400px; height: 400px"></div>
          </div>
          <div>
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style="width: 400px; height: 400px"></div>
          </div>
          <div>
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style="width: 400px; height: 400px"></div>
          </div>

        </div>


      </div>

    </template>
    <template v-else>
      <div class="container flex justify-center mt-10 p-5">

        <div  class="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          <div v-for="post in posts" class="zoom-animation">
            <router-link :to="parseUrl(post.link)">
              <img class="h-auto max-w-full rounded-lg " :src="post.fimg_url" alt="">
            </router-link>
          </div>
        </div>


      </div>
    </template>


  </div>



</template>

<script>
import axios from "axios";
import SETTINGS from "../../settings";
import PageTitle from "../partials/PageTitle.vue";
import RealizationCard from "../partials/RealizationCard.vue";

export default  {
  components: {RealizationCard, PageTitle},
  data() {
    return {
      posts: null,
      loading: true,
      howManySkeletonPosts: 6,
    }
  },
  methods: {
    parseUrl(url) {
      const m = url.match(/^((?:([^:\/?#]+:)(?:\/\/))?((?:([^\/?#:]*)(?::([^\/?#:]*))?@)?([^\/?#:]*)(?::([^\/?#:]*))?))?([^?#]*)(\?[^#]*)?(#.*)?$/),
          r = {
            hash: m[10] || "",                   // #asd
            host: m[3] || "",                    // localhost:257
            hostname: m[6] || "",                // localhost
            href: m[0] || "",                    // http://username:password@localhost:257/deploy/?asd=asd#asd
            origin: m[1] || "",                  // http://username:password@localhost:257
            pathname: m[8] || (m[1] ? "/" : ""), // /deploy/
            port: m[7] || "",                    // 257
            protocol: m[2] || "",                // http:
            search: m[9] || "",                  // ?asd=asd
            username: m[4] || "",                // username
            password: m[5] || ""                 // password
          };
      if (r.protocol.length == 2) {
        r.protocol = "file:///" + r.protocol.toUpperCase();
        r.origin = r.protocol + "//" + r.host;
      }
      r.href = r.origin + r.pathname + r.search + r.hash;
      return r.pathname;
    }
  },
  mounted() {
    axios
        .get(SETTINGS.API_BASE_PATH + `posts?category_slug=${this.$route.params.category}`)
        .then(response => {
          this.posts = response.data
          console.log(response.data)
        }).catch(error => {console.log(error)})
        .finally(() => this.loading = false)

  }

}
</script>

<style scoped>
.zoom-animation {
  width: auto;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 8px 21px 33px -14px rgba(66, 68, 90, 0);
  transition: 0.5s;

}

.zoom-animation:hover {
  box-shadow: 8px 21px 33px -14px rgba(66, 68, 90, 1);
}

.zoom-animation img {
  transform-origin: 50% 65%;
  transition: transform 0.5s, filter 0.5s ease-in-out;
  border-radius: 5px;
}

/* The Transformation */
.zoom-animation:hover img {
  transform: scale(1.1);
}
</style>