import React from "react";
import axios from "axios";
export class Axios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  getdata = async () => {
    const result = axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        this.setState({ data: [...this.state.data, res.data] });
      });
  };

  render() {
    console.log("State values : ", this.state);
    return (
      <div>
        <button onClick={this.getdata}>Click Here</button>
        {this.state.data.map((d) => {
          return (
            <div key={Math.random()}>
              <div>{d.id}</div>
              <div>{d.title}</div>
              <div>{d.completed.toString()}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
