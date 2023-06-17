<template>
     <div class="d_loader">
          <h2>Loading..</h2>
          <br />
          <p id="first">Fetching assets...</p>
          <div class="lds-ellipsis">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
          </div>
     </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
const props = defineProps({
     percent: "string",
});

onMounted(() => {
     changeTxt();
     function changeTxt() {
          var text = [
               "Fetching assets...",
               "Bundling sfc's...",
               "Caching data...",
               "Lying to you guys...",
               "Avocados are mid...",
               "Please don't go...",
               "Please stay...",
               "Are you still here?...",
               "Good things take time...",
          ];
          var counter = 0;
          var elem = document.getElementById("first");
          setInterval(change, 1500);
          function change() {
               elem.innerHTML = text[counter];
               counter++;
               if (counter >= text.length) {
                    counter = 0;
               }
          }
     }
});
</script>

<style lang="scss">
.d_loader {
     position: fixed;
     background: black;
     color: white;
     top: 0;
     bottom: 0;
     @include flex(center, center, 0);
     flex-direction: column;
     left: 0;
     height: 100vh;
     right: 0;
     z-index: 200;
     video {
          width: 100%;
     }
}
.lds-ellipsis {
     display: inline-block;
     position: relative;
     width: 80px;
     height: 80px;
}
.lds-ellipsis div {
     position: absolute;
     top: 33px;
     width: 13px;
     height: 13px;
     border-radius: 50%;
     background: #fff;
     animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
     left: 8px;
     animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
     left: 8px;
     animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
     left: 32px;
     animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
     left: 56px;
     animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
     0% {
          transform: scale(0);
     }
     100% {
          transform: scale(1);
     }
}
@keyframes lds-ellipsis3 {
     0% {
          transform: scale(1);
     }
     100% {
          transform: scale(0);
     }
}
@keyframes lds-ellipsis2 {
     0% {
          transform: translate(0, 0);
     }
     100% {
          transform: translate(24px, 0);
     }
}
</style>
