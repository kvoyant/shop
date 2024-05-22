import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let Box = styled.div`
    padding: 20px;
    color: grey;
`;

let YellowBtn = styled.button`
    background: ${ props => props.bg};
    color: ${ props => props.bg === 'blue' ? 'white' : 'black'};
    padding: 10px;
`;

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

    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');

    //useEffect 안에 적은 코드는 html 렌더링 이후에 동작합니다.
    //함수의 핵심기능 외에 쓸데없는 기능들을 프로그래밍 용어로 side effect라고 부릅니다.
    //컴포넌트의 핵심 기능은 html 렌더링이라 그거 외의 쓸데없는 기능들은 useEffect 안에 적으라는 소리입니다. 
    //오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머다는거 이런건 useEffect 안에 많이 적습니다.
    useEffect(() => {
        //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
        console.log('useEffect')
        let a = setTimeout(() => { setAlert(false)}, 2000);


        /**
         * 
            <input>에 입력한 값은 출력해보면 전부 문자형태로 출력됩니다. 원래그럼 
            그럼 '123' 이렇게 숫자가 있는 문자인지 
            'ㄱㄴㄷ' 이렇게 숫자가 없는 문자인지 파악하고 싶으면 여러 방법이 있는데
            isNaN() 쓰면 쉽다는군요 
            isNaN('abc') 이러면 true가 나오고 
            isNaN('123') 이러면 false가 나온다고 하는군요.         
        */
        if (isNaN(num) === true) {
            console.log('숫자만 입력하세요!');
            setNum('');
        }
        return () => {
            //clean up function
            //seEffect 안에 있는 코드를 실행하기 전에 return ()=>{ } 안에 있는 코드를 실행
            //타이머제거, socket 연결요청제거, ajax요청 중단 이런 코드를 많이 작성
            console.log('return');
            clearTimeout(a);
        }
    }, [num]);

    
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
            <div>
                <Box>
                    <YellowBtn bg="yellow" onClick={() => setCount(count + 1)}>버튼</YellowBtn>
                    <YellowBtn bg="red">버튼</YellowBtn>
                    <YellowBtn bg="blue">버튼</YellowBtn>
                </Box>
            </div>

            {
                alert === true ? <div>2초이내 구매시</div> : null
            }

            <input value={num} onChange={ (e) => { setNum(e.target.value) }} />
        </div>
    );
};

export default Detail;