import store from "./store";

// bugAdded

const unsubscribe=store.subscribe(()=>{

console.log("updated state: ",store.getState())
});



store.dispatch({
    type:"bugAdded",
     payload:{
        description:"bug1"}
});

unsubscribe();

store.dispatch({
    type:"bugAdded",
     payload:{
        description:"bug2"}
});

store.dispatch({
type:"bugRemoved",
payload:{
id:1
}
});
