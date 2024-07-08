import React from 'react'
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

export default function CompGrowth() {
    const [state, setState]= useState({
        series: [78],
            options: {
              chart: {
                height: 190,
                type: 'radialBar',
                offsetY: -10
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    name: {
                      fontSize: '16px',
                      color: undefined,
                      offsetY: 120
                    },
                    value: {
                      offsetY: 76,
                      fontSize: '22px',
                      color: undefined,
                      formatter: function (val) {
                        return val + "%";
                      }
                    }
                  }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
              },
              stroke: {
                dashArray: 4
              },
              labels: ['Growth'],
              
            },
    })
  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="radialBar" height={190}/>
    </div>
  )
}
