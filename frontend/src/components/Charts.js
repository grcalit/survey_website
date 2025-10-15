import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Label
} from "recharts";
import './Charts.css';

export default function Charts({pageSetter, isLoggedIn}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/api/topic1/charts/numerical`)
            .then(res => res.json())
            .then(json => {
                const formatted = Object.entries(json.q1).map(
                    ([range, count]) => ({range, count})
                );
                setData(formatted);
            });
        }, []);
        

    return (
        <div>
            <div className="histogram-container">
                <div className="histogram-chart-wrapper">
                    <h2>Sleep Hours Histogram</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="range">
                            <Label value="Sleep Hours Range" offset={-5} position="insideBottom" />
                        </XAxis>
                        <YAxis label={{ value: "Number of Users", angle: -90, position: "insideLeft" }} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {!isLoggedIn && <button onClick={() => pageSetter(3)}>Sign In</button>}
            </div>
            <div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis datakey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legened/>
                        <Bar dataKey="amount" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue"/>}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
    

}