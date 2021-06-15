//reducer for actions

export default (state,action) => {
    //delete action
    switch(action.type){
        case 'Delete_Transaction':
            return{
                ...state,
                transactions:state.transactions.filter(transaction =>transaction.id !== action.payload)
            }
        //new transcation    
        case 'add_Transaction':
            return{
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return state;
    }

}