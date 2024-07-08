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

export default function Activity() {

    const [state, setState]= useState({

        series: [{

            data: [31, 40, 28, 60, 31, 50, 45]
          }, 

        ],
          options: {
            chart: {
              height: 220,
              type: 'area',
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
            //   type: 'datetime',
              categories: ['Mo','Tu','We','Th','Fr','Sa','Su'],
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

                },
              },
            
            grid:{show:false},
            colors:['#66DA26'],

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
      width={200} 
      height={140} 
      />
    </div>
  )
}
