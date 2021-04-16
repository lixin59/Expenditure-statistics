/* 
中间件其实是对store.dispatch的改造和增强
store.dispatch(action);
*/

function sagaMiddlewareFactory(){
    function sagaMiddleware({getState,dispatch}){
        return function(next){//调用下一个中间件 只有一个中间件的话 next= store.dispatch 
            let result = next(action)
            return result;
        }
    }
    return sagaMiddleware;
}

export default sagaMiddlewareFactory;