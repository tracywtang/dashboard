import React from 'react'

import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

export default function TotalIncome() {

    const [state, setState]= useState({

        series: [{
            name: "",
            data:  [3200,3200,4800,4800,3000,3000,1800,1800,3800,3800,5700,5700],
          }],
        options: {
            chart: {
              type: 'area',
              height: 350,
              zoom: {
                enabled: false
              },
              toolbar:{show:false}
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            
            // title: {
            //   text: 'Fundamental Analysis of Stocks',
            //   align: 'left'
            // },
            // subtitle: {
            //   text: 'Price Movements',
            //   align: 'left'
            // },
            // labels: series.monthDataSeries1.dates,
            xaxis: {
              categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yaxis: {
            //   opposite: false
              labels:{
                formatter: (value) => { return '$'+value/1000+'k' },
              }
            },
            legend: {
            //   horizontalAlign: 'left'
                show:false
            },

          },

    })

  return (
    <div>
      <ReactApexChart 
      options={state.options} 
      series={state.series} 
      type="area" 
      height={315} 
      />
    </div>
  )
}
