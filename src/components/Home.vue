<template>
  <div class="page page--home">
    <section class="page-title-header bg-red-900 flex justify-center items-center flex-col relative" :style="{ 'background-image': 'url(' + backgroundImage + ')'}">
      <img :src="worker" class="absolute worker z-0" alt="pracownik"/>

      <div class="flex justify-center flex-col items-center z-10">
        <h1 class="font-bold text-white text-center">Ocieplanie poddaszy pianą poliuretanową</h1>
        <p class="text-white text-center max-w-md">
          Doskonała termoizolacja dla domów jednorodzinnych jak i obiektów przemysłowych oraz rolniczych
        </p>

      </div>


      <div class="flex flex-col z-10 items-center ">
        <router-link to="/ocieplanie-poddaszy-pianka-poliuretanowa-w-gdansku">
          <button class="text-white font-semibold py-2 px-4 border border-white rounded shadow mx-1 my-2">
            Domy jednorodzinne/szkieletowe
          </button>
        </router-link>
        <router-link to="izolacje-natryskowe-pur-budynkow-przemyslowych-i-rolniczych">
          <button class="text-white font-semibold py-2 px-4 border border-white rounded shadow mx-1 my-2">
            Budynki inwentarskie i przemysłowe
          </button>
        </router-link>

      </div>

    </section>

    <section class="my-5 mt-20 p-4">
      <h2 class="font-bold text-center mb-10"><span class="text-red-700">OCIEPLANIE</span> PIANKĄ POLIURETANOWĄ</h2>
      <div class="grid md:grid-cols-12 sm:grid-cols-1 gap-4 container">
        <div class="col-span-6 flex flex-col md:items-start md:justify-center sm:items-center ">
          <p>
            Zobacz, jak szybko i skutecznie można wykonać <router-link to="" tag="a" class="text-red-700">ocieplenie poddaszy pianką poliuretanową</router-link>. W ciągu jednego dnia możliwe jest wykonanie nawet 270 m2 powierzchni gotowej izolacji. Zachęcamy do obejrzenia krótkiego filmu z jednej z naszych realizacji.
          </p>
          <router-link to="/ocieplanie-poddaszy-pianka-poliuretanowa-w-gdansku"><button class="text-red-700 font-semibold py-2 px-4 border border-red-700 rounded shadow mx-1 my-2">
            Dowiedz się więcej
          </button>
          </router-link>
        </div>
        <div class="col-span-6">
          <iframe  class="w-full" height="315" src="https://www.youtube.com/embed/vgly8eNHML0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p class="text-center text-gray-700 youtube-caption p-3 mt-10">Proces natrysku pianki poliuretanowej</p>
        </div>
      </div>
    </section>


    <div class="advantages bg-gray-200 py-10">
      <section class="container">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight text-center font-extrabold text-red-800">Zalety izolacji pianą PUR</h2>
            <p class="text-gray-700 sm:text-xl text-center">Skuteczna izolacja termiczna i akustyczna dla komfortu bez kompromisów!</p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img :src="savings" alt="Oszczędność symbol">
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Oszczędność</h3>
              <p class="text-gray-700 ">Czyli znaczny spadek kosztów energii w stosunku do Izolacji tradycyjną metodą (nawet 30-45% niższe koszty za energię!)</p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img :src="tightness" alt="symbol szczelność"/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Szczelność</h3>
              <p class="text-gray-700 ">Gwarantuje ograniczenie straty ciepła zimą, a latem ochronę przed nadmiernym nagrzaniem. Dzięki zlikwidowaniu mikro wentylacji przegrody powszechnie montowane urządzenie takie jak rekupyrapory ,oraz klimatyzatory zyskują na swojej sprawności i również pobierają mniej energii do pracy.

              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img :src="lightness" alt="symbol lekkość"/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Lekkość</h3>
              <p class="text-gray-700 ">Zapewnia zmniejszenie obciążenia konstrukcji dachów, ścian oraz ich wzmocnienie ciężar 1m3 pianki to około 14kg. -1m3 waty około 70kg.</p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img :src="durability" alt="wytrzymałość symbol"/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Trwałość</h3>
              <p class="text-gray-700 dark:text-gray-400">Pianka poliuretanowa nie zmienia swoich właściwości (nie utlenia się, nie kurczy, nie opada) Pracuje w bardzo ciężkich warunkach które doskonale wytrzymuje.</p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img :src="soundproofing" alt="symbol Wygłuszenie budynków"/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Wygłuszenie budynków</h3>
              <p class="text-gray-700 dark:text-gray-400">Właściwości pianki poliuretanowej doskonale tłumią dźwięki (produkt stosowany w studiach nagrań, kinach domowych, gabinetach lekarskich, salach wykładowych).</p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img :src="vapor" alt="Paroprzepuszczalność"/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Paroprzepuszczalność</h3>
              <p class="text-gray-700 dark:text-gray-400">Oznacza, że mimo Izolacji konstrukcja dachu „oddycha”, gwarantując tym samym dobrą jakość powietrza(stosowanie tradycyjnej Izolacji przypomina noszenie swetra z wełny jest ciepło gdy jest on suchy ale gdy zamoknie jest ciężki i zimny. Izolacje pur można przyrównać do nowoczesnych membran z Goretexu są lekkie i ciepłe.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
    <section class="our-offer relative">
      <h2 class="absolute text-white md:pl-2 mt-5 uppercase w-full text-center font-bold">Nasza <span class="text-red-700"> oferta</span></h2>
      <div class="grid md:grid-cols-2 sm:grid-cols-1 offer">
        <router-link class="offer-link" to="/ocieplanie-poddaszy-pianka-poliuretanowa-w-gdansku">
          <div class="h-full w-auto flex justify-center md:items-end sm:items-center md:pr-10 flex-col object-fill offer-img" style="height: 500px" :style="{ 'background-image': 'url(' + house + ')' }" >
          <div class="md:border-r border-white p-10 flex flex-col justify-around sm:text-center md:items-end sm:items-center" style="height: 300px">
            <h3 class="text-white text-center font-bold uppercase sm:text-center md:text-right text-3xl">Ocieplanie <br/> poddaszy <br/> domów</h3>
            <button class="text-white py-2 px-4 border border-white rounded shadow mx-1 my-2">Domy jednorodzinne</button>
          </div>

        </div>
        </router-link>
        <router-link class="offer-link" to="/izolacje-natryskowe-pur-budynkow-przemyslowych-i-rolniczych">
        <div class="h-full w-auto flex justify-center md:items-start sm:items-center md:pl-10 flex-col offer-img" style="height: 500px" :style="{ 'background-image': 'url(' + industrial + ')' }" >
          <div class="md:border-l border-gray-900 p-10 flex flex-col justify-around md:items-start items-center" style="height: 300px">
            <h3 class="text-gray-900 font-bold uppercase sm:text-center md:text-left text-3xl">Ocieplanie budynków<br>przemysłowych<br>i rolniczych</h3>
            <button class="text-gray-900 py-2 px-4 border border-gray-900 rounded shadow mx-1 my-2">Budynki komercyjne</button>
          </div>
        </div>
        </router-link>
      </div>

    </section>

    <section class="container my-20 p-4">
      <div class="grid  md:grid-cols-1 md:grid-cols-6 gap-10">
        <div class="col-span-2 ">
          <h2 class="text-red-800 font-semibold">
            Dlaczego Purekspert?
          </h2>
          <p>
            Purekspert to wiodący wykonawca izolacji natryskowych pianką poliuretanową dla klientów indywidualnych w Polsce.
          </p>
          <p>
            Specjalizujemy się w profesjonalnym nakładaniu izolacji z pianki poliuretanowej zamknięto-komorowej.
            Posiadamy wiedzę i doświadczenie aby zapewnić państwu najlepsze efekty wykonanego natrysku. nasza oferta skierowana jest głównie do klientów indywidualnych którzy mają problemy z doborem izolacji.
          </p>
          <h3>Obszar działania</h3>
          <p>
            Działamy na obszarze północnej Polski, a w szczególności na obszarze województwa Pomorskiego. O szczegóły pytaj naszych konsultantów.
          </p>
          <p>
            <a href="tel:+48668195008">KAROL: <span class="font-semibold">+48 668 195 008</span></a>
          </p>
          <p>
            <a href="tel:+48668195008">WOJCIECH: <span class="font-semibold">+48 508 346 348</span></a>
          </p>

        </div>
        <div class="col-span-4 ">
          <img :src="map" alt="mapa z zaznaczonymi obszarami działania"/>
        </div>
      </div>
    </section>

    <section class="pb-10">
      <div class="container">
        <h2 class="uppercase text-center font-semibold my-20">Opinie o <span class="text-red-800">purekspert</span></h2>

        <div class="grid md:grid-cols-12 sm:grid-cols-1">

          <div class="col-span-8 p-4">
            <div class="grid gap-10 md:grid-cols-3 sm:grid-cols-1">
              <div>
                <p>
                  W styczniu 2015 ze względu na duże straty ciepła zleciłem firmie Purekspert ocieplenie poddasza nieużytkowego pianką poliuretanową. Jestem bardzo zadowolony z wykonanych prac, które zostały przeprowadzone w ustalonym terminie. Panowie posiadają potrzebną wiedzę, aby objaśnić jakie plusy daje ocieplenie pianką pur. Polecam firmę osobom, które planują w najbliższej przyszłości ocieplać swój dom.
                </p>
                <p>
                  <span class="font-semibold">Daniel C.,</span>Gdańsk
                </p>
              </div>
              <div>
                <p>
                  Firma Wójt-Bud&Purekspert; wykonała u mnie ocieplenie natryskowe pianką poliuretanową na powierzchni 140 m2 na grubości 15cm. Firma stawiła się o czasie, prace przeprowadzone zostały sprawnie, a po ich zakończeniu zostawiono po sobie porządek. Jestem zadowolony z wykonanych prac i uważam, że firma jest godna polecenia, gdyż posiadają potrzebna wiedzę i profesjonalny sprzęt potrzebny przy takich pracach.
                </p>
                <p>
                  <span class="font-semibold">Robert S.,</span> Pępowo
                </p>

              </div>
              <div>
<p>
  Gorąco polecam firmę Wój-Bud&Purekspert;, jako specjalistów w ocieplaniu pianką poliuretanową. Wykonali u mnie izolacje pianką otwartokomorową na powierzchni 486 m2. Prace zostały wykonane w sposób profesjonalny i szybki, nie budzący najmniejszych zastrzeżeń. Chcesz izolować swój dom? Wybierz firmę Purekspert.
</p>
                <p>
                  <span class="font-semibold">Tadeusz M.,</span> Pruszcz Gdański
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4 items-center md:items-center flex flex-col md:justify-start ">
            <div class="my-5">
              <div class="font-bold text-6xl text-center" ref="satisfactions">
                <number tag="span" ref="number1"  :from="0" :to="100" :animationPaused="true"/><span class="text-red-700">%</span></div>
              <span>
                poziom zadowolenia klientów
              </span>

            </div>
            <div class="my-5 text-center">

              <div class="font-bold text-6xl text-center">+<number tag="span"  :from="0" :duration="2" ref="number2" :animationPaused="true" :to="1000"/></div>
              <span>
                Wykonanych realizacji
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  </div>


</template>

<script>
import RecentPostsWidget from './widgets/RecentPosts.vue';
import PagesWidget from './widgets/Pages.vue';
import LazyYoutube from 'vue-lazytube'
import savings from '../assets/img/symbole-oszczednosc@2.png'
import tightness from '../assets/img/symbole-szczelnosc@2.png'
import lightness from '../assets/img/symbole-lekkosc@2.png'
import durability from '../assets/img/symbole-trwalosc@2.png'
import soundproofing from '../assets/img/symbole-wygluszanie@2.png'
import vapor from '../assets/img/symbole-paroprzepuszczalnosc@2.png'
import worker from '../assets/img/worker.png'
import house from '../assets/img/house.jpg'
import industrial from '../assets/img/industrial.jpg'
import map from '../assets/img/map.jpeg'
import VueNumber from "vue-number-animation";
import backgroundImage from '../assets/img/naglowek1.jpg'

export default {
  components: {
    RecentPostsWidget,
    PagesWidget,
    VueNumber
  },
  data() {
    return {
      savings,
      tightness,
      lightness,
      durability,
      soundproofing,
      vapor,
      worker,
      house,
      industrial,
      map,
      isVisible: false,
      backgroundImage
    }
  },

  methods: {
    handleScroll() {
      if (!this.isVisible) {
        const divPosition = this.$refs.satisfactions.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (divPosition.top < windowHeight && divPosition.bottom >= 0) {
          this.isVisible = true;

          this.$refs.number1.play()
          this.$refs.number2.play()


        }

      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style type="postcss">

.page-title-header {
  height: 800px;
  ;
}
.youtube-caption {
  position: relative;
}
.youtube-caption::after{
  content: '|';
  display: block;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}
.worker {
  right: 0;
  bottom: 0;
  filter: brightness(1);
  transition: 1s;

}

.offer:hover {
background-size: cover;
}
.offer-link {
  overflow: hidden;
}

.offer-img {
 transition: 1s;
  background-size: 100%;
  background-position: center;
}
.offer-link:hover .offer-img {
  background-size: 150%;
  overflow: hidden;
}

@media only screen and (max-width: 600px)  {
  .worker {
    filter: brightness(0.5);
  }
}
</style>
