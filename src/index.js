/*The index.js file is typically the entry point of a React application. It is responsible for rendering 
the root component of your application and mounting it to the DOM.*/
import React from "react";
import ReactDOM from "react-dom";
//import { ReactDOM } from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'))
/*This line creates a root element using ReactDOM.createRoot() and assigns it to the root constant. 
The createRoot() function takes the DOM element where you want to mount your React application. 
In this case, it uses document.getElementById('root') to select the element with the id of 'root'.*/

root.render(<App/>) /*The render() method is used to render a React component into the DOM. In this case,
 it renders the App component, which represents the root component of your travel website.*/
