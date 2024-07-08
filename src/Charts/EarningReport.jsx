import React from 'react'
import ReactECharts from 'echarts-for-react';

export default function EarningReport() {
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {show:false},
          axisLine:{show:false},
        }],
        yAxis: [{
          show:false
        }],
        series: [{
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 234, { value: 200, itemStyle: { color: 'orange'} }, 130, 220]
        }]
      }
  return (
    <div>
      <ReactECharts option={option} style={{width:350, height:200}}/>
    </div>
  )
}
