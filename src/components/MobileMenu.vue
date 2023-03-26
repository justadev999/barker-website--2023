<script>
import { defineComponent} from 'vue'
export default defineComponent({
name: 'MobileMenu',
emits: ["close"],
setup(props, {emit}){
    const closeMenu = () => {
        emit('close', false)
    }
    return {
closeMenu
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
                <button>Telegram</button>
            </li>
            <li>
                <button>Twitter</button>
            </li>
            <li>
                <button>Medium</button>
            </li>
            <li>
                <button>Instagram</button>
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
</style>