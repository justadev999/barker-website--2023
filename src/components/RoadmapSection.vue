<script>
import { defineComponent, computed} from 'vue'
import MobRoadmap from "../assets/svg/mob-roadmap.svg"
import DeskRoadmap from "../assets/svg/desk-roadmap.svg"
import { useBreakpoint } from '../functions/useBreakpoint'

export default defineComponent({
name: 'RoadmapSection' ,
components: {MobRoadmap, DeskRoadmap},
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
    <section class="roadmap-section h-screen w-full lg:px-4 py-4">
        <MobRoadmap v-if="isMobile" class="w-full h-full" />
        <DeskRoadmap v-if="!isMobile" class="w-full h-full" />
    </section>
</template>