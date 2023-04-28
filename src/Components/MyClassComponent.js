import React , {Component} from "react";


export class MyClassComponent extends Component{
    render(){
        return    <div className="secondBigBox">
        <h1>This is created using class Component</h1>
            <p>This is done using external CSS</p>
            <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>
        
    }
}

export default MyClassComponent;