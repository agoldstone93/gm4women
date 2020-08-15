import React, {Component} from 'react'
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

// add alternating background https://www.npmjs.com/package/chartjs-plugin-barchart-background

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: 'bar',
            responsive: 'true',
            data: {
                labels: [
                    ['1. Employment','rate gap'],
                    ['3. Support for sexual','violence survivors'],
                    ['5. Voting Women in','the GMCA cabinet'],
                    ['7. Women in ','STEM undergrad'],
                    ['9. Senior position in','National Arts Council']
                ],
                datasets: [{
                    label: '2018', 
                    data: [9, 56, 18, 18, 40],
                    backgroundColor: 'rgba(75, 192, 192, 0.4)'
                },
                {
                    label: '2019',
                    data: [11, '', 18, 17, 45],
                    backgroundColor: 'rgba(153, 102, 255, 0.4)'
                }]
            },
            options: {
                legend: { display: true, position: 'bottom' },
                scales: {
                    yAxes: [{
                        ticks: { display: false, beginAtZero: true },
                        gridLines: { display: false }
                    }],
                    xAxes: [{
                        gridLines: { display: false }
                    }]
                },
                tooltips: { enabled: false },
                maintainAspectRatio: false,
                plugins: {
                    chartJsPluginBarchartBackground: {
                      color: '#efefef',
                      mode: 'odd'
                    }
                  }
            },
            plugins: [ChartDataLabels]
        });
    }

    render() {
        return (
            <div>
                <canvas id="myChart" ref={this.chartRef} style={{border: `1px solid grey`}} />
            </div>

        )
    }
}