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
    toDosInProgress: [],
    toDosCompleted: [],
    creatingToDo: false
  }

  componentDidMount = () => {
    // get all of the in progress to do's when our ToDoContainer mounts
    this.getInProgress();

    // get all of the completed to do's when our ToDoContainer mounts
    this.getCompleted();
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

  deleteToDo = (id, bool) => {
    let toggle = !bool
    axios.put('/deleteTodo', { id: id, isDeleted: toggle })
      .then((result) => {
        this.getInProgress()
        this.getCompleted()
      })
      .catch((err) => {
        console.log('Error deleting to do', err);
      })
  }

  // sets the creatingToDo state varaible to true and opens up a CreateToDo modal
  createToDoStartHandler = () => {
    this.setState({
      creatingToDo: true
    });
  }

  // posts a new to do when the submit button is clicked in the CreateToDo modal
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

  // sets the creatingToDo state variable to false which cancels the prompt and removes the CreateToDo modal
  createToDoCancelHandler = () => {
    this.setState({
      creatingToDo: false
    });
  }

  // filters out to do's based on the current search criteria
  filterToDoText = (toDos) => {
    return toDos.filter((toDo) => {
      const description = toDo.description.toLowerCase();
      const searchText = this.props.searchText.toLowerCase();
      if (searchText === '') {
        return true;
      } else {
        return description.includes(searchText);
      }
    });
  }

  render() {
    const filteredToDosInProgress = this.filterToDoText(this.state.toDosInProgress);
    const filteredToDosCompleted = this.filterToDoText(this.state.toDosCompleted);

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
            toDos={filteredToDosInProgress}
            toggleTodo={this.toggleToDo}
            deleteToDo={this.deleteToDo}
          />
          <ToDoList
            category="Completed"
            toDos={filteredToDosCompleted}
            toggleTodo={this.toggleToDo}
            deleteToDo={this.deleteToDo}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoContainer;
