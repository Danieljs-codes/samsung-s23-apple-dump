<template>
  <div class="s_hero">
    <div class="s_hero_scene">
      <canvas
        :width="r.innerWidth"
        :height="r.innerHeight"
        id="hero_scene"
      ></canvas>
      <div class="s_hero_scene_txt">
        <h1 ref="hero_txt"></h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const hero_txt = ref(null);
const r = window;

onMounted(() => {
  const html = document.documentElement;
  const canvas = document.getElementById("hero_scene");
  const context = canvas.getContext("2d");
  const frameCount = 276;
  const currentFrame = (index) => {
    return `/src/assets/hero/ezgif-frame-${index
      .toString()
      .padStart(3, "0")}.png`;
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
    if (percent === 14) {
    }
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(scrollFraction * frameCount)
    );
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
.s_hero {
  position: relative;
  width: 100%;

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
    &_txt {
      position: sticky;
      z-index: 2;
      top: 50%;
      width: 100%;
      text-align: center;
      h1 {
        display: none;
      }
    }
  }
}
</style>
