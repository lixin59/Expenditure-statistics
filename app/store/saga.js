import * as actionType from './action-types'
import {put,take} from 'redux-saga/effects'
export function* rootSaga(){
    for(let i=0;i<3;i++){
        console.log(`等待${actionType.ASYNC_ADD}动作`);
        //在这里卡住 等到有人向我发出一个ASYNC_ADD的动作指令，我才会接着往下走
        const action = yield take(actionType.ASYNC_ADD);
        console.log(`等到了`,action);
        yield put({type:actionType.ADD})//等效于 store.dispatch({type:actionType.ADD})
        console.log('继续往下执行');
    }
    console.log('for循环结束');
    
}

/* 
在saga里面有三种generator= saga
1.根saga  入口
2.watcher saga 监听者
2.worker saga 工作者
effects 指令对象 告诉监听saga 我需要做什么  
take 接收
put 发送 (真正向仓库派发动作)
*/