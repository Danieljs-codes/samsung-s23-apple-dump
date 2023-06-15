<template>
     <section class="s_last">
          <div class="s_last_wrap">
               <div class="s_last_wrap_first child_wrap">
                    <div class="s_last_wrap_first_txt">
                         <p>DESIGN</p>
                         <h1 data-animation="h">More innovation, less footprint</h1>
                    </div>
                    <div class="s_last_wrap_first_img">
                         <img
                              data-scroll
                              data-scroll-speed="2"
                              src="https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-spec-camera.jpg"
                              alt=""
                         />
                         <img
                              data-scroll
                              data-scroll-speed="-2"
                              data-scroll-delay="1"
                              src="https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-spen.jpg"
                              alt=""
                         />
                    </div>
               </div>
               <div class="s_last_wrap_second">
                    <div class="s_last_wrap_second_o child_wrap">
                         <p>CAMERA</p>
                         <div class="r">
                              <h1 data-animation="h">"Can you send me that?"</h1>
                              <p data-animation="p">
                                   Get ready to become your group's go-to photographer. We've packed Galaxy's biggest sensor,
                                   light-absorbing pixels and video stabilization technology into one epic camera for life's most
                                   share-worthy moments.
                              </p>
                         </div>
                    </div>
               </div>
               <div class="s_last_wrap_third child_wrap">
                    <div class="s_last_wrap_third_txt">
                         <p data-animation="p">ECOSYSTEM</p>
                         <h2 data-animation="h">The connected power of Samsung Galaxy</h2>
                    </div>
                    <div class="img_space">
                         <img
                              data-scroll
                              data-scroll-speed="-1"
                              src="https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/localization/d3eco.png"
                              alt=""
                         />
                         <img
                              data-scroll
                              data-scroll-speed="1"
                              data-scroll-delay="1"
                              data-scroll-direction="horizontal"
                              src="https://image-us.samsung.com/us/smartphones/galaxy-z-fold4/v1/images/galaxy-z-fold4_ecosystem_watch.png"
                              alt=""
                         />
                         <img
                              data-scroll
                              data-scroll-speed="2"
                              src="https://image-us.samsung.com/us/smartphones/galaxy-z-fold4/v1/images/galaxy-z-fold4_ecosystem_buds.png"
                              alt=""
                         />
                    </div>
               </div>
          </div>
     </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.s_last {
     width: 100%;
     background: black;
     color: white;
     &_wrap {
          @include flex_col(2rem);
          &_first {
               &_txt {
                    max-width: 70%;
                    @include flex_col(2rem);
                    @include media("<=tablet") {
                         max-width: 100%;
                    }
               }
               &_img {
                    width: 45rem;
                    @include flex(space-between, center, 0);
                    img {
                         width: 100%;
                    }
                    @include media("<=tablet") {
                         width: 100%;
                    }
               }
               @include flex_col(7rem);
          }
          &_second {
               min-height: 100vh;
               background-size: 100%;
               background-repeat: no-repeat;
               background-position-x: right;
               background-position-y: bottom;
               @include media("<=tablet") {
                    min-height: 75vh;
               }
               background-image: url(https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-camera.jpg);
               &_o {
                    @include flex_col(3rem);
                    .r {
                         @include flex(space-between, flex-start, 0);
                         @include media("<=tablet") {
                              @include flex_col(3rem);
                         }
                         width: 100%;
                         h1 {
                              width: 50%;
                              @include media("<=tablet") {
                                   width: 100%;
                              }
                              @include media("<=phone-tab") {
                                   font-size: 3rem;
                                   line-height: 3rem;
                              }
                         }
                         p {
                              width: 40%;
                              font-size: 1.1rem;
                              @include media("<=tablet") {
                                   width: 100%;
                              }
                         }
                    }
               }
          }
          &_third {
               padding: 5rem 0;
               @include flex_col(7rem);
               &_txt {
                    @include flex_col(3rem);
                    h2 {
                         max-width: 50%;
                         @include media("<=tablet") {
                              max-width: 100%;
                         }
                    }
               }
               .img_space {
                    min-height: 120vh;
                    position: relative;
                    @include media("<=tablet") {
                         min-height: 100vh;
                         @include flex_col(5rem);
                         align-items: center;
                         width: 100%;
                    }
                    img {
                         position: absolute;
                         @include media("<=tablet") {
                              position: static;
                         }
                         &:nth-child(1) {
                              left: 0rem;
                              top: 0;
                              @include media("<=tablet") {
                                   width: 100%;
                              }
                         }
                         &:nth-child(2) {
                              right: 5rem;
                              top: 0;
                              @include media("<=tablet") {
                                   width: 50%;
                              }
                         }
                         &:nth-child(3) {
                              left: 30rem;
                              bottom: 0rem;
                              @include media("<=tablet") {
                                   width: 60%;
                              }
                         }
                    }
               }
          }
     }
}
</style>
