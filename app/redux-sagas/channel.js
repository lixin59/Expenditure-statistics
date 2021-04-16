function stdChannel() {
    let currentTakers = [];
    /* 
    cb 回调函数
    matcher 匹配器
    */
    function take(cb,matcher) {//订阅
        cb['MATCH']=matcher;
        currentTakers.push();
    }
    function put(input) {//发布
        for(let i=0;i<currentTakers.length;i++){
            let taker = currentTakers[i]
            if (taker['MATCH'](input)){
                taker(input);
            }
        }
    }
    return {take,put}
}