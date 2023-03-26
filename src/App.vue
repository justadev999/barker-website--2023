<script>
import { defineComponent, ref} from "vue";

import HeroSection from "./components/HeroSection.vue";
import VideoSection from "./components/VideoSection.vue";
import ChatSection from "./components/ChatSection.vue";
import RoadmapSection from "./components/RoadmapSection.vue";
import TokenomicsSection from "./components/TokenomicsSection.vue";
import FinalSection from "./components/FinalSection.vue";
import MobileMenu from "./components/MobileMenu.vue";

export default defineComponent({
  name: "App",
  components: {HeroSection, VideoSection, ChatSection,RoadmapSection, TokenomicsSection, FinalSection, MobileMenu},
  setup() {
    const isOpen = ref(false)
    return {
      isOpen
    };
  },
});
</script>

<template>
  <div class="main-wrapper w-full relative">
    <MobileMenu v-if="isOpen" @close="isOpen = $event" />
    <HeroSection @open="isOpen = $event" />
    <VideoSection />
    <ChatSection />
    <RoadmapSection />
    <TokenomicsSection />
    <FinalSection />
  </div>
</template>

<style scoped lang="scss">
</style>
