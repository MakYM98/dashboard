"use client"
import {useEffect, useState} from 'react'
import data from '../data.json'
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts'

const COLORS = ['#77DD77', '#87CEEB', '#CFCFC4', '#C3B1E1', '#AEC6CF', '#FDFD96', '#6699CC']

const LoanPie = () => {

  let renderLabel = function(entry:any) {
    return entry.name
  }

  return ( 
    <ResponsiveContainer height={'100%'} width={'100%'}>
      <PieChart width={730} height={150}>
          <Pie data={data['loan_pie']} dataKey="amount" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label={renderLabel}>
              {
                  data['loan_pie'].map((entry,index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
              }
          </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
 
export default LoanPie;