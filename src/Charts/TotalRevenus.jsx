import React, { useEffect } from 'react'
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useState }  from 'react'
import axios from 'axios'

export default function TotalRevenues() {
    const [series, setSeries] = useState([]); 
    const [otherData, setOtherData] = useState({
        options: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: false
              },
              zoom: {
                enabled: true
              },
              
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 10,
                borderRadiusApplication: 'all', 
                borderRadiusWhenStacked: 'all', 
                dataLabels: {
                    enabled: false,

                },
                columnWidth:'50%',
                
              },
            },
            xaxis: {

                labels: {
                    format: 'MMM',
                },
                categories: [
                    'Jan','Feb','Mar','Apr','May','Jun','Jul'  
                ]
            },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              colors: ["#fff"],
              width: 5
            }

          },
    })





    useEffect(()=>{

        axios.get('http://localhost:8000/api/data')
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
          <ReactApexChart options={otherData.options} series={series} type="bar" />
        </div>
      )




    
}



