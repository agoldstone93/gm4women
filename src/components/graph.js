import React, {Component} from 'react'
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import styled from "styled-components"

// add alternating background https://www.npmjs.com/package/chartjs-plugin-barchart-background

const GraphTitles = styled.h3`
  font-size: 20px;
  margin-top: 5px;
  padding-bottom: 20px;
`

export default class LineGraph extends Component {
    chartRef = React.createRef();
    chartRef2 = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        const myChartRef2 = this.chartRef2.current.getContext("2d");

        
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
                aspectRatio: 1.5,
                plugins: {
                    chartJsPluginBarchartBackground: {
                      color: '#efefef',
                      mode: 'odd'
                    }
                  }
            },
            plugins: [ChartDataLabels]
        });

        new Chart(myChartRef2, {
            type: 'bar',
            responsive: 'true',
            data: {
                labels: [
                    ['2. Gender pay gap'],
                    ['4. Denied support due to','immigration status'],
                    ['6. Judicial appointment'],
                    ['8. Construction apprentices'],
                    ['10. Exercising 30 mins','per week']
                ],
                datasets: [{
                    label: '2018', 
                    data: [14, 47, 29, 2, 28],
                    backgroundColor: 'rgba(75, 192, 192, 0.4)'
                },
                {
                    label: '2019',
                    data: [13, '', 31, 1, 28],
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
                aspectRatio: 1.5,
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
            <div style={{border: `1px solid grey`}} >
                <div
                style={{
                    display: `grid`,
                    gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr`,
                    justifyItems: `center`
                }}
                >
                <GraphTitles>Employment</GraphTitles>
                <GraphTitles>Safety</GraphTitles>
                <GraphTitles>Participation</GraphTitles>
                <GraphTitles>Education</GraphTitles>
                <GraphTitles>Culture</GraphTitles>
                
                </div>
                <div>
                    <canvas id="myChart" ref={this.chartRef}/>
                </div>
                <div>
                    <canvas id="myChart2" ref={this.chartRef2}/>
                </div>
            </div>
        )
    }
}