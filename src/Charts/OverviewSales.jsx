import React from 'react'
import ReactECharts from 'echarts-for-react';

export default function OverviewSales() {

    var series = [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          stack: 'a',
          name: 'a',
          barWidth: '20%',
          color:'red'
        },
        {
          data: [20, 46, 64, 20, 30, 20, 30],
          type: 'bar',
          stack: 'a',
          name: 'b',
          barWidth: '20%',
          color:'grey'
        },
        
      ];
      const stackInfo = {};
      for (let i = 0; i < series[0].data.length; ++i) {
        for (let j = 0; j < series.length; ++j) {
          const stackName = series[j].stack;
          if (!stackName) {
            continue;
          }
          if (!stackInfo[stackName]) {
            stackInfo[stackName] = {
              stackStart: [],
              stackEnd: []
            };
          }
          const info = stackInfo[stackName];
          const data = series[j].data[i];
          if (data && data !== '-') {
            if (info.stackStart[i] == null) {
              info.stackStart[i] = j;
            }
            info.stackEnd[i] = j;
          }
        }
      }
      for (let i = 0; i < series.length; ++i) {
        const data = series[i].data;
        const info = stackInfo[series[i].stack];
        for (let j = 0; j < series[i].data.length; ++j) {
          // const isStart = info.stackStart[j] === i;
          const isEnd = info.stackEnd[j] === i;
          const topBorder = isEnd ? 20 : 20;
          const bottomBorder = 0;
          data[j] = {
            value: data[j],
            itemStyle: {
              borderRadius: [topBorder, topBorder, topBorder, topBorder]
            }
          };
        }
      }
      const option = {
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          axisTick: {show:false},
          axisLine:{show:false},
          
        },
        yAxis: {
        //  the original value in the echart
        //   type: 'value',
        //   to hide the background lines
        //   splitLine:{show:false},

        // completely hide y 
            show:false,
        },

        series: series
      
      };

  return (
    <div>
      <ReactECharts option={option} />
    </div>
  )
}
