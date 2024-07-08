import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';

export default function IncomeSmall() {
    const [state, setState] = useState({
        series: [65],
        options: {
            chart: {
                height: '120px', 
                width: '120px', 
                type: 'radialBar',

            },

            dataLabels: {
                
                name: {
                  offsetY: -10,
                  show: true,
                  color: "#888",
                  fontSize: "13px"
                },
                value: {
                  color: "#111",
                  fontSize: "30px",
                  show: false
                }
              },

            labels:['6.5k']
        },


        
    });

    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type="radialBar" />
        </div>
    );
}
