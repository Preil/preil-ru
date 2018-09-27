<template>
    <div id="app">
        <app-header></app-header>
        <app-banner></app-banner>
        <app-sections></app-sections>


    </div>

</template>

<script>

    import Header from './components/Header.vue'
    import Banner from './components/Banner.vue'
    import Sections from './components/Sections.vue'


    export default {
        components: {
            appHeader: Header,
            appBanner: Banner,
            appSections: Sections
        }
    }
</script>


<style>

</style>
