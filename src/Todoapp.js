import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import newtodo from "./newtodo.css"
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function Todoapp() {
  const [input, setInput] = useState("")
  const [add, addValue] = useState([])
  function addTodos() {
    addValue([...add, input])
  }
  function dltBtn(i) {
    const arr = add.filter((v, ind) => {
      return i !== ind
    })
    addValue(arr)
  }
  function dltAll() {
    addValue([])
  }
  return (
    <div>
      <Card style={{ width: '35rem', height: '41rem', backgroundColor: "#386bc0" }}>
        <Card.Body>
          <Card.Title className="center">TODO LIST</Card.Title>
          <input type='text' className='put' style={{ width: "60%", height: "6%" }} onChange={(e) => setInput(e.target.value)} />
          <Button variant="primary mx-1" style={{ backgroundColor: "green" }} onClick={addTodos}>ADD</Button>
          <Button varient="primary mx-4" style={{ backgroundColor: "red" }} onClick={dltAll}>Delete All</Button>
          <ul>{
            add.map((v, i) => {
              return (
                <li key={i}><input type='text' value={v} className='inputBtn' onChange={setInput} /><button className="primary mx-4" onClick={() => dltBtn(i)}> <DeleteOutlined /></button><button className='editBtn'><EditOutlined /></button></li>
              )
            })}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Todoapp;