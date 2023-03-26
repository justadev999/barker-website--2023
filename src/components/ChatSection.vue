<script>
import { computed, defineComponent} from 'vue'
import { useBreakpoint } from '../functions/useBreakpoint'

import WhatIs from "../assets/svg/whatis-desk.svg"
import ForShib from "../assets/svg/poweredbyshibarium.svg"
import ForShibDesktop from "../assets/svg/powered-desktop.svg"
import Wen from "../assets/svg/wen.svg"
import RoadDesk from "../assets/svg/road-chat-desk.svg"
import RoadMobile from "../assets/svg/road-chat-mobile.svg"

export default defineComponent({
name: 'ChatSection' ,
components: {WhatIs, ForShib, Wen, RoadDesk, RoadMobile, ForShibDesktop},
setup(){
const matches = useBreakpoint()
const isMobile = computed(() => matches.value?.beforeLg)

return {
    isMobile
}
}
})
</script>

<template>
    <section class="chat-section w-full flex flex-col py-12 px-4 lg:px-20">
        <div class="w-full flex items-start justify-start mb-[35px]"><WhatIs class="what-is"/></div>
        <div class="w-full flex items-end justify-end mb-[35px]"  v-if="isMobile"><ForShib class="for-shib"/></div>
        <div class="w-full flex items-end justify-end mb-[35px]" v-if="!isMobile"><ForShibDesktop class="for-shib-desk"/></div>
        <div class="w-full flex items-start justify-start mb-[35px]"><Wen class="wen"/></div>
        <div class="w-full flex items-end justify-end" v-if="!isMobile"><RoadDesk class="road-desk"/></div>
        <div class="w-full flex items-end justify-end" v-if="isMobile"><RoadMobile class="road-mobile"/></div>
    </section>
</template>

<style scoped lang="scss">
.what-is{
    width: rem(204);

    @screen lg {
        width: rem(468);
    }
}
.for-shib{
    width: rem(286);
}
.for-shib-desk{
    width: rem(984);
}
.wen{
    width: rem(237);

    @screen lg {
        width: rem(468);
    }
}

.road-desk{
    width: rem(984);
}
.road-mobile{
    width: rem(286);
}
</style>