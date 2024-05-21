import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import bg from 'https://codingapple1.github.io/shop/shoes1.jpg';
import bg from './bg.png';
import { useState } from 'react';
import data from './data';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Card shoes={shoes[0]} i={1}/>
          <Card shoes={shoes[1]} i={2} />
          <Card shoes={shoes[2]} i={3} />
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ props.i +".jpg"} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

export default App;
