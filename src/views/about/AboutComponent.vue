<script setup>

const getImageUrl = (url) => {
    return new URL(url, import.meta.url).href
}

const computedSkills = computed(() => [
    {
        title: 'Figma',
        img: '@/assets/images/about/figma.svg'
    },
    {
        title: 'Photoshop',
        img: '@/assets/images/about/photoshop.svg'
    },
    {
        title: 'Illustrator',
        img: '@/assets/images/about/illustrator.svg'
    },
    {
        title: 'Corel draw',
        img: '@/assets/images/about/corel.svg'
    },
])
</script>

<template>
    <section class="about">
        <div class="about__wrapper">
            <h2 class="about__title section-title">О себе</h2>
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
                                    <img :src="getImageUrl(`${skill.img}`)" alt="">
                                </div>
                                <h4 class="about__block-skills__item-title">{{ skill.title }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about__block-right"></div>
            </div>
        </div>
    </section>
</template>


<style lang="sass">
.about
    padding: 99px 0px 367px 0px
    &__wrapper 
        display: flex
        flex-direction: column
    &__title 
        margin-bottom: 152px
    &__block
        display: flex
        justify-content: space-between
        &-left 
            display: flex
            flex-direction: column
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
                &-title
                    font-family: Montserrat Alternates
                    font-size: 16px
                    font-weight: 400
                    line-height: 20px
                    letter-spacing: 0%
</style>