<script>
import { defineComponent, ref, watch} from 'vue'
import Logo from "../assets/svg/barker-logo.svg"
import router from "../router";


//ICONS
import Dex from "../assets/svg/icons/dex-icon.svg"
import Uni from "../assets/svg/icons/uni-icon.svg"
import Eth from "../assets/svg/icons/ether-icon.svg"
import Tg from "../assets/svg/icons/tg-icon.svg"
import Tw from "../assets/svg/icons/twitter-icon.svg"
import Ig from "../assets/svg/icons/ig-icon.svg"
export default defineComponent({
    components: {Logo,  Dex, Uni, Tg, Tw, Ig, Eth},
name: 'Dapp',
setup(){
    const account = ref('')
    const isListed = ref(false)
    const openMetamask = async() => {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        account.value = await accounts[0]
        if(account.value){isListed.value = true}
    }

    watch(isListed,() => {
        if(isListed.value) {
            setTimeout(() => {
                isListed.value = false
            }, 2000);
        }
    })

    const backHome = () => {
      router.push({ path: '/' })
    }

    return {
        openMetamask,
        account,
        isListed,
        backHome
    }
}
})
</script>

<template>
<div class='dapp-container w-full flex flex-col items-center pt-4 lg:py-8 px-4 relative'>
    <Logo class="barker-logo mb-4" />
    <h2 class="text-center lg:w-[50%]">We're just about done developing Barker and it should be hitting the market soon! In the meantime </h2>
    <h1 class="mb-4">Follow us</h1>
    <div class="flex items-center mb-4">
        <button v-if="!isMobile">
          <Tg class="icon mr-4"/>
        </button>
        <button v-if="!isMobile">
          <Tw class="icon mr-4"/>
        </button>
        <button v-if="!isMobile">
          <Ig class="icon mr-4"/>
        </button>
    </div>
    <h1 class="mb-4 text-center">Enroll as early beta tester</h1>
    <button class="sign-btn mb-8" @click="openMetamask()">Sign-up with metamask</button>
    <div v-if="isListed" class="listed-wrapper flex flex-col items-center justify-center absolute bottom-[5%]">
        <p>Account</p>
        <p>{{ account }}</p>
        <p>Is now listed</p>
    </div>
    <button class="back-btn" @click="backHome()">Back Home</button>
</div>
</template>

<style scoped lang="scss">

.dapp-container{
    min-height: 100vh;
}
.barker-logo{
    height: rem(70);
}

h2 {
    font-family: "bold";
    font-size: rem(20);

    @screen lg {
        font-size: rem(20);
    }
}
h1 {
    font-family: "bold";
    font-size: rem(40);

    @screen lg {
        font-size: rem(70);
    }
}

.icon {
    height: rem(30);
    @screen lg {
        height: rem(60);
    }
}

.sign-btn{
    background-color: $c-blue;
  color: white;
    font-family: "bold";
    padding: rem(10);
    transition: all .12 ease-in-out;

    &:hover{
        border: 2px solid $c-blue;
      background-color: transparent;
      color: black;
    }

}
.back-btn{
      border: 2px solid $c-blue;
    background-color: transparent;
  color: $c-blue;
    font-family: "bold";
    padding: rem(10);
    transition: all .12 ease-in-out;

    &:hover{
      background-color: $c-blue;
      color: white;
    }

}

.listed-wrapper{
  background-color: $c-blue;
        color: white;
        padding: rem(10);
        border-radius: rem(10);
        font-family: "bold";
        font-size: rem(12);

        @screen lg {
            font-size: rem(16);
        }
}
</style>