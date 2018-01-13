import React, { Component } from 'react';
import './CreateToDo.css';

// import X icon
import xIcon from './images/x-icon.png';

// import Momentjs
import moment from 'moment';

// import the DatePicker component
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreateToDo extends Component {
  state = {
    startDate: moment(),
    toDo: {
      description: ''
    }
  };

  dateChangeHandler = (date)  => {
    this.setState({
      startDate: date
    });
  }

  toDoDescriptionChangeHandler = (event) => {
    const newDescription = event.target.value;

    const newToDo = {...this.state.toDo};
    newToDo.description = newDescription;

    this.setState({
      toDo: newToDo
    });
  }

  render() {
    return (
      <div className="createToDo">
        <div className="createToDoHeader">
          New To Do
          <img
            className="xIcon"
            src={xIcon}
            alt="Close"
            onClick={this.props.createToDoCanceled}
          />
        </div>
        <form
          onSubmit={(event) => this.props.createToDoSubmitted(event, this.state.toDo.description, this.state.startDate)}>
          <label className="label">
            Description
            <br />
            <input
              className="textInput"
              type="text"
              name="toDo"
              value={this.state.toDo.description}
              onChange={(event) => this.toDoDescriptionChangeHandler(event)}
            />
          </label>
          <div className="datePickerContainer">
            Date
            <DatePicker
              className="datePicker"
              selected={this.state.startDate}
              onChange={this.dateChangeHandler}
            />
          </div>
          <input className="button" type="submit" value="Create" />
        </form>
      </div>
    );
  }
};

export default CreateToDo;
