<template>
     <div class="s_hero">
          <div class="s_hero_scene">
               <video crossorigin="anonymous" loop autoplay muted="true" playsinline>
                         <source
                              type="video/mp4"
                              src="https://res.cloudinary.com/dszdgdeoh/video/upload/v1687005753/sampple.mp4"
                         />
                    </video>
               <canvas :width="r.innerWidth" :height="r.innerHeight" id="hero_scene"></canvas>
               <div class="s_hero_scene_txt">
                    <h1 ref="hero_txt"></h1>
               </div>
          </div>
     </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
const hero_txt = ref(null);
const r = window;

// const imageLoadingState = reactive({
//      loadedImages: 0,
//      frameCount: 166,
// });

const emit = defineEmits(["returnLoadVal"]);

onMounted(() => {
     const html = document.documentElement;
     const canvas = document.getElementById("hero_scene");
     const context = canvas.getContext("2d");

     const video = document.querySelector(".s_hero_scene video");
     let scale, x, y, w, h;

     const updateVideoDimensions = () => {
          scale = Math.max(canvas.width / video.videoWidth, canvas.height / video.videoHeight);
          w = video.videoWidth * scale;
          h = video.videoHeight * scale;
          x = (canvas.width - w) / 2;
          y = (canvas.height - h) / 2;
     };


     video.addEventListener(
          "loadeddata",
          function () {
               updateVideoDimensions();
               // context.clearRect(0, 0, canvas.width, canvas.height);
                 context.drawImage(video, x, y, w, h);  
          },
          false
     );

     window.addEventListener("resize", () => {
          updateVideoDimensions();
     });

     const resizeObserver = new window.ResizeObserver((entries) => {
          for (let entry of entries) {
               if (entry.target === canvas) {
                    updateVideoDimensions();
               }
          }
     });
     resizeObserver.observe(canvas);

     const wrap = document.querySelector(".s_hero");

     window.addEventListener("scroll", () => {
          const scrollTop = html.scrollTop - wrap.offsetTop;
          const maxScrollTop = wrap.scrollHeight - window.innerHeight;
          const scrollFraction = scrollTop / maxScrollTop;

          const percent = Math.floor(scrollFraction * 100);

          video.currentTime = video.duration * scrollFraction;
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(video, x, y, w, h);

          switch (percent) {
               case 14:
                    hero_txt.value.innerHTML = "Design Speed";
                    hero_txt.value.style = "color:#39332d; display:block";
                    break;
               case 38:
                    hero_txt.value.innerHTML = "Fast Processor";
                    hero_txt.value.style.color = "#fceffe";
                    break;

               case 59:
                    hero_txt.value.innerHTML = "High Resolution";
                    hero_txt.value.style.color = "white";
                    break;

               case 90:
                    hero_txt.value.innerHTML = "Ultra Evolved";
                    hero_txt.value.style.color = "#a8aea7";
                    break;
               case 100:
                    hero_txt.value.style.color = "transparent";
                    break;
               default:
                    break;
          }
     });
});
</script>

<style lang="scss" scoped>
.s_hero {
     position: relative;
     width: 100%;

     &_scene {
          width: 100%;
          height: 1000vh;
          z-index: 1;
          position: relative;
          video{
               display: none;
          }
          &_txt {
               position: sticky;
               z-index: 2;
               top: 50%;
               width: 100%;
               text-align: center;
               h1 {
                    display: none;
                    @include media("<=phone-tab") {
                         font-size: 3em;
                    }
               }
          }
     }
}
</style>
