<template>
    <section id="one">
        <div class="container">
            <div class="one-features">
                <div class="row">
                    <div class="col-md-8">
                        <div class="section-highlight">
                            <h2>Малогабаритные градирни серии "S"</h2>
                        </div>
                        <button
                                v-for="tab in tabs"
                                v-bind:key="tab.id"
                                v-bind:class="['btn btn-outline-primary', { active: currentTab === tab.id }]"
                                v-on:click="currentTab = tab.id"
                        >{{ tab.name }}
                        </button>

                        <keep-alive>
                            <component
                                    v-bind:is="currentTabComponent"
                                    class="tab"
                            ></component>
                        </keep-alive>

                        <Stype></Stype>
                    </div>
                    <div class="col-md-4">
                        <img src="src/assets/images/ct-16-01.png" alt="Responsive image" class="img-responsive">
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Stype from './section1/s-type.vue'
    import S12 from './section1/s12.vue'
    import S16 from './section1/s16.vue'
    import S20 from './section1/s20.vue'

    export default {
        data: function () {
            return {
                currentTab: "Stype",
                tabs: [
                    {id: "Stype", name: "Серия S"},
                    {id: "S12", name: "S12"},
                    {id: "S16", name: "S16"},
                    {id: "S20", name: "S20"}
                ]
            }
        },
        components: {
            'app-stype': Stype,
            'app-s12': S12,
            'app-s16': S16,
            'app-s20': S20
        },

        computed: {
            currentTabComponent: function () {
                return 'app-' + this.currentTab.toLowerCase()
            }
        }


    }
</script>

<style>

</style>