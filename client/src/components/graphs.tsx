import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Label,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  Line,
  LineChart,
} from 'recharts';
const data = [
  { name: 'Men', value: 55, colorindex: 0 },
  { name: 'Women', value: 45, colorIndex: 1 },
  { name: 'unknown', value: 0, colorIndex: 2 },
];
const bardata = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const colorIndex = ['#EA5771', 'blue', 'gray'];
const columns = [
  {
    title: '',
    width: 100,
    dataIndex: 'no',
    key: 'no',
    fixed: 'left',
  },
  {
    title: 'จังหวัด',
    width: 100,
    dataIndex: 'city',
    key: 'city',
    fixed: 'left',
  },
  {
    title: 'ผู้ติดเชื้อ',
    dataIndex: 'infectnum',
    key: 'infectnum',
    width: 150,
  },
];

export const LineStatistic = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={bardata}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};
export const AreaStatistic = () => {
  return (
    <AreaChart
      width={1240}
      height={400}
      data={bardata}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
};
export const SimpleBarChart = () => {
  return (
    <BarChart
      layout="vertical"
      width={600}
      height={300}
      data={bardata}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#EA5771" background={{ fill: '#eee' }} />
    </BarChart>
  );
};

export const SimplePieChart = () => {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={300}
        cy={200}
        labelLine={true}
        outerRadius={80}
        innerRadius={60}
        fill="#8884d8"
        startAngle={90}
        endAngle={450}
        label
      >
        <Label value="เพศ" position="center" />
        {data.map((entry, index) => (
          <Cell fill={colorIndex[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
