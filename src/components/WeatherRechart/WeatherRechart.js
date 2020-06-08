import React, { useContext } from 'react';
import { RechartInputContext } from '../../context/RechartInputContext'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Overlay } from './styled/StyledOverlay';


function WeatherRechart(props) {

    const { rechartInputData } = useContext(RechartInputContext);
    const data = props.data.list
        .filter(element => element.dt_txt.includes(rechartInputData))
        .map(element => {
            return {
                name: element.dt_txt.toString().slice(10, 16),
                temperature: element.main.temp,
                sensedTemperature: element.main.feels_like, amt: 60
            }
        });

    return (
            <Overlay>
                <ResponsiveContainer aspect={5} width={"100%"} /*height={'500px'} nie działa */>
                    <LineChart 
                    width={500}
                    height={500}
                    margin={{ top: 5, right: 30, bottom: 5, left: 0 }}
                    data={rechartInputData ? data : null}>
                    <Legend verticalAlign="top" height={36} />
                        <Line
                            name='Temperature'
                            type="monotone"
                            dataKey="temperature"
                            stroke="#8884d8"
                            ill="#8884d8" />
                        <Line
                            name='Sensed temperature'
                            type="monotone"
                            dataKey="sensedTemperature"
                            stroke="pink" fill="pink" />
                        <CartesianGrid
                            stroke="#ccc"
                            strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </Overlay>

    );
}

export { WeatherRechart };