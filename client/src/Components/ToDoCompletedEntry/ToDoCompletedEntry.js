import React from 'react';

const toDoCompletedEntry = (props) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
        />
        {props.toDoCompleted.name}
      </label>
    </div>
  );
};

export default toDoCompletedEntry;
