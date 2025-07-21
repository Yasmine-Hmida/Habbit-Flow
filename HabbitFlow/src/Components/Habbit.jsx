import './Habbit.css'
import bin from '../assets/bin.png'

const Habbit = () => { // {username , habbit}
  return (
    <div className='HabbitContainer'>
        <h1 className="habbitMessage">Drink Water and meet with skander to play fifa</h1>
        <img src={bin} alt="Bin Icon" className='habbitDel'/>
    </div>
  )
}

export default Habbit
