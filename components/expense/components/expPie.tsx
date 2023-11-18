"use client"
import {useEffect, useState} from 'react'
import data from '../data.json'
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts'

const COLORS = ['#77DD77', '#87CEEB', '#CFCFC4', '#C3B1E1', '#AEC6CF', '#FDFD96', '#6699CC']

const ExpPie = () => {
    return ( 
      <ResponsiveContainer height={'100%'} width={'100%'}>
        <PieChart width={730} height={250}>
            <Pie data={data['exp_pie']} dataKey="Total" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
                {
                    data['exp_pie'].map((entry,index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}
 
export default ExpPie;