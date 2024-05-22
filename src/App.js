import { useState } from 'react';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import data from './data';
import Detail from './Detail';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <>
      {/* <button onClick={() => { navigate('/detail') }}>이동버튼</button> */}

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i + 1} key={i}></Card>
                })}
              </div>
            </div>
          </>
        } />
        
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        {/* detail/아무거나 입력했을 때 <Detail> 컴포넌트 보여달라는 뜻*/}

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>

        <Route path="*" element={<div>없는페이지임</div>} />

        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>

      </Routes>

    </>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (

    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      {/* <Link to="/">홈</Link> */}

    </div>
  )
}

export default App;
