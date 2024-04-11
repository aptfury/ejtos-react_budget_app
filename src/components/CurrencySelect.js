import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
    const { currency, dispatch } = useContext(AppContext);
    const currencyInfo = {
        "$": "$ Dollar",
        "£": "£ Pound",
        "€": "€ Euro",
        "₹": "₹ Ruppee"
    }

    const handleNewCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })
    }

    return (
        <select className='currency-select' id='currency-select' onChange={handleNewCurrency}>
            <option defaultValue hidden>Currency ({currencyInfo[`${currency}`]})</option>
            <option value="$" name='Dollars'>$ Dollar</option>
            <option value="£" name='Pounds'>£ Pound</option>
            <option value="€" name='Euros'>€ Euro</option>
            <option value="₹" name='Ruppees'>₹ Ruppee</option>
        </select>
    )
}

export default CurrencySelect;
