import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['zafor', 'khalid', 'sayyed', 'sdasds'];
  const products = [
    { name: 'photoshop', price: '199.99' },
    { name: 'Illustator', price: '99.99' },
    { name: 'pdf reader', price: '9.99' },
    { name: 'premium', price: '299.99' }
  ]
  const friends = [
    { name: 'sohan', age: '21' },
    { name: 'ajoy', age: '23' },
    { name: 'babor', age: '22' },
    { name: 'zafor', age: '22' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(product => (
            <Product product={product}></Product>
          ))
        }
        {
          friends.map(friend => (
            <Friends which={friend}></Friends>
          ))
        }
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => (
            <li style={{listStyleType:'none'}}>Name:  {user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  const handelIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={handelIncrease}>Increase</button>
      <button onMouseOver={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Friends(props) {
  const cardStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'blue',
    height: '200px',
    width: '200px',
    float: 'left',
    color: 'white',
    margin: '5px'
  }

  const { age, name } = props.which;

  return (
    <div style={cardStyle}>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  )

}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '200px',
    width: '200px',
    float: 'left',
    color: 'black',
    margin: '5px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h6>{price}</h6>
      <button type="">Buy Now</button>
    </div>
  )
}

function Person(props) {

  return (
    <div style={{ border: '2px solid red', margin: '5px', padding: '15px' }}>
      <h1>Name: {props.name} <br></br> {props.state} {props.food}</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}
export default App;
