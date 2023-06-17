<template>
     <div class="s_motion">
          <div class="s_motion_scene">
               <video crossorigin="anonymous" loop autoplay muted="true" playsinline>
                         <source
                              type="video/mp4"
                              src="https://res.cloudinary.com/dszdgdeoh/video/upload/v1687007052/final_base_avw7pm.mp4"
                         />
                    </video>
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
     const video = document.querySelector(".s_motion_scene video");
     drawVideo(canvas, video);
});
</script>

<style lang="scss" scoped>
.s_motion {
     &_scene {
          width: 100%;
          height: 1000vh;
          z-index: 1;
          position: relative;
          video{
               display: none;
          }
     }
}
</style>
