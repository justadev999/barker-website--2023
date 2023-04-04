<script>
import { defineComponent, computed, ref, onMounted} from 'vue'
import MobTokenomics from "../assets/svg/new-toke-mobile.svg"
import DeskTokenomics from "../assets/svg/barker-new-tokenomics.svg"

import { useBreakpoint } from '../functions/useBreakpoint'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
name: 'TokenomicsSection' ,
components: {MobTokenomics, DeskTokenomics},
setup () {
    const matches = useBreakpoint()
    const isMobile = computed(() => matches.value?.beforeLg)

     const tokenomicsSection = ref('')

  onMounted(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: tokenomicsSection.value,
          start: "top center",
        },
      });
      tl.fromTo(
        ".toke",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      );
    });
    return {
        isMobile,
        tokenomicsSection
    }
}
})
</script>

<template>
    <section ref="tokenomicsSection" class="roadmap-section h-screen w-full lg:px-4 py-4">
        <MobTokenomics v-if="isMobile" class="toke w-full h-full" />
        <DeskTokenomics v-if="!isMobile" class="toke w-full h-full" />
    </section>
</template>