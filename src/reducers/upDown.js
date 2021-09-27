const initialstate = 0;

const changeTheNumber = (state = initialstate, action) => {
    switch(action.type){
        case "ICREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default : return state;
    }

};

export default changeTheNumber;