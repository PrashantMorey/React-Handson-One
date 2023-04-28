
import React, { Component } from "react";
import './App.css';
import MyFunctionalComponent from './Components/MyFunctunalCpmponent';
import MyClassComponent from "./Components/MyClassComponent";
import "./Components/myStyle.css";

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFunctionalComponent: true,
      showClassComponent: true,
    };
  }

  toggleFunComp = () => {
    this.setState((prevState) => ({
      showFunctionalComponent : !prevState.showFunctionalComponent,
    }));
  }
  toggleClassComp = () => {
    this.setState((prevState) => ({
      showClassComponent : !prevState.showClassComponent,
    }));
  }


  render(){
  return ( 
  <div className="App">
    <h1 className="grt">Styling using Functional and Class Component</h1> 
    <div className="twoBox">
    <button onClick={this.toggleFunComp} className="firstBox">To see styling functional component</button>
    <button onClick={this.toggleClassComp} className="secondBox">To see styling in class component</button>
    </div>
    <div className="twoBigBoxes">
    {this.state.showFunctionalComponent && <MyFunctionalComponent/>}
    {this.state.showClassComponent && <MyClassComponent/>}
    </div>
  </div>
  )
}
}

export default App;
