import React from "react";
import { Launch } from "../Launch/Launch";
import "./styles.css";
export class Launchlist extends React.Component {
  render() {
    return (
      <div className="launchlist">
        <Launch
          banner="https://content.fortune.com/wp-content/uploads/2020/05/SpaceX-NASA-Launch-04.jpg"
          title="Falconsat"
          date="2006-03-25T10:30:00+12:00"
          description=" Falcon 9 is a reusable, two-stage rocket designed and manufactured
        by SpaceX for the reliable and safe transport of people and payloads
        into Earth orbit and beyond. Falcon 9 is the world’s first orbital
        class reusable rocket. Reusability allows SpaceX to refly the most
        expensive parts of the rocket, which in turn drives down the cost of
        space access."
        />
        <Launch
          banner="https://content.fortune.com/wp-content/uploads/2020/05/SpaceX-NASA-Launch-04.jpg"
          title="Falconsat"
          date="2006-03-25T10:30:00+12:00"
          description=" Falcon 9 is a reusable, two-stage rocket designed and manufactured
        by SpaceX for the reliable and safe transport of people and payloads
        into Earth orbit and beyond. Falcon 9 is the world’s first orbital
        class reusable rocket. Reusability allows SpaceX to refly the most
        expensive parts of the rocket, which in turn drives down the cost of
        space access."
        />
      </div>
    );
  }
}
