import { useParams } from "react-router-dom";

const Detail = (props) => {
    let {id} = useParams();
    
    //arrow function
    let 찾은상품 = props.shoes.find((x) => x.id === parseInt(id));
    
    //그냥 function
    let 찾은상품2 = props.shoes.find(function(x){
        return x.id === id;
    });

    console.log(id)
    console.log('찾은상품 :',찾은상품)
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="30%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;