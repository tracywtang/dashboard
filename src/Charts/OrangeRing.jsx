import React from 'react'
import ReactECharts from 'echarts-for-react';

export default function OrangeRing() {

  const gaugeData = [
    {
      value: 55,
      name: '',
      title: {
        offsetCenter: ['0%', '30%']
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '40%']
      }
    },

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
          color: 'orange'
        }
      },
      axisLine: {
        lineStyle: {
          width: 4
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
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
        show: false,

      },
      radius: '10%',
    }
  ]
};
      

  return (
    <div>
        {/* <ReactECharts option={option} /> */}
        {option && <ReactECharts option={option} style={{ width: 110, height: 60 }} />}
    </div>
  )

  
}




