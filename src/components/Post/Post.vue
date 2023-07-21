<template>
  <div class="bv-example-row pt-4">
    <template v-if="post">
      <PageTitle :title="post.title.rendered" height="400" :background="true"></PageTitle>

      <div class="content container mx-auto pt-4 mb-5">
        <div class="grid md:grid-cols-6 gap-2">


          <div class="page-content col-span-4 p-4" v-html="post.content.rendered">


          </div>

        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../partials/Loader.vue";
import { mapGetters } from "vuex";
import SETTINGS from "../../settings";
import PageTitle from "../partials/PageTitle.vue";

export default {
  data() {
    return {
      post: false
    };
  },

  computed: {},

  beforeMount() {
    this.getPost();
  },

  methods: {
    getPost: function() {
      axios
        .get(
          SETTINGS.API_BASE_PATH + "posts?slug=" + this.$route.params.postSlug
        )
        .then(response => {
          this.post = response.data[0];
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  components: {
    PageTitle,
    Loader
  }
};
</script>
