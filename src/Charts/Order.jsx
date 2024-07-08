import React, { useEffect } from 'react'
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useState }  from 'react'
import axios from 'axios'

export default function Order() {
    const [series, setSeries] = useState([]); 
    const [otherData, setOtherData] = useState({
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {

          labels: {show: false,},
          axisBorder: {show: false,},
          axisTicks: {show:false},
          show:false,
        },
        yaxis: {
            labels: {show: false,},
            axisborder:{show:false,},
            asixticks:{show:false},
            axisBorder: {show: false,},
        },
        chart: {
            toolbar: {
              show: false,

            }
          },
        grid:{show:false},

    },
    })





    useEffect(()=>{

        axios.get('http://localhost:8000/api/order')
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
          <ReactApexChart options={otherData.options} series={series} type="area" />
        </div>
      )




    
}



