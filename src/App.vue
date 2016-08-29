<style>
body,
html {
    width: 100%;
    height: 100%;
}

.dash-root {
    width: 100%;
    height: 100%;
}

.dash-container.nav-active {
    padding-left: 12rem;
}

.rd-notification-container {
    z-index: 1001;
}

.rd-modal-mask {
    z-index: 1001;
}

.rd-modal-wrapper {
    z-index: 1002;
}

.dash-info-status .dash-card {
    background: none;
}
.dash-content.slider-active {
    padding-left: 12rem;
    transition: padding .3s ease;
}
</style>
<template>
    <div id="appRoot">
        <nav-header :state="headerState" :toggle="toggleSlider"></nav-header>
        <div class="dash-content" :class="{ 'slider-active': headerState.showSlider && !headerState.isMobile}">
            <router-view></router-view>
        </div>
        <rd-modal></rd-modal>
        <rd-notification></rd-notification>
        <rd-preview></rd-preview>
        <rd-loadingbar></rd-loadingbar>
    </div>
</template>
<script>
// radon
import 'radon-ui/dist/static/css/dist.css'

import {
    rdButton,
    rdDropButton
} from 'radon-ui'

import navHeader from './components/header.vue'

export default {
    data () {
        return {
            headerState: {
                showSlider: true,
                isMobile: false
            }
        }
    },
    ready () {
        this.$Loading.start(3000)
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
    },
    components: {
        navHeader,

        // radon-ui
        rdButton,
        rdDropButton
    },
    methods: {
        toggleSlider () {
            this.headerState.showSlider = !this.headerState.showSlider
        },
        checkMobile (e) {
            if (window.document.body.offsetWidth > 768) {
                this.headerState.showSlider = true
                this.headerState.isMobile = false
            } else {
                this.headerState.showSlider = false
                this.headerState.isMobile = true
            }
        }
    }
}
</script>
