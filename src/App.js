import React, { Component } from "react"
import CesiumComp from './components/Cesium'

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      viewer: null
    }
  }

  render(){
    return (
        <div id="AppDiv">
          <CesiumComp viewer={this.state.viewer}/>
        </div>
    )
  }

}

module.exports = App