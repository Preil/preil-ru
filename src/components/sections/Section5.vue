<template>
    <div class="small">
        <line-chart :chart-data="datacollection"></line-chart>
        <button @click="fillData()">Randomize</button>

    </div>
</template>

<script>
    import LineChart from './LineChart.js'
    import * as calc from './calc.js'

    export default {
        components: {
            LineChart
        },
        data () {
            return {
                datacollection: null
            }
        },
        mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.datacollection = {
                    type: 'bar',
                    labels: ["12", "14", "16", "18", "20", "22", "24", "26", "28", "30"],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [144, 165, 185, 206, 226, 247, 268, 288, 309, 329, 350]
                        }, {
                            label: 'Data two',
                            type: 'line',
                            backgroundColor: '#f86969',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                }
                alert(calc.enthalpy(25, 1013));
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        }
    }
</script>

<style>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>