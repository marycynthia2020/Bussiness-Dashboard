import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Feb',
    uv: 1000,
  },
  {
    name: 'March',
    uv: 700,
  },
  {
    name: 'April',
    uv: 2000,
  },
  {
    name: 'May',
    uv: 1980,
  },
  {
    name: 'June',
    uv: 1890
  },
  {
    name: 'August',
    uv: 2390,
  },
  {
    name: 'Dec',
    uv: 3000,
  },
];
const LineGraph = () => {
  return (
    <div className='w-full  lg:col-span-4 h-75 bg-gray-100 p-2 rounded-lg'>
          <h2 className="font-bold text-2xl mt-2 mb-4">Total Users</h2>
        <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#444444" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  )
}

export default LineGraph





