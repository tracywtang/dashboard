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
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100],
            // type: 'line'
          }, 
          {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41],
            // type:'line'
          }
        ],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth',
              dashArray:[0,8]
            },
            legend:{show:false},
            xaxis: {
            //   type: 'datetime',
              categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
              labels: {show: true,},
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
                points: [{
                    x: 'Mar',
                    y: 28,
                    marker: {
                      size: 8,
                      fillColor: '#fff',
                      strokeColor: 'black',
                      radius: 2,
                      cssClass: 'apexcharts-custom-class'
                    },
                    // label: {
                    //   borderColor: '#FF4560',
                    //   offsetY: 0,
                    //   style: {
                    //     color: '#fff',
                    //     background: '#FF4560',
                    //   },
                
                    //   text: 'Point Annotation',
                    // }
                  }, {
                    x: 'Jun',
                    y: 52,
                    marker: {
                        size: 8,
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
      type="area" 
    //   height={110} 
      />
    </div>
  )
}
