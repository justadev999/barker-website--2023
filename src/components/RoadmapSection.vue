<script>
import { defineComponent, computed, ref, onMounted} from 'vue'
import { useBreakpoint } from '../functions/useBreakpoint'

import MobileRoadmap from "../assets/svg/mob-roadmap.svg"
import DesktopRoadmap from "../assets/svg/desktop-roadmap.svg"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
name: 'RoadmapSection' ,
components: {MobileRoadmap, DesktopRoadmap},
setup () {
    const matches = useBreakpoint()
    const isMobile = computed(() => matches.value?.beforeLg)

    const roadmapSection = ref('')

  onMounted(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: roadmapSection.value,
          start: "top center",
        },
      });
      tl.fromTo(
        ".road",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      );
    });
    return {
        isMobile,
        roadmapSection
    }
}
})
</script>

<template>
    <section ref="roadmapSection" class="roadmap-section w-full lg:px-4 py-12">
        <div class="road w-full h-full px-4" v-if="isMobile">
            <MobileRoadmap class="w-full h-full"  />
        </div>
        <div v-else class="road w-full h-full">
            <DesktopRoadmap class="w-full h-full"/>
        </div>
    </section>
</template>

<style scoped lang="scss">
</style>