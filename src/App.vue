<script>
import { defineComponent} from "vue";

import HeroSection from "./components/HeroSection.vue";
import VideoSection from "./components/VideoSection.vue";

export default defineComponent({
  name: "App",
  components: {HeroSection, VideoSection},
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="main-wrapper w-full relative">
    <HeroSection />
    <VideoSection />
  </div>
</template>

<style scoped lang="scss">
.main-wrapper {
  //
}
</style>
