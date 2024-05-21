import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import data from './data';

function App() {
  let [shoes] = useState(data);
  return (
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
      <Route path="/detail" element={<div>상세페이지임</div>} />
      <Route path="/about" element={<div>어바웃페이지임</div>} />
    </Routes>
  );
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
