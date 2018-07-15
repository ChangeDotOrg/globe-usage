import React, { Component } from "react"
import Cesium from 'cesium/Cesium'
import "cesium/Widgets/widgets.css"

class CesiumComp extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.viewer = new Cesium.Viewer("cesiumContainer")
  }

  render(){
    return (
        <div id="cesiumContainer"/>
    )
  }

}

export default CesiumComp