<template>
     <section class="s_shoot">
          <div class="s_shoot_wrap">
               <div class="s_shoot_wrap_txt child_wrap">
                    <p data-animation="h">Camera</p>
                    <h1 data-animation="h">Shoot your shot</h1>
               </div>
               <div class="s_shoot_wrap_img-gall child_wrap">
                    <div class="s_shoot_wrap_img-gall_1">
                         <div class="left">
                              <img
                                   data-animation="skew"
                                   src="https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-camera-selfie.jpg"
                                   alt=""
                              />
                              <p data-animation="p">
                                   Seize the day and capture the night. Head out with a camera that's equipped with a high-resolution sensor
                                   and intelligent, light-absorbing pixels — delivering clear pics at any hour.
                              </p>
                         </div>
                         <div class="right">
                              <img
                                   data-animation="skew"
                                   src="https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-camera-selfie-with-balloon.jpg"
                                   alt=""
                              />
                         </div>
                    </div>
                    <div class="s_shoot_wrap_img-gall_2">
                         <div class="s_shoot_wrap_img-gall_2-img">
                              <img
                                   data-animation="skew"
                                   src="https://image-us.samsung.com/us/smartphones/galaxy-s23/hotfix/images/galaxy-s23-highlights-nightography-photo-01.jpg"
                                   alt=""
                              />
                         </div>
                         <div class="s_shoot_wrap_img-gall_2-txt">
                              <small>01</small>
                              <h2>Night Selfie</h2>
                              <p data-animation="p">
                                   The Front Camera's Dual Pixel technology focuses faster, even in low light. Object-based AI delivers
                                   authentic color for selfies that rival real life.
                              </p>
                         </div>
                    </div>
                    <div class="s_shoot_wrap_img-gall_3">
                         <div class="vid_cont">
                              <video
                                   data-animation="skew"
                                   autoplay
                                   muted
                                   loop
                                   playsinline
                                   src="https://image-us.samsung.com/us/smartphones/galaxy-s23/videos/galaxy-s23-highlights-nightography.mp4"
                              ></video>
                         </div>
                         <div class="s_shoot_wrap_img-gall_3-txt">
                              <h3 data-animation="h">Night selfie video</h3>
                              <p data-animation="p">
                                   It's not just stills that dominate the dark, you're getting pin sharp night videos, too. Now, even the
                                   Front Camera has the skills to clearly capture clips of you and your friends after the sun sets.
                              </p>
                         </div>
                    </div>
                    <div class="s_shoot_wrap_img-gall_4">
                         <div class="left">
                              <img
                                   data-animation="skew"
                                   src="https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-resolution-back.jpg"
                                   alt=""
                              />
                              <img
                                   data-animation="skew"
                                   src="https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-resolution-front.jpg"
                                   alt=""
                              />
                         </div>
                         <div class="right">
                              <img
                                   data-animation="skew"
                                   src="https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-resolution-wide.jpg"
                                   alt=""
                              />
                              <div class="txt">
                                   <p data-animation="h">HIGH RESOLUTION</p>
                                   <h3 data-animation="p">Get all the details</h3>
                                   <p data-animation="p">
                                        The 50MP Wide-Angle Camera works hand-in-hand with a powerful processor, rapidly combining frames to
                                        extract bits from each into a single hi-res photo. Add in Detail Enhancer technology and you've got
                                        quality so sharp, you'll keep zooming in for more.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="s_shoot_wrap_base">
                    <img src="https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-camera-kv.jpg" alt="" />
                    <div class="s_shoot_wrap_base_specs">
                         <div>
                              <span></span>
                              <div class="txt">
                                   <h3 data-animation="h">10MP</h3>
                                   <p data-animation="p">3x optical zoom</p>
                                   <p data-animation="p">Telephoto Camera</p>
                              </div>
                         </div>
                         <div>
                              <span></span>
                              <div class="txt">
                                   <h3 data-animation="h">50MP</h3>
                                   <p data-animation="p">Wide-Angle</p>
                                   <p data-animation="p">Camera</p>
                              </div>
                         </div>
                         <div>
                              <span></span>
                              <div class="txt">
                                   <h3 data-animation="h">12MP</h3>
                                   <p data-animation="p">Ultrawide Camera</p>
                              </div>
                         </div>
                         <div>
                              <span></span>
                              <div class="txt">
                                   <h3 data-animation="h">12MP</h3>
                                   <p data-animation="p">Selfie Camera</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </section>
</template>

<script setup>
import { onMounted } from "vue";
import { IO } from "../animations/observe";

onMounted(() => {
     const spans = document.querySelectorAll(".s_shoot_wrap_base_specs span");
     spans.forEach((span) => {
          IO(span).then(() => {
               span.classList.add("anim");
          });
     });
});
</script>

<style lang="scss" scoped>
.s_shoot {
     background: #212121;
     padding-bottom: 0 !important;
     color: white;
     &_wrap {
          @include flex_col(1rem);
          @include media("<=tablet") {
               @include flex_col(4rem);
          }
          position: relative;
          &_txt {
               @include flex_col(2rem);
               p {
                    text-transform: uppercase;
                    font-size: 1.2em;
                    @include media("<=phone-tab") {
                         font-size: 1em;
                    }
               }
               h1 {
                    font-size: 10rem;
                    line-height: 9.5rem;
                    @include media("<=tablet") {
                         font-size: 6rem;
                         line-height: 5.6rem;
                    }
                    @include media("<=phone-tab") {
                         font-size: 4rem;
                         line-height: 4rem;
                    }
               }
          }
          &_img-gall {
               @include flex_col(4rem);
               &_1 {
                    @include flex(space-between, center, 5rem);
                    @include media("<=tablet") {
                         @include flex_col(4rem);
                    }
                    .left {
                         width: 45%;
                         @include flex_col(4rem);
                         justify-content: space-between;
                         @include media("<=tablet") {
                              width: 100%;
                              // text-align: center;
                         }
                         img {
                              width: 100%;
                         }
                         p {
                              font-size: 1.1em;
                         }
                    }
                    .right {
                         width: 55%;
                         @include media("<=tablet") {
                              width: 80%;
                         }
                         img {
                              width: 100%;
                         }
                    }
               }
               &_2 {
                    @include flex(center, center, 4rem);
                    @include media("<=tablet") {
                         gap: 2rem;
                         flex-direction: column-reverse;
                    }
                    &-txt {
                         width: 40%;

                         @include flex_col(1rem);
                         @include media("<=tablet") {
                              width: 100%;
                              @include flex_col(1.5rem);
                         }
                         p {
                              font-size: 1.1em;
                         }
                    }
                    &-img {
                         width: 40%;
                         @include media("<=tablet") {
                              width: 100%;
                         }
                         img {
                              width: 100%;
                         }
                    }
               }
               &_3 {
                    position: relative;
                    text-align: center;
                    @include flex_col(3rem);
                    .vid_cont {
                         width: 70%;
                         margin: 0 auto;
                         position: relative;
                         @include media("<=tablet") {
                              width: 100%;
                         }
                         video {
                              width: 100%;
                         }
                    }
                    &-txt {
                         @include flex_col(1rem);
                         p {
                              width: 50%;
                              margin: 0 auto;
                              @include media("<=tablet") {
                                   width: 100%;
                              }
                         }
                    }
               }
               &_4 {
                    @include flex(center, flex-start, 3rem);
                    margin-top: 3rem;
                    @include media("<=tablet") {
                         @include flex_col(4rem);
                    }
                    .left {
                         width: 40%;
                         position: relative;
                         @include media("<=tablet") {
                              width: 100%;
                         }
                         img {
                              &:nth-child(1) {
                                   width: 100%;
                                   height: 41rem;
                                   @include media("<=tablet") {
                                        height: 35rem;
                                   }
                              }
                              &:nth-child(2) {
                                   width: 18rem;
                                   position: absolute;
                                   bottom: 5rem;
                                   left: -30%;
                                   @include media("<=tablet") {
                                        left: -10%;
                                        bottom: 2rem;
                                   }
                              }
                         }
                    }
                    .right {
                         max-width: 40%;
                         @include media("<=tablet") {
                              max-width: 100%;
                              gap: 7rem;
                         }
                         height: 100%;
                         display: flex;
                         flex-direction: column;
                         justify-content: space-between;
                         align-items: flex-end;
                         gap: 10rem;
                         img {
                              width: 19rem;
                         }
                         .txt {
                              @include flex_col(0.4rem);
                              width: 90%;
                              @include media("<=tablet") {
                                   @include flex_col(1rem);
                                   width: 100%;
                              }
                         }
                    }
               }
          }
          &_base {
               width: 100%;
               bottom: 0rem;
               min-height: 80rem;
               position: relative;
               overflow: hidden;
               @include media("<=tablet") {
                    min-height: 64rem;
               }
               @include media("<=phone-tab") {
                    min-height: 50rem;
               }
               img {
                    width: 110%;
                    z-index: 1;
                    bottom: 0;
                    position: absolute;
                    @include media("<=tablet") {
                         width: 160%;
                         transform: translateX(-15rem);
                    }
                    @include media("<=phone-tab") {
                         width: 180%;
                         transform: translateX(-10rem);
                    }
               }
               &_specs {
                    > div {
                         z-index: 3;
                         position: absolute;
                         @include flex(center, flex-start, 1.5rem);
                         @include media("<=phone-tab") {
                              flex-direction: column-reverse;
                              align-items: center;
                              text-align: center;
                         }
                         @include media("<=tablet") {
                              gap: 1rem;
                         }

                         h3 {
                              @include media("<=tablet") {
                                   font-size: 2rem;
                              }
                         }
                         p {
                              font-size: 0.8em;
                         }
                         span {
                              display: block;
                              background: #777777;
                              width: 0.1rem;
                              height: 0;
                              transition: height 2s ease-out;
                         }
                         &:nth-child(1) {
                              left: 31%;
                              top: 37%;
                              @include media("<=tablet") {
                                   left: 13%;
                                   top: 30%;
                              }
                              @include media("<=phone-tab") {
                                   left: 2%;
                                   top: 17%;
                              }
                              span.anim {
                                   height: 24rem;
                                   @include media("<=phone-tab") {
                                        height: 20rem;
                                   }
                              }
                         }
                         &:nth-child(2) {
                              left: 40rem;
                              top: 22rem;
                              @include media("<=tablet") {
                                   left: 15rem;
                                   top: 14rem;
                              }
                              @include media("<=phone-tab") {
                                   left: 6.7rem;
                                   top: 1rem;
                              }
                              span.anim {
                                   height: 25rem;
                              }
                         }
                         &:nth-child(3) {
                              left: 51rem;
                              top: 15rem;
                              @include media("<=tablet") {
                                   left: 24rem;
                                   top: 8rem;
                              }
                              @include media("<=phone-tab") {
                                   left: 12rem;
                                   top: 18%;
                              }
                              span.anim {
                                   height: 27rem;
                                   @include media("<=phone-tab") {
                                        height: 15rem;
                                   }
                              }
                         }
                         &:nth-child(4) {
                              right: 12rem;
                              top: 26rem;
                              @include media("<=tablet") {
                                   right: 3rem;
                                   top: 17rem;
                              }
                              @include media("<=phone-tab") {
                                   right: 0.5rem;
                                   top: 30%;
                              }
                              span.anim {
                                   height: 25rem;
                                   @include media("<=phone-tab") {
                                        height: 15rem;
                                   }
                              }
                         }
                    }
               }
          }
     }
}
</style>
