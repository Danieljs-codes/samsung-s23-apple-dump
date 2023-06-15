import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const skew = () => {
     const images = gsap.utils.toArray('[data-animation="skew"');

     images.forEach((img) => {
          ScrollTrigger.create({
               trigger: img,
               start: "top bottom",
               end: "bottom top",
               scrub: true,
               onUpdate({ getVelocity }) {
                    gsap.fromTo(
                         img,
                         {
                              ease: "Power1.easeInOut",
                              skewY: `${getVelocity() / 300}deg`,
                         },
                         {
                              skewY: 0,
                         }
                    );
               },
          });
     });
};
