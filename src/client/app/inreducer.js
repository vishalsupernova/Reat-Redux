const initialState = { count: 0, inc: 0, dec: 0 }
function counter(state = initialState, action) {
    //  console.log(action.payload)
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: (parseInt(action.payload)) };
        case 'DECREMENT':
            return { ...state, count: (parseInt(action.payload)) };
        case 'CHANGE': 
            return{...state, inc: parseInt(state.count) + (parseInt(action.payload)) }; //1
        case 'REDUCE':
            return{...state, dec: parseInt(state.count) - parseInt(action.payload)}; //-1
        default:
            return state;
    }
}

export default counter