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
        isCompleted: true
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
  //Do a component did mount
    //create a get request
  componentDidMount = () => {
    axios.get('/inprogress')
      .then((result) => {
        this.setState({ toDosInProgress: result.data })
      })
      .catch((err) => {
        console.log('Error getting in progress to do', err);
      })

    axios.get('/completed')
      .then((result) => {
        console.log(result.data)
        this.setState({ toDosCompleted: result.data})
      })
      .catch((err) => {
        console.log('Error getting completed to do', err);
      })
  }

  getInProgress = () => {
    axios.get('/inprogress')
      .then((result) => {
        this.setState({ toDosInProgress: result.data })
      })
      .catch((err) => {
        console.log('Error getting in progress to do', err);
      })
  }

    getCompleted = () => {
      axios.get('/completed')
        .then((result) => {
          // backend server is not getting the correct results.
          this.setState({ toDosCompleted: result.data})
        })
        .catch((err) => {
          console.log('Error getting completed to do', err);
        })
    }

  toggleToDo = (id, bool) => {

    let toggle = !bool
    axios.put('/toggleTodo', { id: id, isCompleted: toggle })
      .then((result) => {
        this.getInProgress()
        this.getCompleted()
      })
      .catch((err) => {
        console.log('Error toggling to do', err);
      })
  }

  createToDoStartHandler = () => {
    this.setState({
      creatingToDo: true
    });
  }

  createToDoSubmitHandler = (event, description, dueDate) => {
    event.preventDefault();
    axios.post('/inprogress', { userId: 1, description: description, dueDate: dueDate})
      .then((result) => {
        this.createToDoCancelHandler();
        this.getInProgress();
        this.getCompleted();
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
            toggleTodo={this.toggleToDo}
          />
          <ToDoList
            category="Completed"
            toDos={this.state.toDosCompleted}
            toggleTodo={this.toggleToDo}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoContainer;
