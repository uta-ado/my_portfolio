<script setup>
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

const computedFloatItems = computed(() => [
    {
        title: 'Figma',
    },
    {
        title: 'Photoshop',
    },
    {
        title: 'Adob Ilustrator',
    },
    {
        title: 'Corel',
    },
])
</script>

<template>
    <header class="header">
        <Navbar />
        <div class="header__img-background__block">
            <div class="header__center-block">
                <div class="header__center-block__wrapper">
                    <h1 class="header__center-block__title">Портфолио</h1>
                    <p class="header__center-block__subtitle">-Графический дизайнер-</p>
                    <img src="@/assets/images/icons/sweet-star-icon.svg" alt="" class="header__center-block-right" >
                    <img src="@/assets/images/icons/sweet-star-icon.svg" alt="" class="header__center-block-left" >
                </div>
            </div>
            <img src="@/assets/images/bg/header__bg.png" alt="" class="header__img-background__photo">
        </div>
        <Marquee   :fade="true" class="header__marquee-wrapper">
            <div class="header__marquee-block">
                <div class="header__marquee-item" v-for="(item, index) in computedFloatItems" :key="index">
                    <span><img src="@/assets/images/icons/marquee-icon.svg" alt="" class="header__marquee-item__img" ></span>
                    <span class="header__marquee-item__title">{{ item.title }}</span>
                </div>
            </div>
        </Marquee>
    </header>
</template>

<style lang="sass">
    .header 
        display: flex
        justify-content: center
        padding-top: 50px
        height: 100vh
        &__center 
            &-block
                &__wrapper 
                    position: relative
                &-right
                    position: absolute 
                    right: -107px
                    top: 0px
                &-left
                    position: absolute
                    left: -107px
                    bottom: 0px
        &__marquee
            &-wrapper 
                height: 7%
                position: absolute
                bottom: 0px
                min-width: 100vw
                width: 100%
                --duration:32s
                justify-content: space-between
                border-bottom: 1px solid rgba(255, 255, 255, 0.25)
                & > div 
                    min-width: 100vw
                & .marquee-flex-row 
                    height: 100%
            &-block 
                height: 100%
                display: flex
                align-items: center 
                width: 100%
            &-item 
                flex: 1
                display: flex
                align-items: center
                &__title 
                    color: rgb(255, 255, 255)
                    font-family: Montserrat Alternates
                    margin: 0 auto
                    font-size: 20px
                    font-weight: 400
                    line-height: 24px
                    letter-spacing: 0px
                    text-align: center
</style>