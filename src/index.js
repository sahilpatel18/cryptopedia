import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);