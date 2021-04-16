import * as actionType from './action-types';

const actions = {
    add(){ // action creator
        return {type:actionType.ASYNC_ADD}
    },
    upData(value){
        return {type:actionType.REFRESHDATA, value}
    },
    getValue(){
        return {type:actionType.GETDATA}
    }
}

export default actions;