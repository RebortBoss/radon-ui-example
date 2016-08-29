<style>
.dash-header {
    position: fixed;
    height: 4rem;
    background: #fff;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
    display: -ms-flexbox;
    display: flex;
    box-sizing: border-box;
    line-height: 4rem;
    -ms-flex-pack: start;
    justify-content: flex-start;
    z-index: 1000;
    border-bottom: 1px solid #f3f3f3;
}
.dash-header-menu-action {
    height: 4rem;
    width: 4rem;
    line-height: 4rem;
    font-size: 1.5rem;
    color: #666;
    flex-shrink: 0;
    text-align: center;
}
.dash-header-logo {
    height: 4rem;
    line-height: 4rem;
    font-size: 1.5rem;
    padding: 0 1rem;
    color: #666;
    flex-shrink: 0;
    text-align: center;
}
.slide-left-transition {
  transition: transform .3s ease;
  transform: translateX(0)
}
.slide-left-enter,
.slide-left-leave {
    transform: translateX(-100%)
}
</style>

<template>
    <header class="dash-header">
        <div class="dash-header-menu-action" @click="toggle">
            <i class="ion-navicon dash-header-menu-icon"></i>
        </div>
        <div class="dash-header-logo">
            <span class="dash-header-logo-text">RadonUI example</span>
        </div>
        <nav-slider v-show="state.showSlider" transition="slide-left"></nav-slider>
    </header>
</template>

<script>
import navSlider from './slider.vue'
export default {
    props: {
        state: Object,
        toggle: Function
    },
    components: {
        navSlider
    }
}
</script>