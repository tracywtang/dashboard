import React from 'react'
import ReactECharts from 'echarts-for-react';

export default function NewVisitors() {
    const option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {},
        xAxis: [{
          type: "category",
          data: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
          axisTick: {show:false},
          axisLine:{show:false},
          fontsize:'3',

        }],
        yAxis: [{
          show:false
        }],
        series: [{
          name: "直接访问",
          type: "bar",
          barWidth: "40%",
          data: [30, 52, 200, 234, 200,{ value: 130, itemStyle: { color: 'orange'} }, 220],
          itemStyle: {

            normal: {
                barBorderRadius: [50, 50, 50 ,50 ]
            }
          }
        }]
      }
  return (
    <div>
      <ReactECharts option={option} style={{width:220, height:180}}/>
    </div>
  )
}
