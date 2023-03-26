<script>
import { defineComponent} from "vue";

import HeroSection from "./components/HeroSection.vue";
import VideoSection from "./components/VideoSection.vue";
import ChatSection from "./components/ChatSection.vue";

export default defineComponent({
  name: "App",
  components: {HeroSection, VideoSection, ChatSection},
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
  </div>
</template>

<style scoped lang="scss">
.main-wrapper {
  //
}
</style>
