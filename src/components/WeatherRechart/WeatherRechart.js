import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Page A', uv: 400, pv: 400, amt: 2400 },
    { test: 'Page B', uv: 500, pv: 500, amt: 2500 },

];


function WeatherRechart() {

    return (
        <ResponsiveContainer aspect={1} width="50%" height="50%">
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <XAxis dataKey="test" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default WeatherRechart;