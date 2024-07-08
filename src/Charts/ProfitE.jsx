import React from 'react'

import ReactECharts from 'echarts-for-react';

export default function ProfitE() {
    const option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
      
            ['Jan', 40,38],
            ['Apr', 20,18],
            ['Jul', 40,60],
            ['Oct', 100,50]
          ]
        },
        xAxis: { type: 'category',
          axisLine:{show:false},
          axisTick:{show:false},
        },
        yAxis: {show:false},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' ,barWidth:'30%',color:'#66DA26',opacity:'1'}, 
        { type: 'bar',barWidth:'30%',color:'rgba(113, 221, 55, 0.5)' }],
        
      };
  return (
    <div>
              <ReactECharts option={option} style={{width:190, height:150}}/>

    </div>
  )
}
