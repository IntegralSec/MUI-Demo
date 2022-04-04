import './widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import img1 from './Anna Keller.jpg';
import img2 from './John Miki.jpg';
import img3 from './Sue Aliston.jpg';
import img4 from './Rob Gruter.jpg';
import img5 from './Nicole Peroro.jpg';


export default function WidgitSm() {
  return (
    <div className='widgetSm'>
        
        <span className="widgitSmTitle">
            New Members
        </span>
        <ul className="widgitSmList">
            <li className="widgitSmListItem">
                <img src={img1} alt="" className="widgitSmImg" />
                
                <div className="widgitSmUser">
                    <span className="widgitSmUserName">Anna Keller</span>
                    <span className="widgitSmUserTitle">Designer</span>
                </div>
                <button className="widgitSmButton">
                    <VisibilityIcon className='widgetSmIcon' />
                    Display
                </button>
            </li>
            <li className="widgitSmListItem">
                <img src={img2} alt="" className="widgitSmImg" />
                
                <div className="widgitSmUser">
                    <span className="widgitSmUserName">John Miki</span>
                    <span className="widgitSmUserTitle">Product Manager</span>
                </div>
                <button className="widgitSmButton">
                    <VisibilityIcon className='widgetSmIcon' />
                    Display
                </button>
            </li>

            <li className="widgitSmListItem">
                <img src={img3} alt="" className="widgitSmImg" />
                <div className="widgitSmUser">
                    <span className="widgitSmUserName">Sue Aliston</span>
                    <span className="widgitSmUserTitle">Sr. Developer</span>
                </div>
                <button className="widgitSmButton">
                    <VisibilityIcon className='widgetSmIcon' />
                    Display
                </button>
            </li>

            <li className="widgitSmListItem">
                <img src={img4} alt="" className="widgitSmImg" />
                <div className="widgitSmUser">
                    <span className="widgitSmUserName">Rob Gruter</span>
                    <span className="widgitSmUserTitle">Developer</span>
                </div>
                <button className="widgitSmButton">
                    <VisibilityIcon className='widgetSmIcon' />
                    Display
                </button>
            </li>

            <li className="widgitSmListItem">
                <img src={img5} alt="" className="widgitSmImg" />
                <div className="widgitSmUser">
                    <span className="widgitSmUserName">Nicole Peroro</span>
                    <span className="widgitSmUserTitle">UX Designer</span>
                </div>
                <button className="widgitSmButton">
                    <VisibilityIcon className='widgetSmIcon' />
                    Display
                </button>
            </li>

        </ul>
        
    </div>
  )
}
