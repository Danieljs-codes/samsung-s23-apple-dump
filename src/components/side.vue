<template>
     <div class="s_side">
          <div class="s_side_1 wrap">
               <h1 data-animation="h">Galaxy evolved</h1>
          </div>
          <div class="s_side_2 wrap">
               <h1 data-animation="h">Ultra evolved</h1>
          </div>
     </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.s_side {
     width: 100%;
     .wrap {
          height: 110vh;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          @include flex(center, center, 0);
          background-attachment: fixed;
          color: white;
          h1 {
               max-width: 60%;
          }
          @include media("<=tablet") {
               height: 100vh;
               background-attachment: scroll;
               background-position: center;
               background-size: cover;
          }
     }
     &_1 {
          background-image: url(https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-kv.jpg);
     }
     &_2 {
          background-image: url(https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg);
     }
}
</style>
