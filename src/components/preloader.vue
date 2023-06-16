<template>
  <div class="d_loader">
    <img src="https://image-us.samsung.com/SamsungUS/logo/gnb-desktop-120x32.png" alt="" />
  </div>
</template>

<script setup></script>

<style lang="scss">
.d_loader {
  position: fixed;
  background: black;
  color: white;
  top: 0;
  bottom: 0;
  @include flex(center,center,0);
  flex-direction: column;
  left: 0;
  height: 100vh;
  right: 0;
  z-index: 200;
  video {
    width: 100%;
  }
}
</style>
