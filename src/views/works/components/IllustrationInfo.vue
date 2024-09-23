<script setup>

</script>

<template>
    <h3 class="illustr__title section-subtitle">Илюстрации</h3>
    <div class="illustr__block">
        <div class="illustr__block-item">
            <img src="@/assets/images/illustration/duck_1.png" alt="" class="illustr__block-img">
        </div>
        <div class="illustr__block-item">
            <img src="@/assets/images/illustration/duck_2.png" alt="" class="illustr__block-img">
        </div>
        <div class="illustr__block-item">
            <img src="@/assets/images/illustration/duck_3.png" alt="" class="illustr__block-img">
        </div>
    </div>
</template>

<style lang="sass">
.illustr 
    &__title 
        margin-bottom: 80px
    &__block
        min-height: 1480px
        position: relative
        &-item 
            min-width: 588px
            max-width: 588px
            position: absolute
            &:nth-child(1)
                right: 0%
            &:nth-child(2)
                top: 215px
                left: -5%
            &:nth-child(3)
                top: 640px
                left: 25%
                
</style>