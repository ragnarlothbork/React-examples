import React ,{ createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//inital state
const initialstate={
  transactions : []
}

// create context

export const GlobalContext=createContext(initialstate);

//provider component
export const GlobalProvider =({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate);
    //delete actions
    function deleteTransaction(id){
        dispatch({
            type:'Delete_Transaction',
            payload:id
        });
    }
    //new transcation
    function addTransaction(transaction){
        dispatch({
            type:'add_Transaction',
            payload:transaction
        });
    }
    return(<GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>);
}
  