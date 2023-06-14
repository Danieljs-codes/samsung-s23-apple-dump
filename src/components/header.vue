<template>
     <header class="child_wrap">
          <nav>
               <img src="https://image-us.samsung.com/SamsungUS/logo/gnb-desktop-120x32.png" alt="" />
               <li>Shop</li>
               <li>Mobile</li>
               <li>Computing</li>
               <li>Music</li>
               <li>Displays</li>
               <li>Appliances</li>
               <li>Accessories</li>
               <li>SmartThings</li>
               <li>Gift Guide</li>
               <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
                         <path
                              d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
                         ></path>
                    </svg>
               </li>
               <li>
                    <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                         <path
                              d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"
                         ></path>
                    </svg>
               </li>
          </nav>
     </header>
     <div class="sticky">
          <div class="sticky_container child_wrap">
               <h3>Galaxy S23</h3>
               <nav>
                    <ul>
                         <li>Overview</li>
                         <li>Tech Specs</li>
                         <button>Buy</button>
                    </ul>
               </nav>
          </div>
     </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
     padding-top: 0.7rem;
     background: white;
     position: relative;
     nav {
          margin: 0 auto;
          @include flex(space-between, center, none);
          li {
               list-style-type: none;
               color: rgb(0, 0, 0.8);
               font-size: 0.8rem;
               opacity: 0.8;
          }
          img {
               width: 7.5rem;
          }
     }
}

.sticky {
     z-index: 20;
     transition: 1s ease-out;
     position: sticky;
     border-bottom: 1px solid $fadegray;
     background: rgba(255, 255, 255, 0.312);
     left: 0;
     right: 0;
     top: 0;
     &_container {
          @include flex(space-between, center, center);
          h3 {
               color: inherit;
               font-size: 1.3rem;
               opacity: 0.88;
               font-weight: 500;
               font-family: Samsungsharp;
          }
          nav {
               padding: 1rem 0;
               ul {
                    @include flex(center, center, 2rem);
                    color: rgb(0, 0, 0);
                    opacity: 0.88;
                    li {
                         list-style: none;
                         font-size: 12px;
                    }
                    button {
                         background: $blue;
                         color: white;
                         outline: none;
                         border: none;
                         border-radius: 1rem;
                         font-size: 12px;
                         font-family: inherit;
                         padding: 0.4rem 1rem;
                    }
               }
          }
     }
}
</style>
