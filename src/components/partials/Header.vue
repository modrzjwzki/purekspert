<template>


  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/">
        <img :src="logo" class="h-8 mr-3" alt="Purekspert Logo" />
      </router-link>
      <button v-on:click="toggleNavbar()"  data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="black"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="w-full md:block md:w-auto" v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <template v-if="allMenusLoaded">
            <li v-for="item in allMenus.items" :key="item.id" class="block py-1 pl-3 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-800  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent max-w-none">
              <router-link :to="parseUrl(item.url)" class="hover:text-red-800"><span>{{item.title}}</span></router-link>
            </li>
          </template>



        </ul>
      </div>
    </div>
  </nav>

  <!--  <nav class="site-header fixed w-full flex items-center justify-between flex-wrap bg-teal-500 p-6">-->
<!--    <div class="site-header__interior flex items-center flex-shrink-0 text-white mr-6">-->
<!--      <router-link to="/">-->
<!--        <img :src="logo" class="w-1/4"  alt="logo"/>-->
<!--      </router-link>-->
<!--    </div>-->

<!--    <div class="block lg:hidden">-->
<!--      <button-->
<!--        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"-->
<!--      >-->
<!--        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--          <title>Menu</title>-->
<!--          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />-->
<!--        </svg>-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">-->
<!--      <div class="text-sm lg:flex-grow"></div>-->
<!--      <template v-if="allMenusLoaded">-->
<!--        <div v-for="item in allMenus.items" :key="item.id">{{item.title}}</div>-->
<!--      </template>-->
<!--      <div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
</template>

<script>
import {mapGetters} from "vuex";
import logo from "../../assets/img/logo.png"
import api from "../../api";

export default {
  computed: {
    ...mapGetters({
      allMenus: 'allMenus',
      allMenusLoaded: 'allMenusLoaded',
    }),
  },
  data () {
    return {
      showMenu: false,
      logo: logo
    }
  },
  beforeMount() {
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
    },
    toggleNavbar(){
      this.showMenu = !this.showMenu;
    }
  },
  mounted: function () {
    console.log(this.allMenus)

  }


};
</script>

<style type="postcss" scoped>
.logo-cls-1 {
  fill: #ffffff;
}

.site-header {
  background: #ffffff;
}
</style>
