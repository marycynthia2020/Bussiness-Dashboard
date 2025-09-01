import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'mac',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'linux',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'iOS',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Andriod',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Windows',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Others',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const BarChartt = () => {
  return (
    <div className='w-full lg:col-span-3 h-70 bg-gray-100'>
         <h2 className="font-bold text-2xl mt-2 mb-4">Device Traffic</h2>
        <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="name" />
          <YAxis />
        <Bar dataKey="uv" fill="#92a6f9" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default BarChartt;
