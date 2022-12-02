import React from "react";

const Form = ({ userInput, onInputChange, addItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className="add-item"
        type="text"
        value={userInput}
        onChange={onInputChange}
        placeholder="Add new list item"
      />
      <button className="primary-button" onClick={addItem}>
        Add
      </button>
    </form>
  );
};

export default Form;
