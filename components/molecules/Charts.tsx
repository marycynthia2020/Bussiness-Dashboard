import React from 'react'
import Overview from '../organisms/Overview'
import LineGraph from './LineGraph'
import WebsiteTraffic from './WebsiteTraffic'
import BarChartt from './BarChart'
import PieChartt from './PieChart'

const Charts = () => {
  return (
    <div>
        <Overview />
        <div className='mt-8 grid lg:grid-cols-5 gap-20 lg:gap-4 '>
        <LineGraph />
        <WebsiteTraffic />
        </div>
        <div className='mt-8 grid lg:grid-cols-6 gap-20 lg:gap-4 '>
          <BarChartt />
          <PieChartt />
        </div>
    </div>
  )
}

export default Charts