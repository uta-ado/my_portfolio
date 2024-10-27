<script setup>
const computedSkills = computed(() => [
    {
        title: 'Figma',
        img: './images/about/figma.svg'
    },
    {
        title: 'Photoshop',
        img: './images/about/photoshop.svg'
    },
    {
        title: 'Illustrator',
        img: './images/about/illustrator.svg'
    },
    {
        title: 'Corel draw',
        img: './images/about/corel.svg'
    },
])

</script>

<template>
    <section class="about">
        <div class="about__wrapper">
            <h2 class="about__title section-title"><span>О себе <img src="@/assets/images/icons/section-star.svg" alt=""></span></h2>
            <div class="about__block">
                <div class="about__block-left">
                    <div class="about__block-info">
                        <h3 class="about__block-info__title about__block-left__title">Я Садчикова Лолита</h3>
                        <div class="about__block-info__card">Привет! Меня зовут Лолита Садчикова, и я начинающий графический дизайнер. Недавно я закончила курсы графического дизайна и полна энтузиазма начать
                            свою карьеру в этой творческой и динамичной сфере. 
                            Я увлекаюсь созданием визуально привлекательных 
                            и функциональных дизайнов, которые оставляют неизгладимое впечатление.
                        </div>
                    </div>
                    <div class="about__block-skills">
                        <h3 class="about__block-skills__title about__block-left__title">Навыки</h3>
                        <div class="about__block-skills__list">
                            <div class="about__block-skills__item" v-for="(skill, index) in computedSkills" :key="index">
                                <div class="about__block-skills__item-img">
                                    <img :src="skill.img" alt="">
                                </div>
                                <h4 class="about__block-skills__item-title">{{ skill.title }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about__block-right">
                    <div class="about__block-right__img-wrapper">
                        <img src="@/assets/images/about/my_photo.png" alt="" class="about__block-right__img">
                        <div class="about__icon-star">
                            <img src="@/assets/images/icons/about_star.svg" alt="" class="about__icon-star">
                        </div>
                        <div class="about__icon-headerset">
                            <img src="@/assets/images/icons/about-headerset.svg" alt="" class="about__icon-headerset">
                        </div>
                    </div>
                </div>
                <div class="borders-top borders-img "><img src="@/assets/images/bg/border-up-first-variant.png" alt=""></div>
                <div class="borders-bottom borders-img "><img src="@/assets/images/bg/border-bottom-first-variant.png" alt=""></div>
            </div>
        </div>
    </section>
</template>


<style lang="sass">
.about
    padding: 99px 0px 367px 0px
    & .borders-top 
        position: absolute
        right: -265px
        top: -380px
    & .borders-bottom 
        position: absolute
        left: -265px
        bottom: -280px
    &__wrapper 
        display: flex
        flex-direction: column
    &__title 
        margin-bottom: 152px
    &__block
        display: flex
        justify-content: space-between
        position: relative
        &-right
            &__img 
                &-wrapper 
                    width: 453.76px
                    max-height: 564px
                    position: relative
                    & .about__icon-star 
                        position: absolute
                        left: -45px
                        top: -32px
                        width: 163px
                        height: 160px
                    & .about__icon-headerset
                        position: absolute
                        right: -15px
                        bottom: 0px
        &-left 
            display: flex
            flex-direction: column
            justify-content: end
            gap: 35px
            width: 55%
            &__title
                font-family: Montserrat Alternates
                font-size: 37px
                font-weight: 400
                line-height: 60px
                letter-spacing: 0%
        &-info
            &__card
                padding: 30px 20px 30px 20px
                border: 1px solid rgb(255, 255, 255)
                border-radius: 10px
                font-family: Montserrat Alternates
                font-size: 15px
                font-weight: 400
                line-height: 25.89px
                letter-spacing: 0%
        &-skills 
            &__list
                border: 1px solid rgb(255, 255, 255)
                border-radius: 10px
                display: flex
                justify-content: space-between
                align-items: center
                padding: 40px
            &__item
                display: flex
                flex-direction: column
                align-items: center
                gap: 5px
                &-img 
                    border: 1px solid rgb(202, 217, 236)
                    background: rgb(255, 255, 255)
                    width: 55px
                    height: 55px
                    display: flex
                    align-items: center
                    justify-content: center
                    border-radius: 50%
                    & img 
                        width: 25px
                        height: 25px
                &-title
                    font-family: Montserrat Alternates
                    font-size: 16px
                    font-weight: 400
                    line-height: 20px
                    letter-spacing: 0%
</style>