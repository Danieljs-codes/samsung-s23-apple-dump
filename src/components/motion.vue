<template>
     <div class="s_motion">
          <div class="s_motion_scene">
               <canvas :width="r.innerWidth" :height="r.innerHeight" id="motion_scene"></canvas>
          </div>
     </div>
</template>

<script setup>
import { onMounted } from "vue";
const r = window;
onMounted(() => {
     const html = document.documentElement;
     const canvas = document.getElementById("motion_scene");
     const context = canvas.getContext("2d");
     const frameCount = 278;
     const currentFrame = (index) => {
          return `/src/assets/samsung/ezgif-frame-${index.toString().padStart(3, "0")}.png`;
     };

     const img = new Image();
     img.src = currentFrame(1);
     img.onload = function () {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
     };

     const preloadImages = () => {
          for (let i = 0; i < frameCount; i++) {
               const img = new Image();
               img.src = currentFrame(i);
          }
     };

     const wrap = document.querySelector(".s_motion");
     window.addEventListener("scroll", () => {
          const scrollTop = html.scrollTop - wrap.offsetTop;
          const maxScrollTop = wrap.scrollHeight - window.innerHeight;
          const scrollFraction = scrollTop / maxScrollTop;
          const percent = Math.floor(scrollFraction * 100);

          const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
          if (frameIndex > 0) {
               requestAnimationFrame(() => updateImage(frameIndex + 1));
          }
     });

     const updateImage = (index) => {
          img.src = currentFrame(index);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
     };

     preloadImages();
});
</script>

<style lang="scss" scoped>
.s_motion {
     &_scene {
          width: 100%;
          height: 1000vh;
          z-index: 1;
          position: relative;
          canvas {
               top: 0;
               bottom: 0;
               left: 0;
               right: 0;
               max-width: 100vw;
               max-height: 100vh;
               position: sticky;
          }
     }
}
</style>
