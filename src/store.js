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
    initialState: 'kim',
})

export default configureStore({
    reducer: {
        user2: user1.reducer
    }
})