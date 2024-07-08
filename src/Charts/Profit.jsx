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
          height: 165,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar:{show:false}
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '',
          align: 'left',
        },
        grid: {
          show: false,

        },
        xaxis: {
          show:false,
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {show: false,},
          axisBorder: {show: false,},
          axisTicks: {show:false},
        },
        yaxis:{
          labels:{show:false},
        },
        
      },
    })





    useEffect(()=>{

        axios.get('http://localhost:8000/api/profit')
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
          <ReactApexChart options={otherData.options} series={series} type="line" height={165}  />
        </div>
      )




    
}



