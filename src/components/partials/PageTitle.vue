<template>
  <div class="bg-blue-200 w-full page-title flex justify-center items-center" :class="!background ? 'no-img' : ''"  :style="{ 'background-image': 'url(' + backgroundImage + ')', 'height': height + 'px' }">
    <h1 class=" mb-5  text-center font-bold text-7xl" :class="!background? 'text-gray-900' : 'text-white'">{{title}}</h1>
  </div>

</template>

<script>
import backgroundImage from '../../assets/img/naglowek1.jpg'


export default {
    props: ['title', 'height', 'background'],
    data() {
        return {
          backgroundImage,
        }
    },
  mounted() {
      console.log(this.background)
  }
}
</script>

<style>
 .no-img {
   background: none !important;
   background-image: none !important;
 }
</style>