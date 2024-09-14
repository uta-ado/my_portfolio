<script setup>
const navbarLinks = computed(() => [
    {
        type: 'icon',
        link: '#home'
    },
    {
        title: 'О себе',
        type: 'title',
        link: '#about',
    },
    {
        title: 'Работы',
        type: 'title',
        link: '#works',
    },
    {
        title: 'Контакты',
        type: 'title',
        link: '#contacts'
    }
])
</script>

<template>
    <nav class="header__navbar">
        <ul class="header__navbar-links">
            <li class="header__navbar-link" v-for="(link, index) in navbarLinks" :key="index">
                <a href="#">
                    <template v-if="link.type === 'title'">{{ link.title }}</template>
                    <span v-if="link.type === 'icon'" class="header__navbar-icon">
                        <img src="@/assets/images/icons/home-icon.svg" alt="">
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style lang="sass">
    .header__navbar
        position: relative
        box-sizing: border-box
        border-radius: 290px
        background: rgb(28, 28, 28)
        max-width: 565px
        width: 100%
        max-height: 50px
        display: flex
        align-items: center
        padding: 20px
        &::before 
            content: ""
            position: absolute
            top: -2px
            left: -2px
            bottom: -2px
            right: -2px
            border-radius: 290px
            background: linear-gradient(#7A87FB, #FFD49C)
            z-index: -1
        &-links
            display: flex
            width: 100% 
            justify-content: space-between
            align-items: center
        &-link 
            font-size: 24px
            line-height: 29px
            & a 
                color: white
                font-family: Montserrat Alternates
                letter-spacing: 0px
                font-weight: 700
        &-icon 
            padding: 8px 16px
            border-radius: 40px
            background: rgb(41, 41, 41)
            display: block

</style>