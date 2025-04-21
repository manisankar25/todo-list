import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([{ value: 'first', isEdit: false }, { value: 'two', isEdit: false }]);
  const [listvalue, setListvalue] = useState('')
  const [listvalueEdit, setListvalueEdit] = useState('')

  const saveHandle = () => {
    setData((prev) =>
      [...prev, { value: listvalue, isEdit: false }]
    )
  }
  const deleteHandle = (index2, item) => {
    const delFilterArray = data.filter((ar, index) => index !== index2)
    setData(delFilterArray)
  }
  const editHandle = (index2) => {
    setData(prev => {
      prev[index2].isEdit = true
      return [...prev]
    }
    )
  }
  const handleEditSave = (item, k) => {
    setData(prev => {
      prev[k].value = listvalueEdit
      prev[k].isEdit = false
      return [...prev]
    })

    setListvalueEdit('')
  }
  return (
    <div className="App">
      <input type="text" onChange={(e) => setListvalue(e.target.value)} value={listvalue}></input>
      <button onClick={saveHandle}>Add</button>
      <ol>
        {data.map((item, index) =>
          <li>{item.isEdit === true ?
            (<React.Fragment>
              <input type='text' value={listvalueEdit} onChange={(e) => setListvalueEdit(e.target.value)}></input>
              <button onClick={() => handleEditSave(item, index)}>Save edit</button>
            </React.Fragment>
            ) : item.value}
            <button onClick={() => deleteHandle(index, item.value)}>delete</button>
            <button onClick={() => editHandle(index)}>edit</button>
          </li>)}
      </ol>
    </div>
  );
}

export default App;
