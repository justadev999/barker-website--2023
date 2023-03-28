<script>
import { defineComponent, computed, ref, onMounted} from 'vue'
import Talk from "../assets/svg/talk.svg"
import DesktopFooter from "../assets/svg/desktop-footer.svg"
import MobileFooter from "../assets/svg/mobile-footer.svg"
import { useBreakpoint } from '../functions/useBreakpoint'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
name: 'FinalSection' ,
components: {Talk, DesktopFooter, MobileFooter},
setup(){
    const matches = useBreakpoint()
    const isMobile = computed(() => matches.value?.beforeLg)

    const finalSection = ref('')

  onMounted(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: finalSection.value,
          start: "top center",
        },
      });
      tl.fromTo(
        ".talk",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      );
      tl.fromTo(
        ".talk-form",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      );
    });

    return {
        isMobile,
        finalSection
    }
}
})
</script>

<template>
    <section ref="finalSection" class="final-section w-full relative flex flex-col items-center pt-8 lg:py-12">
        <div class="w-full flex items-end justify-end pr-4 lg:pr-44 mb-8">
            <Talk class="talk" />
        </div>
        <form class="talk-form p-8">
            <p class="mb-2">Name</p>
            <input class="mb-4" />
            <p class="mb-2">Subject</p>
            <input class="mb-4" />
            <p class="mb-2">Bark Us</p>
            <textarea class="mb-4" />
            <button>Bark!</button>
        </form>
        <DesktopFooter v-if="!isMobile" class="absolute bottom-0 left-0 w-full" />
        <MobileFooter v-if="isMobile" class="absolute bottom-0 left-0 w-full" />
    </section>
</template>

<style scoped lang="scss">
.talk{
    width: rem(138);
    @screen lg {
        width: rem(324);
    }
}

.talk-form{
    width: 90%;
    background-color: $c-blue;
    color: white;
    border-radius: rem(25);
    font-family: "bold";
    margin-bottom: rem(260);

    @screen lg {
        width:rem(570);
    }

    input {
        width: 100%;
 height: rem(40);
    background-color: white;
    border: none;
    border-radius: rem(10);
    color: black;
    padding-left: rem(6);
    }

    textarea {
        width: 100%;
        background-color: white;
    border: none;
    border-radius: rem(20);
    height: rem(100);
    padding: rem(6);
    color: black;
    }

    button {
        background-color: white;
        color: $c-blue;
        height: rem(50);
        width: rem(100);
        border-radius: rem(10);
    }
}
</style>