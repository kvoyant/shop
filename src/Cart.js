import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
    let state = useSelector((state) => { return state })//warn
    // let a = useSelector((state) => state.user2 )
    console.log('state :', state)

    return (
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
    );
};

export default Cart;