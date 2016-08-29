<style>
.content {
    padding: 1rem;
    width: 100%;
    min-height: 100vh;
    background-color: #f8f8f8;
}
.rd-card-group {
    flex-wrap: wrap;
}
.circle {
    display: flex;
    padding: 2rem 0;
}
.circle-item {
    text-align: center;
}
.progress-title {
    font-size: 1rem;
    text-align: center;
}
</style>

<template>
    <div class="content">
        <rd-card title="最近24小时数据">
            <div class="rd-row-flex">
                <div class="rd-col-6 rd-col-sm-12" v-for="card in dataCards">
                    <data-card :card="card"></data-card>
                </div>
            </div>
        </rd-card>
        <rd-card-group>
            <rd-card title="概览" class="rd-col-24 ">
                <div class="circle rd-row-flex">
                    <div class="circle-item rd-col-6 rd-col-sm-12" v-for="progressCircle in Progress">
                        <rd-progress-circle :progress="progressCircle"></rd-progress-circle>
                        <div class="progress-title">{{progressCircle.title}}</div>
                    </div>
                </div>
            </rd-card>
        </rd-card-group>
        <rd-card-group>
            <rd-card title="概览" class="rd-col-7 rd-col-sm-24">
                <rd-timeline :timeline="timeline"></rd-timeline>
            </rd-card>
            <rd-card title="概览" class="rd-col-8 rd-col-sm-24">
                <p>234234234 <rd-switch :value="switchA"></rd-switch></p>
                <p>234234234 <rd-switch :value="switchA"></rd-switch></p>
                <p>234234234 <rd-switch :value="switchA"></rd-switch></p>
            </rd-card>
            <rd-card title="概览" class="rd-col-8 rd-col-sm-24">
                <p>234234234 <rd-switch :value="switchA"></rd-switch></p>
                <p>234234234 <rd-switch :value="switchA"></rd-switch></p>
                <p>234234234 <rd-switch :value="switchA"></rd-switch></p>
            </rd-card>
        </rd-card-group>
    </div>
</template>

<script>
import {
    rdButton,
    rdCardGroup,
    rdCard,
    rdSwitch,
    rdTimeline,
    rdProgressCircle
} from 'radon-ui'

import dataCard from '../components/dataCard.vue'

export default {
    data () {
        return {
            dataCards: [{
                title: 'New Users',
                color: '#6ccac9',
                count: '342',
                icon: 'ion-social-yen-outline'
            }, {
                title: 'New Users',
                color: '#6ccac9',
                count: '533',
                icon: 'ion-android-color-palette'
            }, {
                title: 'New Users',
                color: '#6ccac9',
                count: '223',
                icon: 'ion-pie-graph'
            }, {
                title: 'New Users',
                color: '#6ccac9',
                count: '872',
                icon: 'ion-person-stalker'
            }],
            Progress: [{
                title: 'Messages',
                percent: 50,
                options: {
                    color: '#2db7f5',
                    state: '',
                    format: function (percent) {
                        return percent + '% '
                    }
                }
            }, {
                title: 'Links',
                percent: 64,
                options: {
                    color: '#8bc34a',
                    state: '',
                    format: function (percent) {
                        return percent + '% '
                    }
                }
            }, {
                title: 'Followers',
                percent: 12,
                options: {
                    color: '#ff5722',
                    state: '',
                    format: function (percent) {
                        return percent + '% '
                    }
                }
            }, {
                title: 'Downloads',
                percent: 87,
                options: {
                    color: '#673ab7',
                    state: '',
                    format: function (percent) {
                        return percent + '% '
                    }
                }
            }],
            switchA: {
                size: 'small',
                checked: false
            },
            timeline: [{
                icon: 'ion-alert-circled',
                color: '#2db7f5',
                text: '连接服务器 2016-06-16 20:01:12'
            },
            {
                color: '#2db7f5',
                text: '准备上传文件 2016-06-16 20:01:13'
            },
            {
                color: 'red',
                text: '上传失败 2016-06-16 20:01:14'
            }]
        }
    },
    components: {
        dataCard,

        // radon
        rdButton,
        rdCardGroup,
        rdCard,
        rdSwitch,
        rdTimeline,
        rdProgressCircle
    }
}
</script>