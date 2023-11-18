"use client"
import {useEffect, useState} from 'react'
import data from '../data.json'
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts'

const COLORS = ['#77DD77', '#87CEEB', '#CFCFC4', '#C3B1E1', '#AEC6CF', '#FDFD96', '#6699CC']

const LoanPie = () => {
    return ( 
      <ResponsiveContainer height={'75%'} width={'100%'}>
        <PieChart width={730} height={150}>
            <Pie data={data['loan_pie']} dataKey="amount" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
                {
                    data['loan_pie'].map((entry,index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}
 
export default LoanPie;