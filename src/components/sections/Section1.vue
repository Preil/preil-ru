<template>
    <section id="one">
        <div class="container">
            <div class="one-features">
                <div class="section-highlight">
                    <h2>Вентиляторные градирни серии "S"</h2>
                    <br>
                    <div class="btn-group">
                        <button
                                v-for="tab in tabs"
                                v-bind:key="tab.id"
                                v-bind:class="['btn btn-outline-primary', { active: currentTab === tab.id }]"
                                v-on:click="currentTab = tab.id"
                        >{{ tab.name }}
                        </button>
                    </div>
                </div>
                <keep-alive>
                    <component
                            v-bind:is="currentTabComponent"
                            class=""
                    ></component>
                </keep-alive>
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