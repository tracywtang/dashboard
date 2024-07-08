import React from 'react'


import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

export default function ConversionRate() {

    const [state, setState]= useState({

        series: [{
            name: 'series1',
            data: [31, 60, 50, 80],
            type: 'line',
          }, 
        ],
          options: {
            chart: {
              height: 110,
              type: 'line',
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth',
              dashArray:[0,8],
            },
            legend:{show:false},
            xaxis: {
            //   type: 'datetime',
              categories: ['Jan','Feb','Mar','Apr'],
              show:false,  
              axisBorder: {show: false,},
              axisTicks: {show:false},
              labels: {show: false,},

            },
            yaxis: {
                labels: {show: false,},
                axisborder:{show:false,},
                asixticks:{show:false},
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
                    x: 'Apr',
                    y: 80,
                    marker: {
                        size: 4,
                        fillColor: '#fff',
                        strokeColor: 'orange',
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
            },
            // tooltip: {
            //   x: {
            //     format: 'dd/MM/yy HH:mm'
            //   },
            // },
            colors:['#FF9800'],
        },

    })

  return (
    <div>
      <ReactApexChart 
      options={state.options} 
      series={state.series} 
      type="line" 
      height={70} 
      width={120}
      />
    </div>
  )
}
