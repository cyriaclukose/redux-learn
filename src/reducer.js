import * as actionType from "./actionType";
let id = 0;

function reducer(state = [], action) {

    switch (action.type) {
        case actionType.ACTION_ADD:

            return [...state, {
                id: ++id,
                description: action.payload.description,
                resolved: false
            }];
        case actionType.ACTION_REMOVE:

            return state.filter(bug => bug.id !== action.payload.id);

        case actionType.ACTION_RESOLVED:
            return state.map(bug=>bug.id===action.payload.id?{...bug,resolved:true}:bug)   
        default:
            return state;

    }
}

export default reducer;


