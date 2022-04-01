import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData.js'
import TextArea from '../../components/textArea/TextArea';

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" xAxisDataKey="name" dataKey="Active Users"/>
        <TextArea title="Fox Tale" text="The qick bronw fox jumps over the lazy dog." />
    </div>
  )
}
