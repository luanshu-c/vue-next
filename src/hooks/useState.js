import {ref} from "vue";

let [states, stateSetters, stateIndex] = [[], [], 0]

/**
 * 创建 createState
 * */
function createState(initialState, stateIndex) {
    // 响应式数据包装
    const state = ref(initialState);
    // 返回值
    return states[stateIndex] !== undefined ? states[stateIndex] : state;
}

/**
 * 创建 createSetter
 */
function createSetter(stateIndex) {
    return function (newState) {
        if (typeof newState === "function") {
            states[stateIndex].value = newState(states[stateIndex].value);
        } else {
            states[stateIndex].value = newState;
        }
    };
}

// 业务中 useState 可以多次  所以就需要使用队列
function useState(initialState) {
    states[stateIndex] = createState(initialState, stateIndex);
    if (!stateSetters[stateIndex]) {
        stateSetters.push(createSetter(stateIndex));
    }

    const _state = states[stateIndex];
    const _setState = stateSetters[stateIndex];

    stateIndex++;

    return [_state, _setState];
}

export default useState;
