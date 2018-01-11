import React, { Component } from 'react';
import './ToDoContainer.css';

// import Axios
import axios from 'axios';

// import the ToDoList component
import ToDoList from '../ToDoList/ToDoList';

// import the CreateToDo component
import ToDoHeader from '../ToDoHeader/ToDoHeader';

// import the Modal component
import Modal from '../Modal/Modal';

// import the CreateToDo compponent
import CreateToDo from '../CreateToDo/CreateToDo';

class ToDoContainer extends Component {
  state = {
    // this is all static test data
    toDosInProgress: [
      {
        id: 1,
        description: 'Get a job as a software engineer',
        isCompleted: false
      },
      {
        id: 2,
        description: 'Get in shape for upcoming trip to the Bahamas',
        isCompleted: false
      },
      {
        id: 3,
        description: 'Last through the cedar allergy season',
        isCompleted: false
      }
    ],
    toDosCompleted: [
      {
        id: 4,
        description: 'Live past the year 2017',
        isCompleted: true
      },
      {
        id: 5,
        description: 'Finish the Hack Reactor technical assessment',
        isCompleted: true
      }
    ],
    creatingToDo: false
  }

  createToDoStartHandler = () => {
    this.setState({
      creatingToDo: true
    });
  }

  createToDoSubmitHandler = (toDo) => {
    axios.post('/inprogress', { description: toDo.description, dateDue: toDo.dateDue})
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log('Error creating new to do: ', err);
      });
  }

  createToDoCancelHandler = () => {
    this.setState({
      creatingToDo: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          show={this.state.creatingToDo}>
          <CreateToDo
            createToDoCanceled={this.createToDoCancelHandler}
            createToDoSubmitted={this.createToDoSubmitHandler}
          />
        </Modal>
        <div className="toDoContainer">
          <ToDoHeader
            createToDoClicked={this.createToDoStartHandler}
          />
          <ToDoList
            category="In Progress"
            toDos={this.state.toDosInProgress}
          />
          <ToDoList
            category="Completed"
            toDos={this.state.toDosCompleted}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoContainer;
