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
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
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
        <form>
          <label className="label">
            Name
            <br />
            <input className="textInput" type="text" name="toDo" />
          </label>
          <div className="datePickerContainer">
            Date
            <DatePicker
              className="datePicker"
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>
          <input className="button" type="submit" value="Create" />
        </form>
      </div>
    );
  }
};

export default CreateToDo;
