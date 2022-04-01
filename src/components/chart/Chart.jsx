import "./chart.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';




export default function Chart(props) {
  return (
    <div className="chart">
        <h3 className="chartTitle">{props.title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <AreaChart data={props.data} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
              <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={props.xAxisDataKey} stroke="#2B2A2F"></XAxis>
                <YAxis stroke="#2B2A2F"></YAxis>
                <Area type="monotone" dataKey={props.dataKey} stroke="#2B2A2F" fill="#1A719E"></Area>
            </AreaChart>

        </ResponsiveContainer>
    </div>
  )
}
