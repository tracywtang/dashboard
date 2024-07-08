import React from 'react'


import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

export default function TotalBalance() {

    const [state, setState]= useState({

        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109],
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
              curve: 'smooth',
              dashArray:[0,8],
            },
            legend:{show:false},
            xaxis: {
            //   type: 'datetime',
              categories: ['Jan','Feb','Mar','Apr','May','Jun'],

              axisBorder: {show: false,},
              axisTicks: {show:false},

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
                    x: 'Jun',
                    y: 109,
                    marker: {
                        size: 6,
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
      height={210} 
      width={360}
      />
    </div>
  )
}
