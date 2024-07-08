import React from 'react'
import ReactECharts from 'echarts-for-react';

export default function GeneratedLead() {

    const option = {
        legend: {
          show: false,  
          orient: 'vertical',
          x: 'left',
          
          data: ['23% 1st Week', '27% 2nd Week', '22% 3rd Week', '28% 4th Week']
        },
        title:{
            text: '25% Average',
            left: 'center',
            top: 'bottom',
            fontsize: 5,
        },
        series: [
          {
            type: 'pie',
            color: [
                '#37A2DA',
                '#32C5E9',
                '#67E0E3',
                '#9FE6B8',],
            radius: ['50%', '70%'],
            avoidLabelOverlap: true,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '10',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: 230, name: '23% 1st Week' },
              { value: 270, name: '27% 2nd Week' },
              { value: 220, name: '22% 3rd Week' },
              { value: 280, name: '28% 4th Week' },
            ],
            tooltip:{show:false}
          }
        ]
      };

  return (
    <div>
              <ReactECharts option={option} style={{width:150, height:150}}

        />
    </div>
  )
}
