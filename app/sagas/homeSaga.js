import * as actionType from './action-types'
import {put,take} from 'redux-saga/effects'

export function* homeSaga(params) {
    try {
        while (true){
            yield take(actionType.REFRESHDATA);
            yield put({type:actionType.REFRESHDATA})
        }
    }
    catch (err){
        console.log(err);
    }
}