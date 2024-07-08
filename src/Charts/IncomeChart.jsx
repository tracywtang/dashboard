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

export default function Order() {

    const [state, setState]= useState({

        series: [{

            data: [31, 40, 28, 51, 42, 109, 100]
          }, 

        ],
          options: {
            chart: {
              height: 220,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
            //   type: 'datetime',
              categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
            //   labels: {show: false,},
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
            // grid:{show:false},
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
      type="area" 
      height={220} 
      />
    </div>
  )
}
