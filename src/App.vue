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

.dash-edit-body {
    min-height: 45rem;
}
</style>
<template>
    <div id="appRoot">
        <!-- <nav-header :toggle-nav-menu="toggleNavMenu"></nav-header> -->
        <rd-button @click="start">start</rd-button>
        <rd-button @click="finish">finish</rd-button>
        <rd-button @click="modal">modal test</rd-button>
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

export default {
    ready () {
        this.$Progress.start()
    },
    components: {
        rdButton,
        rdDropButton
    },
    methods: {
        modal () {
            this.$Modal.create(
                '这里是标题',
                '这里应该说点什么',
                () => {
                    this.$Notification.success('你点击了确认', '你点击了确认你点击了确认你点击了确认你点击了确认你点击了确认', 5000)
                },
                () => {
                    this.$Notification.success('你点击了取消', '', 5000)
                }
            )
        },
        start () {
            this.$Progress.start()
        },
        finish () {
            this.$Progress.finish()
        }
    }
}
</script>
