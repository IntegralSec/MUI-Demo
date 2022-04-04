import './widgetLg.css'
import img1 from './Anna Keller.jpg';
import img2 from './John Miki.jpg';
import img3 from './Sue Aliston.jpg';
import img4 from './Rob Gruter.jpg';
import img5 from './Nicole Peroro.jpg';

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">
        Latest Transactions
      </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Ammount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img1} alt="" className='widgetLgImg' />
            <div className="span widgetLgName">Susan Carol</div>
          </td>
          <td className='widgetLrDate'>
            March 8, 2021
          </td>
          <td className='widgetLrAmmount'>
            $122
          </td>
          <td className='widgetLrStatus'>
            <Button type="approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img2} alt="" className='widgetLgImg' />
            <div className="span widgetLgName">John Miki</div>
          </td>
          <td className='widgetLrDate'>
            March 12, 2021
          </td>
          <td className='widgetLrAmmount'>
            $152
          </td>
          <td className='widgetLrStatus'>
            <Button type="declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img3} alt="" className='widgetLgImg' />
            <div className="span widgetLgName">Sue Aliston</div>
          </td>
          <td className='widgetLrDate'>
            March 12, 2021
          </td>
          <td className='widgetLrAmmount'>
            $425
          </td>
          <td className='widgetLrStatus'>
            <Button type="pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img4} alt="" className='widgetLgImg' />
            <div className="span widgetLgName">Rob Grunter</div>
          </td>
          <td className='widgetLrDate'>
            March 14, 2021
          </td>
          <td className='widgetLrAmmount'>
            $302
          </td>
          <td className='widgetLrStatus'>
            <Button type="approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img5} alt="" className='widgetLgImg' />
            <div className="span widgetLgName">Nicole Peroro</div>
          </td>
          <td className='widgetLrDate'>
            March 21, 2021
          </td>
          <td className='widgetLrAmmount'>
            $98
          </td>
          <td className='widgetLrStatus'>
            <Button type="approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}

