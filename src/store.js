import { configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * //state 하나 만들 수 있습니다.
    step 1. createSlice( ) 로 state 만들고
    step 2. configureStore( ) 안에 등록하면 됩니다. 

    1. createSlice( ) 상단에서 import 해온 다음에 
    { name : 'state이름', initialState : 'state값' } 이거 넣으면 state 하나 생성가능합니다. 
    (createSlice( ) 는 useState( ) 와 용도가 비슷하다고 보면 됩니다)
    
    2. state 등록은 configureStore( ) 안에 하면 됩니다.
    { 작명 : createSlice만든거.reducer } 이러면 등록 끝입니다. 
    여기 등록한 state는 모든 컴포넌트가 자유롭게 사용가능합니다. 
 * 
 */

let user1 = createSlice({
    name: 'user',
    initialState: {name: 'kim', age: 20 },
    // initialState: 'kim',
    reducers: {
        changeName(state) {
            return 'john ' + state
        },
        increase(state, a) {
            state.age += a.payload
        }
    }
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1}
    ],
    reducers: {
        addCount(state, action) {
            // state[action.payload].count++
            let 번호 = state.findIndex((a) => { return a.id === action.payload })//"payload와 같은 id를 가진 상품을 찾아서 +1 해달라
            // console.log('번호:', 번호);// 0 or 1 (index 순서값)
            state[번호].count++
        },
        addItem(state, action) {
            state.push(action.payload)
        }
    }
})

export default configureStore({
    reducer: {
        user2: user1.reducer,
        cart2: cart.reducer
    }
})

export let { changeName, increase } = user1.actions;
export let { addCount, addItem } = cart.actions;

/**
(참고)
- a 말고 action 이런 식으로 작명 많이 합니다. 
- action.type 하면 state변경함수 이름이 나오고
- action.payload 하면 파라미터가 나옵니다. 
 */