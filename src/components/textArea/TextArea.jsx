import './textArea.css';

export default function TextArea(props) {
    const {text} = props;
    return (
        <div className='textArea'>
            <h3 className='title'>{props.title}</h3>
            <p className='text'>
                {props.text}
            </p>
        </div>
      )
}
