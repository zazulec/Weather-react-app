import React, { useContext } from 'react';
import RechartInputContext from '../../context/RechartInputContext'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function WeatherRechart(props) {

    const { rechartInputData } = useContext(RechartInputContext);
    const data = props.data.list
        .filter(element=> element.dt_txt.includes(rechartInputData))
        .map(element => {
            return { name: element.dt_txt.toString().slice(10, 19), temperature: element.main.temp, sensedTemperature: element.main.feels_like, amt: 60 }
        })
    return (
        <div>
            <ResponsiveContainer aspect={5} width="90%" height="40%">
                <LineChart width={50} height={50} data={rechartInputData ? data: null}>
                <Legend verticalAlign="top" height={36}/>
                    <Line name='Temperature' type="monotone" dataKey="temperature" stroke="#8884d8" fill="#8884d8"/>
                    <Line name='Sensed temperature' type="monotone" dataKey="sensedTemperature" stroke="pink" fill="pink"/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
}

export default WeatherRechart;