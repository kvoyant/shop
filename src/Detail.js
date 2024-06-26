import axios from "axios";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

const Detail = (props) => {
    let [shoes, setShoes] = useState('');
    let [탭, 탭변경] = useState(0);
    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => {setFade('end')}, 1000);
        return () => {
            setFade('');
        }
        // setFade('end');
    }, [탭])

    function TabContent(props) {
        console.log(props.탭)
        // if (props.탭 === 0) {
        //     return <div>내용0</div>
        // }
        // if (props.탭 === 1) {
        //     return <div>내용1</div>
        // }
        // if (props.탭 === 2) {
        //     return <div>내용2</div>
        // }

        return (
            <div className={'start ' + fade}>
                {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭]}
            </div>
        )
    }

    return (
        <>
        <TabContent 탭={탭} />
        <div>
            {/* <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) => {
                    console.log('결과.data :', 결과.data)
                    let copy = [...결과.data, ...결과.data];//6개
                    console.log('copy :', copy)
                    setShoes(copy)
                })
                    .catch(() => {
                        console.log('실패함')
                    })
            }}>axios 서버통신</button>

            <button onClick={() => {
                fetch('https://codingapple1.github.io/shop/data2.json')
                    .then(결과 => 결과.json())//json  변환
                    .then((결과) => {
                        console.log('fetch :', 결과)
                    }
                    )
            }}>fetch 서버통신</button> */}

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>내용0</div>
            <div>내용1</div>
            <div>내용2</div>
        </div>
        </>
    );
};

export default Detail;

/**
 * 
 원래 서버와 문자자료만 주고받을 수 있음 

object/array 이런거 못주고받습니다.
근데 방금만해도 array 자료 받아온 것 같은데 그건 어떻게 한거냐면 
object/array 자료에 따옴표를 쳐놓으면 됩니다.

"{"name" : "kim"}"
이걸 JSON 이라고 합니다.
JSON은 문자 취급을 받기 때문에 서버와 자유롭게 주고받을 수 있습니다.

그래서 실제로 결과.data 출력해보면 따옴표쳐진 JSON이 나와야하는데
axios 라이브러리는 JSON -> object/array 변환작업을 자동으로 해줘서 
출력해보면 object/array가 나옵니다. 
* 
 */