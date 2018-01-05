import React from 'react';

const toDoInProgressEntry = (props) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
        />
        {props.toDoInProgress.name}
      </label>
    </div>
  );
};

export default toDoInProgressEntry;
