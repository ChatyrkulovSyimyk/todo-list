import React, { useState } from "react";


export default function EditList({editTask}){
    const [editInput, setEditInput] = useState('');
    const [editTxt, setEditTxt] = useState('');

  const handleChange = (e) => {
    setEditInput(e.currentTarget.value);
  };
  const handleChangeTxt = (e) => {
    setEditTxt(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(editInput, editTxt);
    setEditInput("");
    setEditTxt("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
return (
  <>
    <div className="edit">
      
    <div className="edit-list">
      <h1>Редактировать задачу</h1>
      <form >
      
        <label htmlFor="editinput">Название задачи</label>
        <input
          value={editInput}
          type="text"
          id="editinput"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Введите значение..."
          required
        />
        <label htmlFor="txt">Коментарии</label>
        <textarea value={editTxt}
          id="edittxt"
          onChange={handleChangeTxt}
          onKeyDown={handleKeyPress}
          placeholder="Коментарии..."
          required></textarea>
        <button>Сохранить</button>
      </form>
    </div>
    </div>
  </>
    
  );
};