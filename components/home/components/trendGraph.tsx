"use client"
import {useEffect, useState} from 'react'
import data from '../data.json'
import { LineChart, CartesianGrid, YAxis, XAxis, Tooltip,
          Legend, Line, ResponsiveContainer } from 'recharts'

const TrendGraph = () => {
    return ( 
      <ResponsiveContainer height={'100%'} width={'95%'}>
        <LineChart width={730} height={250} data={data['home_data']}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Assets" stroke="#8884d8"/>
          <Line type="monotone" dataKey="Liabilities" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
}
 
export default TrendGraph;