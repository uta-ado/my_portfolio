<script setup>

const computedMenu = computed(() => [
    {
        title: 'Главная',
        link:'/',
    },
    {
        title: 'О себе',
        link:'#about',
    },
    {
        title: 'Работы',
        link:'#works',
    },
])
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <ul class="footer__menu">
                    <li class="footer__menu-li" v-for="(item, index) in computedMenu" :key="index">
                        <router-link :to="item.link" class="footer__menu-link">{{ item.title }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>


<style lang="sass">
.footer 
    padding: 128px 0px
    background: rgb(21, 21, 21)
    margin-top: 450px
    &__wrapper 
        display: flex
        justify-content: center
        align-items: center
    &__menu 
        display: flex
        gap: 41px
        &-link 
            color: rgb(127, 138, 248)
            font-family: Dela Gothic One
            font-size: 24px
            font-weight: 400
            line-height: 25.89px
            letter-spacing: 0%
            text-align: left
</style>