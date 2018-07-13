import React, { Component } from "react";
// import 'cesium/Widgets/widgets.css'
// import Cesium from 'cesium/Build/Cesium/Cesium.js'
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
// import "cesium/Source/Widgets/widgets.css";
// import Cesium from 'cesium/Cesium'

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      viewer: null
    }
  }

  componentDidMount(){
    // this.setState((prevState, props) => {
    //   return {
      this.viewer = new Viewer("cesiumContainer");
      // };
    // });
  }

  render(){
    return (
      <div>
           <div id="cesiumContainer"/>
      </div>
    )
  }

}

module.exports = App