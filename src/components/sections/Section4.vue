<template>
    <section id="four">
        <div class="container">
            <div class="four-features">
                <div id="graph">
                    <div class="row">
                        <div id="content">
                            <canvas ref="chart"></canvas>
                            <button @click="changeData">Change data</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>


<script>


    export default {
        name: 'graph',
        mounted() {
            var chart = this.$refs.chart;
            var ctx = chart.getContext("2d");
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["12", "14", "16", "18", "20", "22", "24", "26", "28", "30"],
                    datasets: [
                        {
                            label: 'Cooling capability, kW',
                            yAxisID: 'B',
                            data: [144, 165, 185, 206, 226, 247, 268, 288, 309, 329, 350],

                            backgroundColor: [
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)',
                                'rgba(147,112,219, 0.4)'

                            ],
                            borderColor: [
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)',
                                'rgba(153,50,204,0.5)'


                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Wet bulb temperature',
                            data: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                            type: 'line',
                            backgroundColor: [
                                'rgba(126,211,33, 0.4)'
                            ],
                            borderColor: [
                                'rgba(81,135,21,1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Hot water temperature',
                            data: [32.5, 33.3, 34.1, 34.9, 35.6, 36.4, 37.1, 37.8, 38.4, 39.1, 39.7],
                            type: 'line',
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Cooled water temperature',
                            data: [22.5, 23.3, 24.1, 24.9, 25.6, 26.4, 27.1, 27.8, 28.4, 29.1, 29.7],
                            type: 'line',
                            backgroundColor: [
                                'rgba(0, 191, 255, 0.3)'
                            ],
                            borderColor: [
                                'rgba(0, 100, 255,1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    legend:{
                      position: 'bottom'
                    },

                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Temperature, ºC'
                            },
                            ticks: {
                                beginAtZero: false
                            }
                        },
                            {
                                id: 'B',
                                type: 'linear',
                                position: 'right',
                                ticks: {
                                    max: 400,
                                    min: 0
                                }
                            }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Water flow, m³/h'
                            },
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                    }
                }
            });
        }
//        methods: {
//            changeData: function () {
//                console.log(this.graph.data)
////                myChart.data.datasets[0].data[5] = 120;
////                myChart.update();
//            }
//        }
    }
</script>

<style>
    #graph {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #content {
        margin: auto;
        width: 1024px;
        background-color: #FFFFFF;
        padding: 20px;
    }
</style>