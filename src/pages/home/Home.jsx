import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData.js'
import TextArea from '../../components/textArea/TextArea';
import WidgetLg from '../../components/widgetLG/WidgetLg';
import WidgitSm from '../../components/widgitSm/WidgitSm';

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" xAxisDataKey="name" dataKey="Active Users"/>
        <div className='homeWidgits'>
          <WidgitSm />
          <WidgetLg />
        </div>
    </div>
  )
}
