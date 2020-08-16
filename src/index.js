import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/styles.css";
import { BrowserRouter} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render (
  <BrowserRouter>
  <App />
  </BrowserRouter>, 
  document.getElementById("root")
  );


