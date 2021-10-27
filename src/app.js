import React from "react";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "../node_modules/axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    axios //axios used for calling backend API
      .get("http://localhost:4000/", {})
      .catch((error) => console.log(error))
      .then((data1) => this.setState({ data: data1.data }));
  }

  render() {
    return (
      <div>
        <h1>UserId:{this.state.data[0] ? this.state.data[0].UserId : ""}</h1>
        <h1>Title:{this.state.data[0] ? this.state.data[0].Title : ""}</h1>
        <h1>Body:{this.state.data[0] ? this.state.data[0].Body : ""}</h1>
        <br />
        <h1>UserId:{this.state.data[1] ? this.state.data[1].UserId : ""}</h1>
        <h1>Title:{this.state.data[1] ? this.state.data[1].Title : ""}</h1>
        <h1>Body:{this.state.data[1] ? this.state.data[1].Body : ""}</h1>
      </div>
    );
  }
}
export default App;
