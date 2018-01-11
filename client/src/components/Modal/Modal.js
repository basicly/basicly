import React from 'react';
import './Modal.css';

const modal = (props) => {
  let modalHtml = null;

  if (props.show) {
    modalHtml = (
      <div 
        className="backdrop"
        onClick={props.backdropClicked}>
        <div className="modal">
          {props.children}
        </div>
      </div>
    );
  }

  return modalHtml;
};

export default modal;
