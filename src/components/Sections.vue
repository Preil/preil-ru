<template>
    <div>
        <app-section1></app-section1>
        <app-section2></app-section2>
        <app-section3></app-section3>
        <app-section4></app-section4>
    </div>
</template>

<script>
    import Section1 from './sections/Section1.vue'
    import Section2 from './sections/Section2.vue'
    import Section3 from './sections/Section3.vue'
    import Section4 from './sections/Section4.vue'

    export default {
        components: {
            appSection1: Section1,
            appSection2: Section2,
            appSection3: Section3,
            appSection4: Section4
        }
    }
</script>

<style>

</style>