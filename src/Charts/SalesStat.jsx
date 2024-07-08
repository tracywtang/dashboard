import React from 'react'
import ReactECharts from 'echarts-for-react';

export default function SalesStat() {

    const gaugeData = [

        {
          value: 75,
          name: '',
          title: {
            offsetCenter: ['0%', '30%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '40%']
          }
        }
      ];
     const option = {
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: '#2f4554',
                color: 'green' 
              }
            },
            axisLine: {
              lineStyle: {
                width: 20,
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            title: {
              fontSize: 14
            },
            detail: {
              width: 50,
              height: 14,
              fontSize: 14,

              color: 'inherit',
              formatter: '{value}% \n Sales',
              textStyle: {
                fontSize: '24',
          },
            }
          }
        ]
      };


  return (
    <div>
      <ReactECharts option={option} 
      

        />
    </div>
  )
}
