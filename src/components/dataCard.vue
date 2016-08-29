<style>
.dash-data-card {
    display: flex;
    height: 6rem;
    border-radius: .2rem;
    border: 1px solid #fbfbfb;
    overflow: hidden;
    background: #fff;
}
.dash-data-card-icon-box {
    flex-shrink: 0;
    width: 40%;
    text-align: center;
    font-size: 2rem;
    line-height: 6rem;
    color: #fff;
}
.dash-data-card-info {
    position: relative;
    text-align: center;
    width: 100%;
}
.dash-data-card-count{
    width: 100%;
    font-size: 2.5rem;
    line-height: 5rem;
}
.dash-data-card-title {
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    color: #a5a5a5;
}
</style>

<template>
    <div class="dash-data-card">
        <div class="dash-data-card-icon-box" :style="{ 'background-color': card.color }">
            <i class="dash-data-card-icon" :class="iconClass(card.icon)"></i>
        </div>
        <div class="dash-data-card-info">
            <div class="dash-data-card-count">{{card.count}}</div>
            <div class="dash-data-card-title">{{card.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            default () {
                return {
                    title: 'New Users',
                    color: '#6ccac9',
                    count: '872',
                    icon: 'ion-person-stalker'
                }
            }
        }
    },
    methods: {
        iconClass (icon) {
            let classList = {}
            classList[icon] = true
            return classList
        }
    }
}
</script>