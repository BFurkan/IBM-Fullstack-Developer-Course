import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Currency = () => {
const {dispatch} = useContext(AppContext);

const changeCurrency = (val)=> {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: val,
    })
}

return(
    <div className='currency-dropdown alert alert-secondary' > {
        <select name="Currency" id="Currency"  className="currency-dropdown-css" onChange={event=>changeCurrency(event.target.value)} >
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    }
    </div>
    
);
};

export default Currency;