import "./Income.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "20",
    Employee: 1000,
    Employer: 1000,
    TotalInterest: 1500,
    amt: 2400,
  },
  {
    name: "25",
    Employee: 1500,
    Employer: 1500,
    TotalInterest: 2000,
    amt: 2210,
  },
  {
    name: "30",
    Employee: 2000,
    Employer: 2000,
    TotalInterest: 2500,
    amt: 2290,
  },
  {
    name: "35",
    Employee: 2500,
    Employer: 2500,
    amt: 4000,
    TotalInterest: 3000,
  },
  {
    name: "40",
    Employee: 3000,
    Employer: 3000,
    amt: 2181,
    TotalInterest: 3500,
  },
  {
    name: "45",
    Employee: 3500,
    Employer: 3500,
    amt: 2500,
    TotalInterest: 4000,
  },
  {
    name: "50",
    Employee: 4000,
    Employer: 4000,
    amt: 2100,
    TotalInterest: 4500,
  },
];

function Income() {
  return (
    <div className="income">
      <div className="inhead">
        <p className="bluehead">Retirement Income</p>
        <p className="yeartag">Starting Year 2016</p>
      </div>
      <div className="goals">
        <div className="ach">
          <p className="gvalue">$300,000</p>
          <p className="val">My Goal</p>
        </div>
        <div className="ach">
          <p className="gvalue">59%</p>
          <p className="val">Goal Achieved</p>
        </div>
        <div className="ach">
          <p className="gvalue">$300</p>
          <p className="val">Est. Monthly Income</p>
        </div>
      </div>

      <div className="chart">
        <ResponsiveContainer width={"100%"} height={"50%"}>
          <BarChart
            data={data}
            margin={{
              top: 80,
              right: 40,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Employer" stackId="a" fill="rgb(42, 20, 185)" />
            <Bar dataKey="Employee" stackId="a" fill="rgb(80, 66, 172)" />
            <Bar
              dataKey="TotalInterest"
              stackId="a"
              fill="rgb(149, 138, 226)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Income;
