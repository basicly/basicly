import React, { Component } from 'react';

// import the Layer component
import './components/Layout/Layout';
import Layout from './components/Layout/Layout';
import $ from 'jquery';

class App extends Component {
  // render the component
  componentDidMount() {
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "http://localhost:3000/inprogress",
      data: { description: 'hello' },
      success: function (data) {
        console.log('SUCCESSFUL', data)
      },
      error: function (error) {
        console.log('ERROR ON POST', error);
      }
    })
  }
  render() {
    return (
      <Layout
      />
    );
  }
}

export default App;
