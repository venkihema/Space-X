import axios from "axios";
import React from "react";
import { Launch } from "../Launch/Launch";
import "./styles.css";
export class Launchlist extends React.Component {
  state = {
    launches: [],
  };
  componentDidMount = () => {
    this.getlaunches();
  };
  getlaunches = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        this.setState({
          launches: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  launchList = () => {
    return this.state.launches.map((launch) => {
      console.log(launch);
      return (
        <Launch
          banner={
            launch.links.flickr_images.length > 0
              ? launch.links.flickr_images[0]
              : "https://content.fortune.com/wp-content/uploads/2020/05/SpaceX-NASA-Launch-04.jpg"
          }
          title={launch.mission_name}
          date={launch.launch_date_local}
          description={launch.details}
        />
      );
    });
  };

  render() {
    console.log(this.state.launches);
    //convert each launch object into a component
    return <div className="launchlist">{this.launchList()}</div>;
  }
}
