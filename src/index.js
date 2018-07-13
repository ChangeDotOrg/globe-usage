import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import "cesium/Build/Cesium/Widgets/widgets.css"
import './index.css';
import "cesium/Source/Widgets/widgets.css";
// import "cesium/Widgets/widgets.css";
window.CESIUM_BASE_URL = './public'
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";

buildModuleUrl.setBaseUrl('./cesium/');

ReactDOM.render(<App />, document.getElementById("index"));