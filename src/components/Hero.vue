<template>
     <div class="s_hero">
          <div class="s_hero_scene">
               <canvas :width="r.innerWidth" :height="r.innerHeight" id="hero_scene"></canvas>
               <div class="s_hero_scene_txt">
                    <h1 ref="hero_txt"></h1>
               </div>
          </div>
     </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed, defineEmits } from "vue";
const hero_txt = ref(null);
const r = window;

const imageLoadingState = reactive({
  loadedImages: 0,
  frameCount: 267,
});

const loadingPercentage = computed(() => {
  return (imageLoadingState.loadedImages / imageLoadingState.frameCount) * 100;
});

const emit =defineEmits(['returnLoadVal'])

onMounted(() => {
  const html = document.documentElement;
  const canvas = document.getElementById("hero_scene");
     const context = canvas.getContext("2d");
     const frameCount = 267;

  const currentFrame = (index) => {
    return `https://res.cloudinary.com/dszdgdeoh/image/upload/Hero/hero-${index}.png`;
  };
 
  const img = new Image();
  img.src = currentFrame(2);
  img.onload = function () {
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const imgWidth = img.width * scale;
    const imgHeight = img.height * scale;
    const x = (canvas.width - imgWidth) / 2;
    const y = (canvas.height - imgHeight) / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, imgWidth, imgHeight);
  };

  const preloadImages = () => {
    for (let i = 2; i < imageLoadingState.frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        // Increment the counter each time an image is loaded.
           imageLoadingState.loadedImages++;
           emit('returnLoadVal', Math.round(loadingPercentage.value));
      };
    }
  };

     const wrap = document.querySelector(".s_hero");
     window.addEventListener("scroll", () => {
          const scrollTop = html.scrollTop - wrap.offsetTop;
          const maxScrollTop = wrap.scrollHeight - window.innerHeight;
          const scrollFraction = scrollTop / maxScrollTop;
          const percent = Math.floor(scrollFraction * 100);

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
          const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
          if (frameIndex > 0) {
               requestAnimationFrame(() => updateImage(frameIndex + 1));
          }
     });

     const updateImage = (index) => {
          img.src = currentFrame(index);
          img.onload = () => {
               const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
               const imgWidth = img.width * scale;
               const imgHeight = img.height * scale;
               const x = (canvas.width - imgWidth) / 2;
               const y = (canvas.height - imgHeight) / 2;
               context.clearRect(0, 0, canvas.width, canvas.height);
               context.drawImage(img, x, y, imgWidth, imgHeight);
          };
     };

     preloadImages();
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
