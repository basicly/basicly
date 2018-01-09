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
  //     type: "POST",
  //     url: "http://localhost:3000/inprogress",
  //     data: {
  //         Description: 'hello',
  //         UserId: 1
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
