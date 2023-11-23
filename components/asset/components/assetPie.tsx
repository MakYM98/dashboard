"use client"
import {useEffect, useState} from 'react'
import data from '../data.json'
import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from 'recharts'

const COLORS = ['#77DD77', '#87CEEB', '#CFCFC4', '#C3B1E1', '#AEC6CF', '#FDFD96', '#6699CC']

const AssetPie = () => {

    let renderLabel = function(entry:any) {
      return entry.name
    }
  
    return ( 
      <ResponsiveContainer height={'90%'} width={'100%'}>
        <PieChart width={730} height={250}>
            <Pie data={data['asset_pie']} dataKey="Total" nameKey="ticker" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label={renderLabel}>
                {
                    data['asset_pie'].map((entry,index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
                }
            </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}
 
export default AssetPie;