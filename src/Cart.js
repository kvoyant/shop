import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase, addCount, addItem } from "./store";
import { memo, useEffect, useMemo, useState } from "react";

/**
 * memo
컴포넌트가 재렌더링되면 거기 안에 있는 자식컴포넌트는 항상 함께 재렌더링됩니다.
리액트는 그렇게 대충 무식하게 동작하는데
평소엔 별 문제가 없겠지만 자식컴포넌트가 렌더링시간이 1초나 걸리는 무거운 컴포넌트면 어쩔 것입니까. 
부모컴포넌트에 있는 버튼 누를 때 마다 1초 버벅이는 불상사가 발생합니다. 
그럴 땐 자식을 memo로 감싸놓으면 됩니다. 

Q. 어 그럼 memo는 좋은거니까 막써도 되겠네요?
memo로 감싼 컴포넌트는 헛된 재렌더링을 안시키려고
기존 props와 바뀐 props를 비교하는 연산이 추가로 진행됩니다.
props가 크고 복잡하면 이거 자체로도 부담이 될 수도 있습니다.
그래서 꼭 필요한 곳에만 사용합시다. 
*/

// function Child() {
//     console.log('재랜더링됨')
//     return <div>자식임</div>
// }

let Child = memo(function() {
    console.log('재랜더링됨')
    return <div>자식임</div>
})

/**
비슷하게 생긴 useMemo
비슷한 useMemo라는 문법도 있는데 이건 그냥 useEffect와 비슷한 용도입니다.
컴포넌트 로드시 1회만 실행하고 싶은 코드가 있으면 거기 담으면 됩니다. 

1. 예를 들어서 반복문을 10억번 돌려야하는 경우 
2. 그 함수를 useMemo 안에 넣어두면 컴포넌트 로드시 1회만 실행됩니다. 
그럼 재렌더링마다 동작안하니까 좀 효율적으로 동작하겠죠? 
useEffect 처럼 dependency도 넣을 수 있어서 
특정 state, props가 변할 때만 실행할 수도 있습니다. 
*/
function 함수() {
    console.log('반복문10억번돌린결과')
    return <p>반복문10억번돌린결과</p>;
}

const Cart = () => {
    let [count, setCount] = useState(0);
    let result = useMemo(()=>{ return 함수()}, [])//랜더링시 한번실행

    let state = useSelector((state) => { return state })//warn
    // let a = useSelector((state) => state.user2 )
    console.log('state :', state)

    let dispatch = useDispatch();

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // switch / case 조건문
    function Component2() {
        var user = 'seller';
        if (user === 'seller') {
            return <h4>판매자 로그인</h4>
        } else if (user === 'customer') {
            return <h4>구매자 로그인</h4>
        } else {
            return <h4>그냥 로그인</h4>
        }
    }

    function Component3() {
        var user = 'seller';
        switch (user) {
            case 'seller':
                return <h4>판매자 로그인</h4>
            case 'customer':
                return <h4>구매자 로그인</h4>
            default:
                return <h4>그냥 로그인</h4>
        }
    }

    var 탭UI = {
        info: <p>상품정보</p>,
        shipping: <p>배송관련</p>,
        refund: <p>환불약관</p>
    }

    function TestComponent() {
        var 현재상태 = 'info';
        console.log(탭UI[현재상태])
        return (<div>{탭UI[현재상태]}</div>)
    }

    localStorage.setItem('obj', JSON.stringify([{name: 'Kim'}]))
    var a = localStorage.getItem('obj')
    var b = JSON.parse(a)
    console.log(a)
    console.log(b)


    a = JSON.parse(a);
    a.push({'age':100});//arr[] 일 경우에만 push 가능
    console.log(a);

    var arr = [];
    arr.push('a')
    arr.push('a')//중복
    console.log('arr :',arr)
    arr = new Set(arr);//중복제거
    console.log('set :',arr)
    arr = Array.from(arr);
    console.log('최종 arr :',arr)

    useEffect(()=>{
        localStorage.setItem('watched', JSON.stringify( [] ))
    }, [])
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    return (
        <>
            <Child />
            <button onClick={()=>{ setCount(count + 1) }}> + </button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart2.map((a, i) =>
                            <tr key={i}>
                                <td>{state.cart2[i].id}</td>
                                <td>{state.cart2[i].name}</td>
                                <td>{state.cart2[i].count}</td>
                                <td>
                                    {/* <button onClick={() => { dispatch(addCount(i)) }}>+</button> */}
                                    {/* <button onClick={() => { dispatch(addCount(state.cart2[i].id)) }}>+</button> */}
                                    <button onClick={() => {
                                        dispatch(addItem({ id: 1, name: 'Red knit', count: 1 }))
                                    }}>주문하기</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <button onClick={() => {
                dispatch(changeName())
            }}>changeName 버튼</button>

            <button onClick={() => {
                dispatch(increase(10))
            }}>increase 버튼</button>
            <button onClick={() => { TestComponent() }}>return div</button>
        </>
    );
};

export default Cart;