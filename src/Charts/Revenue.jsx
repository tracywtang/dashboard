import React, { useEffect } from 'react'
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useState }  from 'react'
import axios from 'axios'

export default function Revenue() {
    const [series, setSeries] = useState([]); 
    const [otherData, setOtherData] = useState({
      options: {
        chart: {
          height: 110,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          },
          toolbar:{show:false},
        },
        // colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            'M','T','W','T','F','S','S'
          ],
          labels: {
            style: {
            //   colors: colors,
              fontSize: '12px'
            }
          },
        },
        yaxis:{labels:{show:false}},
      },
    })





    useEffect(()=>{

        axios.get('http://localhost:8000/api/revenue')
            .then((response) => {
                // Set data in state
                setSeries(response.data);
                // let series=response.data;
           

                // console.log('axios otherData',otherData.options)
                // console.log('response data',response.data)
               



            })
            .catch((err)=>console.log('err'))
    
        


    },[])

    // console.log('series',series)

    return (
        <div>
          <ReactApexChart options={otherData.options} series={series} type="bar" height={110} />
        </div>
      )




    
}



