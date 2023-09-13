import "./Todo.css"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import Tooltip from '@mui/material/Tooltip';

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [inputValue, setInputText] = useState('');
  const [array, Newarray] = useState([]);
  const [message, setMessage] = useState('');
  const [checkmessage, setcheckmessage] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('text')) || [];
    Newarray(storedTodos);
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() === '') {
      setMessage('The textarea is Empty...');
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    }

    if (editIndex !== null) {
      const updatedTodos = [...array];
      updatedTodos[editIndex] = inputValue;
      Newarray(updatedTodos);
      setInputText('');
      setEditIndex(null);

      localStorage.setItem('text', JSON.stringify(updatedTodos));
    } else {
      const updatedTodos = [...array, inputValue];
      Newarray(updatedTodos);
      setInputText('');

      localStorage.setItem('text', JSON.stringify(updatedTodos));
    }
  };

  const removetext = (index) => {
    const updatedTodos = [...array];
    updatedTodos.splice(index, 1);
    Newarray(updatedTodos);
    localStorage.setItem('text', JSON.stringify(updatedTodos));
  };

  const editTask = (index) => {
    setEditIndex(index);
    setInputText(array[index]);
  };
  
  const handlechange = (e) => {
    const isChecked = e.target.checked;
    setIsSubscribed(isChecked);
    if (isChecked) {
      setcheckmessage('Task are completed...');
    } else {
      setcheckmessage('Task are NOT completed...');
    }
    setTimeout(() => {
      setcheckmessage('');
    }, 2000);
  };

  return (
    <div className="one-div">
      <div className="input-group">
        <input
          className="input-field"
          type="text"
          placeholder=" Enter Task..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <Tooltip title="Add task">
        <button className="submit-btn" onClick={handleButtonClick}>
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
        </Tooltip> 
      </div>
      <div className="message">{message}</div>
      <div >{checkmessage}</div>

      <ul>
        {array.map((todovalue, index) => {
          return (
            <li key={index} className="list-item">
              
              <div className="list-item-content">
              <div className="list-checkbox">
                  <input
                    type="checkbox"
                    value={isSubscribed}
                    onChange={handlechange}
                  />
                </div>
                <div className="list-value">
                  {todovalue}
                </div>
              </div>
             
              <div className="list-item-btn">
                {index !== editIndex && (
                  <Tooltip title="Edit">
                    <span onClick={() => editTask(index)}><ModeEditOutlinedIcon/></span>
                  </Tooltip>
                )}
                <Tooltip title="Delete">
                <span onClick={() => removetext(index)}><DeleteOutlineOutlinedIcon/></span>
                </Tooltip>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MyComponent;
