import store from "./store";
import * as actionType from "./actionType"
import { resolveBug } from "./actionCreator";

// bugAdded

const unsubscribe=store.subscribe(()=>{

console.log("updated state: ",store.getState())
});



store.dispatch({
    type:actionType.ACTION_ADD,
     payload:{
        description:"bug1"}
});



store.dispatch({
    type:actionType.ACTION_ADD,
     payload:{
        description:"bug2"}
});

store.dispatch(resolveBug(2));

store.dispatch({
type:actionType.ACTION_REMOVE,
payload:{
id:1
}
});
unsubscribe();

