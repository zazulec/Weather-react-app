import React, { useContext } from 'react';
import RechartInputContext from '../../context/RechartInputContext'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function WeatherRechart(props) {
    const { rechartInputData, setRechartInputData } = useContext(RechartInputContext);
    const data = props.data.list
        .filter(element=> element.dt_txt.includes(rechartInputData))
        .map(element => {
            return { name: element.dt_txt, uv: element.main.temp, pv: element.main.feels_like, amt: 60 }
        });
// var boolean = array.includes(searchElement[, fromIndex])
    return (
        <div>
            <ResponsiveContainer aspect={1} width="90%" height="40%">
                <LineChart width={50} height={50} data={rechartInputData ? data: null}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="pink" />
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