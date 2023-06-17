<template>
     <div class="s_motion">
          <div class="s_motion_scene">
               <canvas :width="r.innerWidth" :height="r.innerHeight" id="motion_scene"></canvas>
          </div>
     </div>
</template>

<script setup>
import { onMounted } from "vue";
import { drawVideo } from "../animations/drawVideo";
const r = window;

onMounted(() => {
     const canvas = document.getElementById("motion_scene");
     drawVideo(canvas, "https://res.cloudinary.com/dszdgdeoh/video/upload/v1687007052/final_base_avw7pm.mp4");
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
