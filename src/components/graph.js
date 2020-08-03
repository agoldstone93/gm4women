import React, {Component} from 'react'
import Chart from 'chart.js'


export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: ['Employment', 'Society', 'Health & Culture', 'Participation', 'Employment'],
                datasets: [{
                    label: '2018', 
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: 'rgba(75, 192, 192, 0.4)'
                },
                {
                    label: '2019',
                    data: [4, 15, 3, 9, 12],
                    backgroundColor: 'rgba(153, 102, 255, 0.4)'
                }]
            },
            options: {
                legend: {
                    display: true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div><canvas id="myChart" ref={this.chartRef} /></div>
        )
    }
}