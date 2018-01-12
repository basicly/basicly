import React, { Component } from 'react';

// import the Layer component
import './components/Layout/Layout';
import Layout from './components/Layout/Layout';
import $ from 'jquery';

class App extends Component {
  // render the component
  // Testing the post
  // componentDidMount() {
  //   $.ajax({
  //     type: "PUT",
  //     url: "http://localhost:3000/toggleTodo",
  //     data: {
  //         id: 4,
  //         isCompleted: true
  //       },
  //     success: function (data) {
  //       console.log('SUCCESSFUL', data)
  //     },
  //     error: function (error) {
  //       console.log('ERROR ON POST', error);
  //     }
  //   })
  // }

  render() {
    return (
      <Layout
      />
    );
  }
}

export default App;
