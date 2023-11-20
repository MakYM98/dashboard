"use client"
import {useEffect, useState} from 'react'
import data from '../data.json'
import { LineChart, CartesianGrid, YAxis, XAxis, Tooltip,
          Legend, Line, ResponsiveContainer } from 'recharts'

const TrendGraph = () => {
    return ( 
      <ResponsiveContainer height={'85%'} width={'95%'}>
        <LineChart width={730} height={250} data={data['home_data']}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="" stroke='#525356' vertical={false}/>
          <XAxis dataKey="name" stroke='#525356'/>
          <YAxis stroke='#525356'/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Assets" stroke="rgb(14 159 110)" dot={false}/>
          <Line type="monotone" dataKey="Liabilities" stroke="rgb(240 82 82)" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
}
 
export default TrendGraph;