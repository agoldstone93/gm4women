import React, { Component } from "react"
import Chart from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
import styled from "styled-components"

// add alternating background https://www.npmjs.com/package/chartjs-plugin-barchart-background

const GraphTitles = styled.h2`
  font-size: 20px;
  margin-top: 5px;
  padding-bottom: 20px;
`

export default class LineGraph extends Component {
  chartRef = React.createRef()
  chartRef2 = React.createRef()

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d")
    const myChartRef2 = this.chartRef2.current.getContext("2d")

    new Chart(myChartRef, {
      type: "bar",
      responsive: "true",
      data: {
        labels: [
          ["1. Employment", "rate gap"],
          ["3. Support for sexual", "violence survivors"],
          ["5. Voting Women in", "the GMCA cabinet"],
          ["7. Women in ", "STEM undergrad"],
          ["9. Senior position in", "National Arts Council"],
        ],
        datasets: [
          {
            label: "2018",
            data: [9, 56, 18, 18, 40],
            backgroundColor: "rgba(75, 192, 192, 0.4)",
          },
          {
            label: "2019",
            data: [11, "", 18, 17, 45],
            backgroundColor: "rgba(153, 102, 255, 0.4)",
          },
        ],
      },
      options: {
        legend: { display: true, position: "bottom" },
        scales: {
          yAxes: [
            {
              ticks: { display: false, beginAtZero: true },
              gridLines: { display: false },
            },
          ],
          xAxes: [
            {
              gridLines: { display: false },
            },
          ],
        },
        tooltips: { enabled: false },
        maintainAspectRatio: false,
        aspectRatio: 1.5,
        plugins: {
          chartJsPluginBarchartBackground: {
            color: "#efefef",
            mode: "odd",
          },
        },
      },
      plugins: [ChartDataLabels],
    })

    new Chart(myChartRef2, {
      type: "bar",
      responsive: "true",
      data: {
        labels: [
          ["2. Gender pay gap"],
          ["4. Denied support due to", "immigration status"],
          ["6. Judicial appointment"],
          ["8. Construction apprentices"],
          ["10. Exercising 30 mins", "per week"],
        ],
        datasets: [
          {
            label: "2018",
            data: [14, 47, 29, 2, 28],
            backgroundColor: "rgba(75, 192, 192, 0.4)",
          },
          {
            label: "2019",
            data: [13, "", 31, 1, 28],
            backgroundColor: "rgba(153, 102, 255, 0.4)",
          },
        ],
      },
      options: {
        legend: { display: true, position: "bottom" },
        scales: {
          yAxes: [
            {
              ticks: { display: false, beginAtZero: true },
              gridLines: { display: false },
            },
          ],
          xAxes: [
            {
              gridLines: { display: false },
            },
          ],
        },
        tooltips: { enabled: false },
        maintainAspectRatio: false,
        aspectRatio: 1.5,
        plugins: {
          chartJsPluginBarchartBackground: {
            color: "#efefef",
            mode: "odd",
          },
        },
      },
      plugins: [ChartDataLabels],
    })
  }

  render() {
    return (
      <div style={{ border: `1px solid grey`, borderRadius: `5px` }}>
        <div
          style={{
            display: `grid`,
            gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr`,
            justifyItems: `center`,
          }}
        >
          <GraphTitles>Employment</GraphTitles>
          <GraphTitles>Safety</GraphTitles>
          <GraphTitles>Participation</GraphTitles>
          <GraphTitles>Education</GraphTitles>
          <GraphTitles>Culture</GraphTitles>
        </div>
        <div>
          <canvas id="myChart" ref={this.chartRef} />
        </div>
        <div>
          <canvas id="myChart2" ref={this.chartRef2} />
        </div>
        <hr />
        <small>
          <p>#1. Source: Annual Population Survey 2017-2019.</p>
          <p>#2. Source: Annual Survey of Hours and Earnings 2017-2019.</p>
          <p>
            #3. Source: Voices of Survivors Greater Manchester, 2018. Using the
            same data as last year, no new data. #4. Source: Safety4Sisters,
            Migrant Women's Right to Safety Pilot Project report, 2016.
            https://www.southallblacksisters.org.uk/wp-content/uploads/2016/11/Safety4Sisters-North-West-Report.pdf,
            same indicator as last year, no new data.
          </p>
          <p>
            #5. Source: This data has been compiled by reference to the websites
            of the various councils, 2020.
          </p>
          <p>#6. Source: Judicial Diversity Statistics 2018 and 2019.</p>
          <p>
            #7. Source: Higher Education Statistics Authority returns 2016/17
            and 2017/18
          </p>
          <p>#8. Source: Department of Education 2015-17</p>
          <p>
            #9. Source: Arts Council 32 organisations, 2017-18 annual survey and
            40 organisations in 2018-19
          </p>
          <p>
            #10. Source: Sport England’s adult active lives, May 2017-18 and May
            2018-19 data
            https://www.sportengland.org/research/active-lives-survey/
            https://activelives.sportengland.org/
          </p>
        </small>
      </div>
    )
  }
}
