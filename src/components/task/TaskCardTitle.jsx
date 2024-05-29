import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };
  const handleBlur = () => {
    setIsClick(false);
  };
  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {/* 要素をboolで判断 */}
      {isClick ? (
        // form onsubはenterを押した時に呼ばれる
        <form onSubmit={handleSubmit}>
          {/* // onchangeはテキスト変わるたびに */}
          <input
            className="taskCardTitleInput"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            autoFocus
            maxLength={15}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
