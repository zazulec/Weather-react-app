import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Input } from '@material-ui/core';




function WeatherRechart(props) {

    // const data = [

    //     { name: props.data.list[0].dt_txt, uv: props.data.list[0].main.temp, pv: 40, amt: 60 },
    //     { name: props.data.list[1].dt_txt, uv: props.data.list[1].main.temp, pv: 40, amt: 60 },
    //     { name: props.data.list[2].dt_txt, uv: props.data.list[2].main.temp, pv: 40, amt: 60 },
    // {name: 'Page A', uv: 400, pv: 700, amt: 2400},
    // {name: 'Page B', uv: 500, pv: 600, amt: 2400},
    // {name: 'Page C', uv: 600, pv: 500, amt: 2400},
    // {name: 'Page D', uv: 700, pv: 400, amt: 2400},

    // ];
    const data = props.data.list.map(element => {
        return { name: element.dt_txt, uv: element.main.temp, pv: element.main.feels_like, amt: 60 }
    });

    // const filterData = data.filter(element => )

    return (
        <div>
        <ResponsiveContainer aspect={1} width="90%" height="40%">
            <LineChart width={50} height={50} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="pink" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
        </div>

    );
}

export default WeatherRechart;