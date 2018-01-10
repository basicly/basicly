import React from 'react';
import './Modal.css';

const modal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal">
        {props.children}
        <div className="footer">
          <button onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default modal;
