<script setup>


const computedContactsList = computed(() => [
    {
        title: 'Номер:',
        value: '+998 (97) 144 49 01',
        type: 'phone'
    },
    {
        title: 'Telegram:',
        value: '@L_misa',
        type: 'telegram'
    },
    {
        title: 'E-mail:',
        value: 'misalol920@gmail.com',
        type: 'mail'
    }
])
</script>

<template>
    <div class="contacts">
        <h2 class="contacts__title section-title"><span>Контакты  <img src="@/assets/images/icons/section-star.svg" alt=""></span></h2>
        <div class="contacts__block-wrapper">
            <div class="contacts__block-border">
                <div class="contacts__block">
                    <div class="contacts__block-info">
                        <ul class="contacts__block-info__title-list">
                            <li v-for="(item, index) in computedContactsList" :key="index">
                                <h4 class="contacts__block-item__title">{{ item.title }}</h4>
                            </li>
                        </ul>
                        <ul class="contacts__block-info__value-list">
                            <li v-for="(item, index) in computedContactsList" :key="index">
                                <a href="" class="contacts__block-item__value">{{ item.value }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="contacts__block mobile">
                <div class="contacts__block-icons">
                    <a href="tel:998971444901"><img src="@/assets/images/icons/phone.svg" alt="" class="contacts__block-icon"></a>
                    <a href="mailto:misalol920@gmail.com"><img src="@/assets/images/icons/mail.svg" alt="" class="contacts__block-icon"></a>
                    <a href="https://t.me/L_misa" target="_blank"><img src="@/assets/images/icons/telegram.svg" alt="" class="contacts__block-icon"></a>
                </div>
            </div>
            <div class="borders-top borders-img "><img src="@/assets/images/bg/border-up-first-variant.png" alt=""></div>
            <div class="borders-bottom borders-img "><img src="@/assets/images/bg/border-bottom-first-variant.png" alt=""></div>
        </div>
    </div>
</template>


<style lang="sass">
.contacts
    &__title 
        margin-bottom: 180px
    &__block 
        padding: 30px 60px
        min-height: 349px
        max-width: 784px
        width: 100%
        height: 100%
        display: flex
        align-items: center
        border-radius: 10px
        background: rgb(21, 21, 21)
        &-border 
            clip-path: inset(0 round 13px)
            box-shadow: -16px 15px 4px 0px rgba(0, 0, 0, 0.25)
            background: linear-gradient(180deg, #FDAC74 0%, #7F8AF8 100%)
            border: 7px solid
            border-image-source: linear-gradient(180deg, #FDAC74 0%, #7F8AF8 100%)
            border-image-slice: 1
            border-image-width: 7px
        &.mobile 
            min-height: auto
            max-width: none
            padding: 0px
            box-shadow: none
            border-radius: none
            background: none
            display: none
            justify-content: center
        &-icons
            font-size: 2.5em
            height: 50px
            overflow: hidden
            border-bottom: 1px solid #abc
            display: flex
            gap: 60px   
            & a
                position: relative
                top: 30px
                margin: 0 10px
                transition: all 100ms cubic-bezier(0.420, 0.000, 0.580, 1.000)
                &:hover
                    top: 5px
        &-wrapper 
            display: flex
            justify-content: center
            position: relative
            & .borders-top 
                position: absolute
                right: -265px
                top: -380px
            & .borders-bottom 
                position: absolute
                left: -265px
                bottom: -280px
        &-info 
            display: flex 
            gap: 94px
            &__title-list 
                display: flex
                flex-direction: column
                gap: 29px
            &__value-list
                display: flex
                flex-direction: column
                gap: 29px
        &-item 
            &__title 
                color: rgb(127, 138, 248)
                font-family: Montserrat Alternates
                font-size: 32px
                font-weight: 400
                line-height: 33.98px
                letter-spacing: 0%
                text-align: left
            &__value 
                color: rgb(253, 172, 116)
                font-family: Montserrat Alternates
                font-size: 32px
                font-weight: 600
                line-height: 33.98px
                letter-spacing: 0%
                text-align: left
</style>