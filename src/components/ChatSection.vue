<script>
import { defineComponent} from 'vue'

import WhatIs from "../assets/svg/whatis-desk.svg"
import ForShib from "../assets/svg/poweredbyshibarium .svg"
import Wen from "../assets/svg/wen-desk.svg"
export default defineComponent({
name: 'ChatSection' ,
components: {WhatIs, ForShib, Wen},
})
</script>

<template>
    <section class="chat-section w-full flex flex-col py-12 px-4 lg:px-20">
        <div class="w-full flex items-start justify-start mb-[35px]"><WhatIs class="what-is"/></div>
        <div class="w-full flex items-end justify-end mb-[35px]"><ForShib class="for-shib"/></div>
        <div class="w-full flex items-start justify-start mb-[35px]"><Wen class="wen"/></div>
        <div class="w-full flex items-end justify-end"><WhatIs class="what-is"/></div>
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

    @screen lg {
        width: rem(985);
    }
}
.wen{
    width: rem(237);

    @screen lg {
        width: rem(468);
    }
}
</style>