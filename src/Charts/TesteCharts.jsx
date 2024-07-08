import React, {useEffect} from 'react'
import ReactECharts from 'echarts-for-react'
import {useState}  from 'react'
import axios from 'axios'

export default function TesteCharts() {
    const [option, setOption] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/OrderSta')
            .then(response => {
                const optionFromResponse = response.data[0];
                setOption(optionFromResponse);
            })
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    return (
        <div>
            {option && <ReactECharts option={option} style={{ width: 110, height: 110 }} />}
        </div>
    );
}