<script>
import { defineComponent,ref, computed } from "vue";
import {useBreakpoint} from "../functions/useBreakpoint"
import Logo from "../assets/svg/barker-logo.svg"
import Copy from "../assets/svg/copy-icon.svg"

export default defineComponent({
  name: "HeroSection",
  components: {Logo, Copy},
  emits: ["open"],
  setup(props, {emit}){
    const contractAddress = ref('0xe924dd20c41bb088f1b8557ca8fc5de99d1b4da8')

    const matches = useBreakpoint()
    const isMobile = computed(() => matches.value?.beforeLg)

    const copyContract = () => {
      navigator.clipboard.writeText(contractAddress.value)
    }

    const openMenu = () => {
      emit('open', true)
    }

    return {
      isMobile,
      contractAddress,
      copyContract,
      openMenu
    }
  }
});
</script>

<template>
  <section class="hero-section h-screen w-full relative">
    <nav class="w-full flex items-center justify-between">
      <div class="logo-container flex items-center">
        <Logo class="logo" />
        <h1 class="text-logo">Barker</h1>
      </div>
      <div class="icons-container flex items-center">
        <div class="icon" v-if="!isMobile"></div>
        <div class="icon" v-if="!isMobile"></div>
        <div class="icon" v-if="!isMobile"></div>
        <div class="icon" v-if="!isMobile"></div>
        <button v-if="isMobile" class="menu-btn" @click="openMenu()">Menu</button>
      </div>
    </nav>
    <div class="hero-content w-full">
      <div v-if="isMobile" class="mobile-content w-full h-full relative flex items-center justify-center">
        <div class="mobile-content w-full h-full">
          <div class="mobile-hero-content flex flex-col items-center pt-[5%]">

            <h2 class="acca-two">Web2 Tweets</h2>
            <h2 class="acca-two">Web3 <span>Barks</span></h2>
            <p class="acca-pi text-center mb-4">The first social network 
    powered by Shibarium.</p>
    <div class="hero-btns-mobile flex flex-col items-center">
      <button class="hero-btn mb-4">View Chart</button>
      <button class="hero-btn">Buy</button>
    </div>
          </div>
        </div>
        <div class="wave-wrapper absolute bottom-0 w-full flex items-center justify-center">
          <div class="contract-wrapper flex items-center">
            <p class="contract-label mr-4">{{contractAddress}}</p>
            <Copy class="copy-logo" @click="copyContract()" />
          </div>
        </div>
      </div>
      <div v-else class="desktop-content w-full h-full relative">
        <div class="desktop-hero-content w-full h-full">
          <div class="text-wrapper flex items-start justify-center flex-col pl-12">
            <h2 class="acca-two">Web2 Tweets, Web3 <span>Barks</span></h2>
             <p class="acca-pi text-center mb-4">The first social network 
  powered by Shibarium.</p>
    <div class="flex items-center">
    <button class="hero-btn mr-4">View Chart</button>
    <button class="hero-btn">Buy</button>
  </div>
          </div>
          <div class="image-wrapper flex items-center justify-center">
            <img src="../assets/images/barker-hero-image.png" />
          </div>
        </div>
        <div class="wave-wrapper absolute bottom-0 w-full flex items-center justify-center">
          <div class="contract-wrapper flex items-center">
            <p class="contract-label mr-4">{{contractAddress}}</p>
            <Copy class="copy-logo" @click="copyContract()" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.logo-container {
  width: fit-content;
}
nav {
  padding-left: rem(15);
  padding-right: rem(15);
  padding-top: rem(20);
  @screen lg {
    padding-left: rem(100);
  padding-right: rem(100);
  padding-top: rem(30);
  }
}

.logo{
  height: rem(60);
  margin-right: rem(15);
}

.text-logo{
  font-family: Black;
  font-size: rem(36);
  color: $c-blue;
}

.icon {
  background-color: $c-blue;
  height: rem(50);
  width: rem(50);
  border-radius: rem(100);
}

.icons-container .icon:not(:last-child){
  margin-right: rem(16);
}

.hero-content{
  height: calc(100% - 80px);

  @screen lg {
    height: calc(100% - 90px);
  }
}

.wave-wrapper{
  height: rem(75);
  background: url('../assets/images/hero-wave.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.contract-label{
  font-family: "regular";
  color: white;
  font-size: rem(12);
  @screen lg {
    font-size: rem(18);
  }
}
.copy-logo{
  height: rem(25);
  cursor: pointer;
}

.acca-two{
  font-size: rem(50);
  font-family: "black";

  span {
    color: $c-blue;
  }
}

.acca-pi{
  font-size: rem(30);
  font-family: "regular";
}

.hero-btn{
  height: rem(65);
  width: rem(205);
  background-color: $c-blue;
  color: white;
  font-family: "bold";
  font-size: rem(25);
  border-radius: rem(50);
}

.desktop-hero-content{
  height: calc(100% - 75px);
  display: grid;
  grid-template-columns: 60% 40%;
}
.mobile-hero-content{
  height: calc(100% - 75px);
}

.menu-btn{
   background-color: $c-blue;
        color: white;
        height: rem(50);
        width: rem(100);
        border-radius: rem(10);
        font-family: "bold";
}
</style>