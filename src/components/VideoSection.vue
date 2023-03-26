<script>
import { defineComponent, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "VideoSection",
  setup() {
    const videoRef = ref();
    const videoSectionRef = ref();

    // onMounted(() => {
    //   ScrollTrigger.create({
    //     trigger: videoSectionRef.value,
    //     start: "top center",
    //     end: "max",
    //     onEnter: () => {
    //       videoRef.value.play();
    //       videoSettings.isPlaying = true;
    //     },
    //     onLeave: () => {
    //       videoRef.value.pause();
    //       videoSettings.isPlaying = false;
    //     },
    //     onEnterBack: () => {
    //       videoRef.value.play();
    //       videoSettings.isPlaying = true;
    //     },
    //     onLeaveBack: () => {
    //       videoRef.value.pause();
    //       videoSettings.isPlaying = false;
    //     },
    //   });
    // });
    return {
      videoRef,
      videoSectionRef,
    };
  },
});
</script>

<template>
  <section ref="videoSectionRef" class="animation-section">
    <video
      ref="videoRef"
      video-type="true"
      playsinline
      muted
      loop
      class="video-wrapper"
      autoplay
    >
      <source
        src="../assets/video/barker-video.mp4"
        type="video/mp4"
      />
    </video>
  </section>
</template>

<style scoped lang="scss">
.video-wrapper {
  @screen lg {
    outline: auto;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}
</style>