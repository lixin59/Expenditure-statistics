import * as actionType from './action-types'

// 初始化state数据
const initialState =[{
    id:0,
    data:{
        date:{
            year:'2021-1-1',
            time:'00:00'
        },
        ExpenditureType:'1',
        money:0,
        remarks:''
    }
}]

//状态处理函数
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD:
            return {number:state.number+1}
        case actionType.REFRESHDATA:
            const newdata ={
                id:state[state.length-1] ?state[state.length-1].id +1:0,
                data:action.value
            }
            return[...state,newdata]
        case actionType.GETDATA:
            return state
        default:
            return state
    }
}

export default reducer;