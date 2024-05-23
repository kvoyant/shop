import { useSelector } from "react-redux";

const Cart = () => {
    let a = useSelector((state) => { return state })//warn
    // let a = useSelector((state) => state.user2 )
    console.log(a)

    return (
        <div>cart</div>
    );
};

export default Cart;