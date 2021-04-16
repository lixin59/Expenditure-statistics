import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga' //其实是一个generator
let store = createStore(reducer);

// let sagaMiddleware = createSagaMiddleware();
// let store = applyMiddleware(sagaMiddleware)(createStore)(reducer);
//负责执行saga
// sagaMiddleware.run(rootSaga);
export default store;
/* 
store ={
    getState, 可以获取最新的状态
    subsrcibe, 实现状态变更的订阅
    dispatch, 可以向仓库派发最新的动作
}

*/