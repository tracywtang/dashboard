import React from 'react'
import ReactECharts from 'echarts-for-react';

export default function SalesAnalytics() {
    // prettier-ignore
const hours = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'
];
// prettier-ignore
const days = [
    '1k','2k','3k','4k','5k','6k','7k','8k'
];
// prettier-ignore
const data = [[0,0,1],[0,1,1],[0,2,1],[0,3,1],[0,4,1],[0,5,1],[0,6,1],[0,7,1],[0,8,1],
[1,0,1],[1,1,3],[1,2,1],[1,3,1],[1,4,1],[1,5,1],[1,6,1],[1,7,1],[1,8,1],
[2,0,1],[2,1,2],[2,2,1],[2,3,2],[2,4,2],[2,5,2],[2,6,1],[2,7,1],[2,8,1],
[3,0,1],[3,1,1],[3,2,2],[3,3,3],[3,4,3],[3,5,2],[3,6,1],[3,7,1],[3,8,1],
[4,0,1],[4,1,1],[4,2,2],[4,3,3],[4,4,3],[4,5,2],[4,6,1],[4,7,1],[4,8,1],
[5,0,1],[5,1,1],[5,2,2],[5,3,2],[5,4,2],[5,5,3],[5,6,1],[5,7,1],[5,8,1],
[6,0,1],[6,1,1],[6,2,2],[6,3,2],[6,4,2],[6,5,3],[6,6,3],[6,7,1],[6,8,1],
[7,0,1],[7,1,1],[7,2,1],[7,3,1],[7,4,1],[7,5,1],[7,6,1],[7,7,1],[7,8,1],
]
    .map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});
const option = {
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 10,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '15%',
    show: false
  },

  series: [
    {
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
  return (
    <div>
      <ReactECharts option={option}/>
    </div>
  )
}
