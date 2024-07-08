import React from 'react'
// npm install apexcharts --save
// install 
// npm i react-apexcharts
// download and install
// npm install react-apexcharts apexcharts

import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

export default function Session() {

    const [state, setState]= useState({

        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100],
            type: 'line',
          }, 
        ],
          options: {
            chart: {
              height: 110,
              type: 'line'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              dashArray:[0,8]
            },
            legend:{show:false},
            xaxis: {
            //   type: 'datetime',
              categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
              labels: {show: false,},
              axisBorder: {show: false,},
              axisTicks: {show:false},
              show:false,
            },
            yaxis: {
                labels: {show: false,},
                axisborder:{show:false,},
                asixticks:{show:false},
                axisBorder: {show: false,},
            },
            chart: {
                toolbar: {
                  show: false,

                }
              },
            grid:{show:false},
            annotations:{
                points: [
                //     {
                //     x: 'Mar',
                //     y: 28,
                //     marker: {
                //       size: 8,
                //       fillColor: '#fff',
                //       strokeColor: 'black',
                //       radius: 2,
                //       cssClass: 'apexcharts-custom-class'
                //     },
                //   }, 
                  {
                    x: 'Jul',
                    y: 100,
                    marker: {
                        size: 4,
                        fillColor: '#fff',
                        strokeColor: 'green',
                        radius: 2,
                        cssClass: 'apexcharts-custom-class'
                      },
                    // marker: {
                    //   size: 0
                    // },
                    // image: {
                    //   path: '../../assets/images/ico-instagram.png'
                    // }
                  }]
            }
            // tooltip: {
            //   x: {
            //     format: 'dd/MM/yy HH:mm'
            //   },
            // },
        },

    })

  return (
    <div>
      <ReactApexChart 
      options={state.options} 
      series={state.series} 
      type="line" 
    //   height={110} 
      />
    </div>
  )
}
