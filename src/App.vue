<script>
import { defineComponent} from "vue";

import HeroSection from "./components/HeroSection.vue";
import VideoSection from "./components/VideoSection.vue";
import ChatSection from "./components/ChatSection.vue";
import RoadmapSection from "./components/RoadmapSection.vue";

export default defineComponent({
  name: "App",
  components: {HeroSection, VideoSection, ChatSection,RoadmapSection},
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="main-wrapper w-full relative">
    <HeroSection />
    <VideoSection />
    <ChatSection />
    <RoadmapSection />
  </div>
</template>

<style scoped lang="scss">
.main-wrapper {
  //
}
</style>
