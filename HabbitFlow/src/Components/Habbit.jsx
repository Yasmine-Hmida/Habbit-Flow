import './Habbit.css'
import bin from '../assets/bin.png'

const Habbit = ({ habbitText, onDelete ,onClick}) => {
    return (
        <div className='HabbitContainer' onClick={onClick}>
            <h1 className="habbitMessage">{habbitText}</h1>
            <img 
                src={bin} 
                alt="Bin Icon" 
                className='habbitDel' 
                onClick={onDelete}
            />
        </div>
    )
}

export default Habbit
