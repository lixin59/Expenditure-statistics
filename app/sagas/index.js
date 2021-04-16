import {all} from 'redux-saga/effects'

import homeSaga from './homeSaga'   

function* defSaga(params) {
    yield all([homeSaga()])
}