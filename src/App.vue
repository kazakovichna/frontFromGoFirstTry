<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
  import MainLayout from "@/layout/MainLayout"

  export default {
    components: {
      MainLayout
    },
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  @import "./style/style.css";
</style>
