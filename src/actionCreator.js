import * as actionType from "./actionType";
function resolveBug(id){
return {
    type:actionType.ACTION_RESOLVED,
    payload:{
        id:id
    }
}
   

}

export{ resolveBug};