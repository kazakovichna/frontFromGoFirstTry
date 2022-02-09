<template>
    <div class="main-layout">
        <div class="header">
            <Header/>
        </div>
        <div class="main-div">
            <LeftSlide/>
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Layout/Header"
    import LeftSlide from "../components/Layout/LeftSlide"

    export default {
        name: "MainLayout",
        data: () => ({
            screenX: window.screen.availWidth,
            screenY: window.innerHeight
        }),
         components: {
            Header,
            LeftSlide
        },
        methods: {
            set_scale() {
                this.screenX = window.innerWidth
                this.screenY = window.innerHeight
                // console.log(this.screenX)
                // console.log(this.screenY)
            },
        },
        created() {
            window.addEventListener('resize', this.set_scale)
        },
        mounted() {
            this.back = document.querySelector('.main-layout')
            this.back.style.height = `${this.screenY}px`
            // console.log(this.screenY)
            //console.log(window.innerHeight)
        }
    }
</script>

<style scoped>
    .main-layout {
        height: available;
    }
    .header {
        height: 5%;
    }
    .main-div {
        height: 95%;
        display: grid;
        grid-template-columns: 1fr 5fr;
    }
</style>
