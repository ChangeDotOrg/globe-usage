import React, { Component } from "react"
import Cesium from 'cesium/Cesium'
import "cesium/Widgets/widgets.css"

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      viewer: null
    }
  }

  componentDidMount(){
    this.viewer = new Cesium.Viewer("cesiumContainer")
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