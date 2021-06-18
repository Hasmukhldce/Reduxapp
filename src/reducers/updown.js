const initialState = 0;

const changeNum = (state = initialState, action) =>{

    switch (action.type){
        case "INCREMENT" : return state + 5;
        case "DECREMENT" : return state - 3;
        default: return state;
    }

}

export default changeNum;