<script setup>

const computedApps = computed(() => [
    {
        text: 'Приложение для покупки  авия билетов',
        imageName: 'aviabilety.png'
    },
    {
        text: 'Приложение для чтения  переведенной манги и комиксов',
        imageName: 'manga.png'
    }
])
</script>

<template>
    <div class="apps">
        <h2 class="apps__title section-subtitle">Приложения</h2>
        <div class="apps__list">
            <div class="apps__item" v-for="(item, index) in computedApps" :key="index">
                <div class="apps__item-img" :class="{ 'reverse': !((index+1) % 2 === 0) }">
                    <img :src="`./images/works/${item.imageName}`" alt="">
                </div>
                <div class="apps__item-info">
                    <div class="apps__item-twostars">
                        <img src="@/assets/images/icons/two_stars.svg" alt="">
                    </div>
                    <div class="apps__item-index">
                        <div class="apps__item-index__bg" />
                        <span class="apps__item-index__number">
                            {{ index+1 }}
                        </span>
                    </div>
                    <p class="apps__item-text">{{ item.text }}</p>
                    <a href="#" class="apps__item-btn">Подробнее</a>
                </div>
            </div>
            <div class="borders-top borders-img "><img src="@/assets/images/bg/border-up-first-variant.png" alt=""></div>
            <div class="borders-bottom borders-img "><img src="@/assets/images/bg/border-bottom-first-variant.png" alt=""></div>
        </div>
    </div>    
</template>

<style lang="sass" scoped>
.apps
    &__list 
        position: relative
        display: flex
        flex-direction: column
        gap: 40px
        margin: 100px 0
        & .borders-top 
            position: absolute
            right: -265px
            top: -380px
        & .borders-bottom 
            position: absolute
            left: -265px
            bottom: -280px
    &__item 
        display: flex
        flex-direction: row
        gap: 130px
        justify-content: space-between
        align-items: center
        padding: 55px 60px 55px 60px
        border-radius: 9px
        background: rgb(21, 21, 21) 
        &-img 
            box-shadow: 8px 8px 35px 0px rgba(0, 0, 0, 0.25)
            background: linear-gradient(266.57deg, rgb(122, 135, 251) 2.809%,rgb(255, 212, 156) 96.791%)
            max-width: 544px
            min-width: 544px
            width: 100%
            &.reverse 
                background: linear-gradient(90.00deg, rgb(122, 135, 251),rgb(255, 212, 156) 100%)
        &-info 
            position: relative
        &-twostars
            position: absolute
            right: 0px 
            top: -160px
        &-btn 
            border-radius: 39.3px
            background: linear-gradient(90.00deg, rgb(122, 135, 251),rgb(255, 212, 156) 100%)
            width: 140px
            height: 34px
            display: flex
            align-items: center
            justify-content: center
            color: rgb(16, 17, 17)
            font-family: Montserrat Alternates
            font-size: 14px
            font-weight: 800
            line-height: 12.18px
            letter-spacing: 0%
            text-align: center
        &-text 
            color: rgb(250, 250, 250)
            font-family: Montserrat Alternates
            font-size: 36px
            font-weight: 500
            line-height: 33px
            letter-spacing: 0%
            text-align: left
            margin: 38px 0 32px 0
        &-index 
            width: 53.22px
            height: 53.22px
            position: relative
            display: flex
            align-items: center
            justify-content: center
            &__bg 
                &::after 
                    content: ''
                    background: linear-gradient(90.00deg, rgb(122, 135, 251),rgb(255, 212, 156) 100%)
                    position: absolute
                    width: 52.93px
                    height: 53.22px
                    left: 0.29px
                    top: 0
                    z-index: 9
                    border-radius: 26.88px
                &::before
                    content: ''
                    border-radius: 26.88px
                    backdrop-filter: blur(25.2px)
                    background: rgba(21, 21, 21, 0.05)
                    position: absolute
                    width: 53.22px
                    height: 53.22px
                    left: 0
                    top: 0
                    z-index: 10
                    /* rgb(21, 21, 21) */
            &__number 
                background: linear-gradient(90.00deg, rgb(122, 135, 251),rgb(255, 212, 156))
                -webkit-background-clip: text
                -webkit-text-fill-color: transparent
                background-clip: text
                text-fill-color: transparent
                font-family: Roboto Mono
                font-size: 25.2px
                font-weight: 700
                line-height: 26.88px
                letter-spacing: 0%
                text-align: center
                z-index: 999
</style>