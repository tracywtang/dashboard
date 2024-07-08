import React from 'react'
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

// expenses in ecommerce tab

export default function Expensese() {

    const [state, setState]= useState({
        series: [{
            name: 'Males',
            data: [10,30,10,28,35,28,15,8,10,18
            ]
          },
          {
            name: 'Females',
            data: [-30,-20,-30,-15,-22,-18,-19,-10,-34,-18
            ]
          }
          ],
          options: {
            chart: {
              type: 'bar',
              height: 440,
              stacked: true,
              toolbar:{show:false}
            },
            colors: ['#ff9800', '#ff9800'],
            plotOptions: {
              bar: {
                borderRadius: 5,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'all', // 'all', 'last'
                horizontal: false, //so it's on y axis
                barHeight: '80%',
                columnWidth: '50%',
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 1,
              colors: ["#fff"]
            },
            
            grid: {
              xaxis: {
                lines: {
                  show: false
                }
              }
            },
            yaxis: {
              stepSize: 1,
              show: false,
            },
            tooltip: {
              shared: false,
              x: {
                formatter: function (val) {
                  return val
                }
              },
              y: {
                formatter: function (val) {
                  return Math.abs(val) + "%"
                }
              }
            },
            // title: {
            //   text: 'Mauritius population pyramid 2011'
            // },
            xaxis: {
                show: false,
                axisBorder:{show:false},
                axisTicks:{show:false},
            //   categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
            //     '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
            //     '0-4'
            //   ],
            //   title: {
            //     text: 'Percent'
            //   },
              labels: {
                show: false,
                formatter: function (val) {
                  return Math.abs(Math.round(val)) + "%"
                }
              }
            },
            legend:{show:false},
            grid:{show:false},
            stroke: {
              colors: ["#fff"],
              width: 8
            }
          },
    })
  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="bar" width={253} height={191}/>
    </div>
  )
}



