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
    namey:"100",
    Employee: 30,
    Employer: 30,
    TotalInterest: 20,
    amt: 2400,
  },
  {
    name: "25",
    namey:"150",
    Employee: 40,
    Employer: 40,
    TotalInterest: 30,
    amt: 2210,
  },
  {
    name: "30",
    namey:"200",
    Employee: 50,
    Employer: 50,
    TotalInterest: 40,
    amt: 2290,
  },
  {
    name: "35",
    namey:"250",
    Employee: 60,
    Employer: 60,
    amt: 4000,
    TotalInterest: 50,
  },
  {
    name: "40",
    namey:"300",
    Employee: 70,
    Employer: 70,
    amt: 2181,
    TotalInterest: 60,
  },
  {
    name: "45",
    namey:"350",
    Employee: 80,
    Employer: 80,
    amt: 2500,
    TotalInterest: 70,
  },
  {
    name: "50",
    namey:"400",
    Employee: 90,
    Employer: 90,
    amt: 2100,
    TotalInterest: 80,
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
        <ResponsiveContainer width={"100%"} height={"90%"}>
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
            <YAxis dataKey="namey"/>
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
