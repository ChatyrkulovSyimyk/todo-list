import React, { useState } from "react";

export default function EditList(){
    const [userInput, setUserInput] = useState("");
     const [userTxt, setUserTxt] = useState('');


  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleChangeTxt = (e) => {
    setUserTxt(e.currentTarget.value);
  };



return (
    <>
    <div className="edit-list">
        <form onSubmit={handleSubmit}>
        <label htmlFor="input">Название задачи</label>
        <input
            value={userInput}
            type="text"
            id="input"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Введите значение..."
            required
        />
        <label htmlFor="txt">Коментарии</label>
        <textarea value={userTxt}
            id="txt"
            onChange={handleChangeTxt}
            onKeyDown={handleKeyPress}
            placeholder="Коментарии..."
            required></textarea>
        <button>Сохранить</button>
        </form>
    </div>
   </> 
  );
};