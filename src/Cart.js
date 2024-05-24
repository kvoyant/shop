import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase, addCount, addItem } from "./store";
import { useEffect } from "react";

const Cart = () => {
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