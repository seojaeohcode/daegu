import loading from './Component/loading';
import React, { Component, Fragment } from "react";
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import './App.scss'

class App extends React.Component {

  state = {isLoading:true}

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false})
    }, 5000);
  }

  view = () => {
    return (
      <Fragment>
        {Header()}
        {Body()}
        {Footer()}
      </Fragment>
    );
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? loading() : this.view() }
      </div>
    );
  }
}

export default App;
