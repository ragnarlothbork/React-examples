import React from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    //to display the balance
    const amounts = transactions.map(transaction => transaction.amount);
    //to display correct balance after making changes in transactions
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return ( 
        <>
         <h4>Your Balance</h4>
         <h1>₹{total}</h1>   
        </>
    )
}
