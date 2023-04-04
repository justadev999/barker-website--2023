<script>
import { defineComponent} from 'vue'
import router from "../router";

export default defineComponent({
name: 'MobileMenu',
emits: ["close"],
setup(props, {emit}){
    const closeMenu = () => {
        emit('close', false)
    }

    const pushDapp = () => {
      router.push({ path: '/dapp' })
    }

    const navigate = link => {
      window.open(link, "_blank")
    }
    return {
closeMenu,
pushDapp,
navigate
    }
}
})
</script>

<template>
    <section class="menu-mobile h-screen w-full">
        <div class="menu-header w-full flex justify-end p-6">
            <button @click="closeMenu()" class="close-btn">Close</button>
        </div>
        <ul class="w-full flex flex-col items-center">
            <li>
                <button>Contract</button>
            </li>
            <li>
                <button>Uniswap</button>
            </li>
            <li>
                <button @click="navigate('http://t.me/barkerportal')" >Telegram</button>
            </li>
            <li>
                <button @click="navigate('https://twitter.com/barkertoken/')">Twitter</button>
            </li>
            <li>
                <button @click="navigate('https://www.instagram.com/barkertoken/')">Instagram</button>
            </li>
            <li>
                <button class="dapp-btn" v-if="!isMobile" @click="pushDapp()">Launch Barker</button>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.menu-mobile{
    position: fixed;
    z-index: 99;
    background-color: $c-blue;
}

.close-btn {
    background-color: white;
        color: $c-blue;
        height: rem(50);
        width: rem(100);
        border-radius: rem(10);
        font-family: "bold";
}

ul li {
    color: white;
    font-family: "bold";
    font-size: rem(30);
}

ul li:not(:last-child){
    margin-bottom: rem(16);
}

.dapp-btn{
  border: 3px solid white;
  color: white;
    font-family: "bold";
    padding: rem(6);
    transition: all .12 ease-in-out;

    &:hover{
      background-color: $c-blue;
      color: white;
    }

}
</style>