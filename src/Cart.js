import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./store";

const Cart = () => {
    let state = useSelector((state) => { return state })//warn
    // let a = useSelector((state) => state.user2 )
    console.log('state :', state)

    let dispatch = useDispatch();

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
                            <td>클릭</td>
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
        </>
    );
};

export default Cart;