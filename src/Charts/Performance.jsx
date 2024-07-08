import React from 'react'

import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

export default function Performance() {

    const [state, setState]= useState({

        series: [{
            name: 'Income',
            data: [80, 75, 70, 65, 63, 100],
          }, 
          {
            name: 'Earning',
            data: [70, 78, 81, 100, 78, 63],
          }, 
        //   {
        //     name: 'Series 3',
        //     data: [44, 76, 78, 13, 43, 10],
        //   }
        ],
          options: {
            chart: {
              height: 350,
              type: 'radar',
              toolbar:{show:false},
              dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
              }
            },
            // title: {
            //   text: 'Radar Chart - Multi Series'
            // },
            stroke: {
              width: 2
            },
            fill: {
              opacity: 0.1
            },
            markers: {
              size: 0
            },
            yaxis: {
              show:false,
              stepSize: 20
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },

          },

    })

  return (
    <div>
      <ReactApexChart 
      options={state.options} 
      series={state.series} 
      type="radar" 
      height={315} 
      />
    </div>
  )
}
