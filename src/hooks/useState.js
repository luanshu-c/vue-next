import {ref} from "vue";

/**
 * 造轮子 React useReducer
 */
export default function useReducer(reducer, initialState) {
    // ref 包装
    const state = ref(initialState);
    const action = {};

    // dispatch
    function dispatch({type, payload}) {
        // 这里其实可以直接使用对象的形式赋值 没有必要展开 但是在考虑了阅读性 特意展开赋值
        action.type = type;
        action.payload = payload;
        reducer(state, action)
    }

    // 返回
    return [
        state,
        dispatch
    ]
}
