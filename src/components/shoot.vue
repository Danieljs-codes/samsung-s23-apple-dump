<template>
  <section class="s_shoot">
    <div class="s_shoot_wrap">
      <div class="s_shoot_wrap_txt child_wrap">
        <p data-animation="h">Camera</p>
        <h1 data-animation="h">Shoot your shot</h1>
      </div>
      <div class="s_shoot_wrap_img-gall">
        <div class="s_shoot_wrap_img-gall_1 child_wrap">
          <div class="left">
            <img
              src="https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-camera-selfie.jpg"
              alt=""
            />
            <p data-animation="p">
              Seize the day and capture the night. Head out with a camera that's
              equipped with a high-resolution sensor and intelligent,
              light-absorbing pixels — delivering clear pics at any hour.
            </p>
          </div>
          <div class="right">
            <img
              src="https://image-us.samsung.com/us/smartphones/galaxy-s23/images/galaxy-s23-highlights-camera-selfie-with-balloon.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.s_shoot {
  background: #212121;
  color: white;
  &_wrap {
    @include flex_col(1rem);
    &_txt {
      @include flex_col(2rem);
      p {
        text-transform: uppercase;
        font-size: 1.2em;
      }
      h1 {
        font-size: 10rem;
        line-height: 9rem;
      }
    }
    &_img-gall {
      &_1 {
        @include flex(space-between, center, 5rem);
        .left {
          width: 45%;
          @include flex_col(4rem);
          justify-content: space-between;
          img {
            width: 100%;
          }
          p {
            font-size: 1.2em;
          }
        }
        .right {
          width: 55%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
