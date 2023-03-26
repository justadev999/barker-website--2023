<script>
import { defineComponent, computed} from 'vue'
import MobTokenomics from "../assets/svg/tokenomics-mob.svg"
import DeskTokenomics from "../assets/svg/tokenomics-desk.svg"

import { useBreakpoint } from '../functions/useBreakpoint'

export default defineComponent({
name: 'TokenomicsSection' ,
components: {MobTokenomics, DeskTokenomics},
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
        <MobTokenomics v-if="isMobile" class="w-full h-full" />
        <DeskTokenomics v-if="!isMobile" class="w-full h-full" />
    </section>
</template>