<template xmlns="http://www.w3.org/1999/html">


  <footer class="bg-white dark:bg-gray-900 container">
    <div class="container flex lg:flex-row flex-col justify-around items-center mb-0 pb-0">
        <h5 class="uppercase font-semibold m-0 p-0">Nasi partnerzy:</h5>
      <img :src="agroizolacja" class="max-height-50px m-3" alt="agroizolacja.pl partner"/>
      <img :src="ekopur" class="max-height-50px m-3" alt="ekopur partner"/>
      <img :src="izo_expert" class="max-height-50px m-3" alt="izoexpert partner"/>
      <img :src="izomedia" class="max-height-50px m-3" alt="izomedia partner"/>

    </div>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between ">
        <div class="grid-flow-col auto-cols-max">
          <div class="flex flex-col py-2">
            <router-link to="/" class="flex items-start"><img :src="logo" class="h-8 mr-3 mt-3" alt="Purekspert Logo "/></router-link>
            <div class="flex items-start justify-start flex-col">
              <div class="max-width-50">
                <span class="font-semibold whitespace-nowrap dark:text-white text-gray-900">Purekspert W. Chmielewski K. Potocki Spółka Jawna</span>
                <p class="text-gray-500">ul. Gdańska 6</p>
                <p class="text-gray-500">83-034 Kaczki</p>
              </div>

              <div class="flex flex-col mt-3">
                <a href="tel:+48508346348" class="sm:text-2xl text-gray-900 flex flex-row items-center text-sm font-bold" >
                    <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/>
                    </svg>

                  <span class="pl-1">

                    +48 508 346 348

                  </span>

                </a>
                <a href="tel:+4866819500" class="sm:text-2xl text-gray-900 flex flex-row items-center xs:text-sm xs:font-bold">
                  <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/>
                  </svg>
                  <span class="pl-1">
                  +48 668 195 008
                  </span>
                </a>
              </div>
            </div>


          </div>



          <div class="contact-info">
            <div class="mt-1">

            </div>

            <div>

            </div>
          </div>


        </div>


        <div class="grid grid-cols-1  ">

          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Informacje kontaktowe</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">

                Wojciech: <a href="tel:+48508346348" class="font-semibold text-gray-900">+48 508 346 348</a><br/>
                <a href="mailto:chmielewski@purekspert.pl">chmielewski@purekspert.pl</a>


              </li>
              <li>

                Karol:<a href="tel:+48668195008" class="font-semibold text-gray-900"> +48 668 195 008</a><br/>
                <a href="mailto:potocki@purekspert.pl">potocki@purekspert.pl</a>
              </li>
            </ul>
          </div>




        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
      <div class="sm:flex sm:items-center sm:justify-between flex-col">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <router-link
            to="/">Purekspert</router-link>. All Rights Reserved.
          </span>
        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a href="https://www.facebook.com/Purekspert" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 viewBox="0 0 8 19">
              <path fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
import logo from '../../assets/img/logo.png';
import agroizolacja from '../../assets/img/agroizolacja.png'
import izomedia from '../../assets/img/izomedia.png'
import ekopur from '../../assets/img/ekopur.png'
import izo_expert from '../../assets/img/izo_expert.png'

export default {
  data() {
    return {
      logo,
      agroizolacja,
      izomedia,
      ekopur,
      izo_expert,
    }
  },
  components: {},
  mounted() {

  }
};
</script>
<style type="postcss" scoped>
.max-width-50 {
  max-width: 50%;
}

.max-height-50px {
  max-height: 50px;
  width: auto;
}

</style>
