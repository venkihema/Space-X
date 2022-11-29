import React from "react";
import "./styles.css";
export class Launch extends React.Component {
  render() {
    return (
      <div className="launch-card">
        <div className="launch-image">
          <img src={this.props.banner} alt="Space x rocket" />
        </div>
        <div>
          <h2>{this.props.title}</h2>
          <h2>{this.props.date}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
