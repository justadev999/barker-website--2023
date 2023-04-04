<script>
import { defineComponent,ref, computed, onMounted } from "vue";
import {useBreakpoint} from "../functions/useBreakpoint"
import router from "../router";
import Logo from "../assets/svg/barker-logo.svg"
import Copy from "../assets/svg/copy-icon.svg"

//ICONS
import Dex from "../assets/svg/icons/dex-icon.svg"
import Uni from "../assets/svg/icons/uni-icon.svg"
import Eth from "../assets/svg/icons/ether-icon.svg"
import Tg from "../assets/svg/icons/tg-icon.svg"
import Tw from "../assets/svg/icons/twitter-icon.svg"
import Ig from "../assets/svg/icons/ig-icon.svg"

import gsap from "gsap";

export default defineComponent({
  name: "HeroSection",
  components: {Logo, Copy, Dex, Uni, Tg, Tw, Ig, Eth},
  emits: ["open"],
  setup(props, {emit}){
    const contractAddress = ref('Stealth Launching soon')
    const isCopied = ref(false)

    const matches = useBreakpoint()
    const isMobile = computed(() => matches.value?.beforeLg)

    const copyContract = () => {
      navigator.clipboard.writeText(contractAddress.value)
      isCopied.value = true
      setTimeout(() => {
        isCopied.value = false
      }, 1000)
    }

    onMounted(() => {
      const tl = gsap.timeline()
      tl.fromTo('.hero-section', {opacity:0, y:50}, {opacity:1, y:0})
    })

    const openMenu = () => {
      emit('open', true)
    }

    const pushDapp = () => {
      router.push({ path: '/dapp' })
    }

    return {
      isMobile,
      contractAddress,
      copyContract,
      openMenu,
      isCopied,
      pushDapp
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
        <button v-if="!isMobile" class="mr-4">
          <Dex class="icon"/>
        </button>
        <button v-if="!isMobile">
          <Uni class="icon mr-4"/>
        </button>
        <button v-if="!isMobile">
          <Eth class="icon mr-4"/>
        </button>
        <button v-if="!isMobile">
          <Tg class="icon mr-4"/>
        </button>
        <button v-if="!isMobile">
          <Tw class="icon mr-4"/>
        </button>
        <button v-if="!isMobile">
          <Ig class="icon mr-4"/>
        </button>
        <button class="dapp-btn" v-if="!isMobile" @click="pushDapp()">Launch Barker</button>
        <button v-if="isMobile" class="menu-btn" @click="openMenu()">Menu</button>
      </div>
    </nav>
    <div class="hero-content w-full">
      <div v-if="isMobile" class="mobile-content w-full h-full relative flex items-center justify-center">
        <div class="mobile-content w-full h-full">
          <div class="mobile-hero-content flex flex-col items-center pt-[5%] px-4">

            <h2 class="acca-two">Web2 Tweets</h2>
            <h2 class="acca-two">Web3 <span>Barks</span></h2>
            <p class="acca-pi text-center mb-4">Your keys? Your profile. Empowering the decentralized generation</p>
    <div class="hero-btns-mobile flex flex-col items-center">
      <button class="hero-btn mb-4">View Chart</button>
      <button class="hero-btn">Buy</button>
    </div>
          </div>
        </div>
        <div class="wave-wrapper absolute bottom-0 w-full flex items-center justify-center">
          <div class="contract-wrapper flex items-center">
            <div v-if="isCopied" class="copied-wrapper flex items-center justify-center absolute top-[-50px] left-0 right-0 mr-auto ml-auto">Copied</div>
            <p class="contract-label mr-4">{{contractAddress}}</p>
            <Copy class="copy-logo" @click="copyContract()" />
          </div>
        </div>
      </div>
      <div v-else class="desktop-content w-full h-full relative">
        <div class="desktop-hero-content w-full h-full">
          <div class="text-wrapper flex items-start justify-center flex-col pl-12">
            <h2 class="acca-two">Web2 Tweets, Web3 <span>Barks</span></h2>
             <p class="acca-pi text-center mb-4">Your keys? Your profile. </p>
             <p class="acca-pi">Empowering the decentralized generation</p>
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
          <div class="contract-wrapper flex items-center relative">
            <div v-if="isCopied" class="copied-wrapper flex items-center justify-center absolute top-[-100px] left-0 right-0 mr-auto ml-auto">Copied</div>
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
  height: rem(30);
  transition: all .15 ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all .15 ease-in-out;
  }
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
  font-size: rem(20);
  font-family: "regular";
  

  @media(min-width:1024px){
    font-size: rem(30);
    line-height: .9;
    margin-bottom: rem(16);
  }
}

.hero-btn{
  height: rem(65);
  width: rem(205);
  background-color: $c-blue;
  color: white;
  font-family: "bold";
  font-size: rem(25);
  border-radius: rem(50);
  transition: all .15s ease-in;

  &:hover {
    color: $c-blue;
    background-color: transparent;
    border: 1px solid $c-blue;
  }
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

.copied-wrapper{
  background-color: $c-blue;
        color: white;
        height: rem(50);
        width: rem(100);
        border-radius: rem(10);
        font-family: "bold";
}

.dapp-btn{
  border: 3px solid $c-blue;
  color: black;
    font-family: "bold";
    padding: rem(6);
    transition: all .12 ease-in-out;

    &:hover{
      background-color: $c-blue;
      color: white;
    }

}
</style>