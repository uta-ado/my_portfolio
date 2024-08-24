<script setup>
const navbarLinks = computed(() => [
    {
        title: 'icon',
        link: '#home'
    },
    {
        title: 'О себе',
        link: '#about',
    },
    {
        title: 'Работы',
        link: '#works',
    },
    {
        title: 'Контакты',
        link: '#contacts'
    }
])
</script>

<template>
    <nav class="header__navbar">
        <ul class="header__navbar-links">
            <li class="header__navbar-link" v-for="(link, index) in navbarLinks" :key="index">
                <a href="#">{{ link.title }}</a>
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
        min-height: 50px
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
        &-link 
            font-size: 24px
            line-height: 29px
            & a 
                color: white
        
</style>