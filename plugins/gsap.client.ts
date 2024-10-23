import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin
  );

  return {
    gsap: {
      gsap,
      ScrollTrigger,
      Draggable,
      MotionPathPlugin,
      to: gsap.to,
      from: gsap.from,
      fromTo: gsap.fromTo,
      timeline: gsap.timeline,
      set: gsap.set,
    },
  };
});
