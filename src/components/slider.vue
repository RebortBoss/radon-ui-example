<style lang="scss">
.dash-nav {
    position: fixed;
    top: 4rem;
    left: 0;
    height: 100%;
    background: rgb(45, 44, 50);
    width: 4rem;
    flex-shrink: 0;
    z-index: 1001;
}

.dash-nav-box {
    position: relative;
}

.dash-nav-item {
    position: relative;
    min-height: 3rem;
    line-height: 3rem;
    color: #fff;
    padding: 0 .5rem;
    font-size: .8rem;
    border-right: .2rem solid rgba(0, 0, 0, 0);
    border-left: .2rem solid rgba(0, 0, 0, 0);
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
}

.dash-nav-item:hover,
.dash-nav-item.active {
    border-left: .2rem solid #2db7f5;
    background-color: rgba(0, 0, 0, 0.8);
    .dash-nav-submenu-list {
        display: block;
    }
}

.dash-nav-icon {
    display: none;
    font-size: 1rem;
    margin: 0 1rem 0 1rem;
}

.dash-nav-submenu::before {
    content: ' ';
}

.dash-nav-submenu-list {
    position: absolute;
    top: 0;
    left: 4rem;
    background: #2d2c32;
    width: 10rem;
}

.dash-nav-submenu.title {
    text-align: left;
    padding: 0 1rem;
    color: #ccc;
    height: 3rem;
    line-height: 3rem;
    border-bottom: none;
    &:hover {
        background: rgb(45, 44, 50);
        border-left: .2rem solid rgba(0, 0, 0, 0);
    }
}

.dash-nav-submenu {
    border-left: .2rem solid rgba(0, 0, 0, 0);
    text-align: left;
    padding: 0 2rem;
    height: 3rem;
    line-height: 3rem;
}

.dash-nav-submenu:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #f9f9f9;
}

.dash-nav-submenu-list > .dash-nav-submenu:last-child {
    border-top: none;
}

.dash-nav.large {
    width: 12rem;
    .dash-nav-box.active {
        background: rgba(255, 255, 255, 0.08);
        border-radius: .5rem;
        .dash-nav-item:hover,
        .dash-nav-item.active {
            background-color: rgba(255, 255, 255, 0);
        }
    }
    .dash-nav-icon {
        display: inline-block;
        margin: 0 .5rem 0 0;
    }
    .dash-nav-item:hover,
    .dash-nav-item.active {
        border-left: .2rem solid rgba(0, 0, 0, 0);
        background-color: rgba(255, 255, 255, 0.08);
        color: #fff;
    }
    .dash-nav-item {
        text-align: initial;
    }
    .dash-nav-submenu-list {
        position: relative;
        display: block;
        left: 0;
        background: none;
        width: 100%;
    }
    .dash-nav-submenu.title {
        padding-left: 1.5rem;
    }
    .dash-nav-submenu {
        text-align: left;
        padding: 0 2rem;
        border-top: none;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: .8rem;
        border-left: .2rem solid rgba(0, 0, 0, 0);
        transition: color .2s;
        color: #d2d2d2;
        &:hover {
            background-color: rgba(0, 0, 0, 0);
            color: #fff;
            border-left: .2rem solid rgba(0, 0, 0, 0);
        }
    }
}
</style>
<template>
    <nav class="dash-nav" :class="{ 'large': large }">
        <div class="dash-nav-box" :class="{ 'active': nav.active }" v-for="nav in navs">
            <div class="dash-nav-item" @click="touchNav(nav)">
                <i class="dash-nav-icon" :class="navIcon(nav)"></i>
                <span>{{nav.value}}</span>
                <i></i>
            </div>
            <div class="dash-nav-submenu-list" v-show="nav.active">
                <ul v-for="menu in nav.subMenu">
                    <li class="dash-nav-submenu title" v-if="menu.title">
                        <span>{{menu.title}}</span>
                    </li>
                    <li class="dash-nav-submenu" @click="touchSubNav(subitem)" v-for="subitem in menu.navs">
                        <span>{{subitem.value}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    props: {
        state: Object,
        toggle: Function
    },
    data () {
        return {
            large: true,
            navs: [{
                active: false,
                value: '概览',
                icon: 'ion-stats-bars',
                route: {
                    name: 'index'
                }
            }, {
                active: false,
                value: '产品',
                icon: 'ion-briefcase',
                route: {
                    name: 'product'
                }
            }, {
                active: false,
                value: '订单',
                icon: 'ion-ios-paper-outline',
                route: {
                    name: 'order'
                }
            }]
        }
    },
    methods: {
        navIcon (item) {
            if (!item.icon) return []
            return [item.icon]
        },
        touchNav (item) {
            let current = item.active
            this.navs.forEach(nav => {
                nav.active = false
            })
            item.active = !current
            if (item.route) {
                this.$route.router.go(item.route)
                if (this.state.isMobile) {
                    this.toggle()
                }
            }
        },
        touchSubNav (sub) {
            if (sub.route) {
                this.$route.router.go(sub.route)
                if (this.state.isMobile) {
                    this.toggle()
                }
            }
        }
    }
}
</script>
