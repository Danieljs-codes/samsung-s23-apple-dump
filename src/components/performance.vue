<template>
     <section class="s_perf">
          <div class="s_perf_wrap child_wrap">
               <div class="s_perf_wrap_txt">
                    <p data-animation="h">Performance</p>
                    <h1 data-animation="h">Power for those who don't pause</h1>
               </div>
               <div class="s_perf_wrap_vid">
                    <video
                         loop
                         autoplay
                         muted
                         playsinline="true"
                         src="https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/videos/galaxy-s23-ultra-highlights-performance-m.webm"
                    ></video>
                    <p data-animation="p">Game at full throttle and smoothly switch between apps with our fastest processor ever.</p>
               </div>
          </div>
     </section>
</template>

<style lang="scss" scoped>
.s_perf {
     background: black;
     color: white;
     &_wrap {
          @include flex_col(5rem);
          text-align: center;
          &_txt {
               @include flex_col(2rem);
               p {
                    text-transform: uppercase;
                    font-size: 1.2em;
               }
               h1 {
                    max-width: 80%;
                    margin: 0 auto;
                    @include media("<=phone-tab") {
                         max-width: 100%;
                    }
               }
          }
          &_vid {
               @include flex_col(1.5rem);
               video {
                    width: 90%;
                    margin: 0 auto;
                    @include media("<=phone-tab") {
                         width: 100%;
                    }
               }
               p {
                    font-size: 1.3em;
                    max-width: 50%;
                    margin: 0 auto;
                    @include media("<=phone-tab") {
                         max-width: 100%;
                    }
               }
          }
     }
}
</style>
