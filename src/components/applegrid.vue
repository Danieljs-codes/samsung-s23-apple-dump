<template>
     <section class="s_grid">
          <div class="s_grid_wrap mg_au">
               <div class="ta_center">
                    <h3 data-animation="h">Meet S23 Ultra</h3>
                    <img src="../assets/galaxy-s23.png" alt="" />
                    <span class="b">
                         <p>Peak Brightness</p>
                         <p>1750 nits</p>
                    </span>
               </div>
               <div>
                    <img src="https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-display.jpg" alt="" />
               </div>
               <div>
                    <img src="https://image-us.samsung.com/SamsungUS/configurator/PC_L1_SPen.png" alt="" />
               </div>
               <div></div>
               <div>
                    <video
                         loop
                         playsinline="true"
                         muted
                         autoplay
                         src="https://image-us.samsung.com/us/smartphones/galaxy-s23/videos/galaxy-s23-highlights-design.webm"
                    ></video>
               </div>
               <div>
                    <video
                         loop
                         playsinline="true"
                         muted
                         autoplay
                         src="https://image-us.samsung.com/us/smartphones/galaxy-s23/configurator/DB2C-328-GalleryVideo-S23Ultra-AnimatedVideo_Filled.mp4"
                    ></video>
               </div>
               <div>
                    <h3 data-animation="h">More light for your night</h3>
               </div>
               <div>
                    <img src="https://image-us.samsung.com/SamsungUS/configurator/PC_L1_Nightography.png" alt="" />
               </div>
               <div>
                    <h3 data-animation="h">Inspired By Nature</h3>
               </div>
               <div>
                    <img src="https://image-us.samsung.com/SamsungUS/configurator/PC_L1_Performance.png" alt="" />
               </div>
          </div>
     </section>
</template>

<script setup>
import { onMounted } from "vue";
import { IO } from "../animations/observe";

onMounted(() => {
     const sects = document.querySelectorAll(".s_grid_wrap > div");
     sects.forEach((item) => {
          IO(item).then(
               () => {
                    item.classList.add("fadeIn");
               },
               {
                    threshold: 0.2,
               }
          );
     });
});
</script>

<style lang="scss" scoped>
.fadeIn {
     opacity: 1 !important;
}
.s_grid {
     width: 100%;
     min-height: 100vh;
     &_wrap {
          width: 70%;
          display: grid;
          grid-auto-rows: 20rem;
          grid-template-columns: 2.1fr 1.2fr 2.1fr;
          grid-gap: toRem(20);
          grid-template-areas:
               "one one two"
               "one one three"
               "four five five"
               "six seven seven"
               "eight seven seven"
               "nine nine ten";
          @include media("<=tablet") {
               @include flex_col(2rem);
          }
          @include media("<=phone-tab") {
               width: 85%;
               @include flex_col(2rem);
          }

          div {
               border-radius: toRem(6);
               background: $c_gray;
               overflow: hidden;
               transition: 1s ease-in-out;
               border: 1px solid rgba(0, 0, 0, 0.229);
               position: relative;
               opacity: 0;
               @include media("<=tablet") {
                    max-height: 30rem;
                    min-height: 19rem;
               }

               &:nth-child(1) {
                    grid-area: one;
                    @include flex_col(0.7rem);
                    height: 30rem;
                    align-items: center;
                    justify-content: center;
                    img {
                         width: 27rem;
                         @include media("<=tablet") {
                              width: 16rem;
                         }
                    }
                    p {
                         display: inline;
                         margin: 0 1rem;
                    }
               }
               &:nth-child(2) {
                    grid-area: two;
                    img {
                         width: 100%;
                    }
               }
               &:nth-child(3) {
                    grid-area: three;
                    img {
                         width: 100%;
                    }
               }
               &:nth-child(4) {
                    grid-area: four;
                    background-size: 110%;
                    background-image: url(https://image-us.samsung.com/us/smartphones/galaxy-s23/configurator/D3-Exclusive-Configurator-DT-800x600.jpg);
                    @include media("<=tablet") {
                         background-size: cover;
                         background-position-x: -1.2rem;
                    }
               }
               &:nth-child(5) {
                    grid-area: five;
                    width: 100%;
                    height: 100%;
                    video {
                         position: absolute;
                         z-index: 1;
                         bottom: 0;
                         top: 0;
                         height: 100%;
                    }
               }
               &:nth-child(6) {
                    grid-area: six;
               }
               &:nth-child(7) {
                    grid-area: seven;
                    @include flex(center, flex-end, 0);
                    color: white;
                    background-size: contain;
                    height: 30rem;
                    h3 {
                         margin-bottom: 3rem;
                         text-align: center;
                         max-width: 60%;
                         @include media("<=tablet") {
                              max-width: 100%;
                         }
                    }
                    @include media("<=tablet") {
                         background-size: 100%;
                    }
                    background-image: url(https://image-us.samsung.com/us/smartphones/galaxy-s23/hotfix/images/galaxy-s23-highlights-nightography-kv.jpg);
               }
               &:nth-child(8) {
                    grid-area: eight;
                    img {
                         width: 100%;
                    }
               }
               &:nth-child(9) {
                    grid-area: nine;
                    background-position: top right;
                    background-size: 150%;
                    @include flex(center, center, 0);

                    h3 {
                         color: white;
                         @extend %rm-mobile;
                    }
                    background-image: url(https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-common-buynow-banner.jpg);
               }
               &:nth-child(10) {
                    grid-area: ten;
                    img {
                         width: 100%;
                    }
               }
          }
     }
}
</style>
