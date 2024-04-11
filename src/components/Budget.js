import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (budget < totalExpenses) {
            alert('Your budget cannot be lower than the total expenses listed.');
            return;
        }

        if (newBudget < totalExpenses) {
            alert('Your budget cannot be lower than the total expenses listed.');
            setNewBudget(budget);
            return;
        }

        if (newBudget > 20000) {
            alert(`Your budget may not exceed ${currency}20000.`);
            setNewBudget(budget);
            return;
        }

        setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
