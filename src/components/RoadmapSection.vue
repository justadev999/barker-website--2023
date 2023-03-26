<script>
import { defineComponent, computed} from 'vue'
import { useBreakpoint } from '../functions/useBreakpoint'

import MobileRoadmap from "../assets/svg/mob-roadmap.svg"
import DesktopRoadmap from "../assets/svg/desktop-roadmap.svg"

export default defineComponent({
name: 'RoadmapSection' ,
components: {MobileRoadmap, DesktopRoadmap},
setup () {
    const matches = useBreakpoint()
    const isMobile = computed(() => matches.value?.beforeLg)
    return {
        isMobile
    }
}
})
</script>

<template>
    <section class="roadmap-section h-screen w-full lg:px-4 py-12">
        <div class="w-full h-full px-4" v-if="isMobile">
            <MobileRoadmap  />
        </div>
        <div v-else class="w-full h-full">
            <DesktopRoadmap />
        </div>
    </section>
</template>