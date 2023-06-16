<template>
     <div class="s_motion">
          <div class="s_motion_scene">
               <canvas :width="r.innerWidth" :height="r.innerHeight" id="motion_scene"></canvas>
          </div>
     </div>
</template>

<script setup>
import { onMounted } from "vue";
import { drawImage } from "../animations/drawImage";
const r = window;

onMounted(() => {
     const canvas = document.getElementById("motion_scene");
     const frameCount = 270;
     const currentFrame = (index) => {
     return `https://res.cloudinary.com/dszdgdeoh/image/upload/v1686927267/samsung/wwsss-${index}.png`;
   };
     drawImage(canvas, currentFrame, frameCount);
});
</script>

<style lang="scss" scoped>
.s_motion {
     &_scene {
          width: 100%;
          height: 1000vh;
          z-index: 1;
          position: relative;
     }
}
</style>
