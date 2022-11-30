import { Header } from "./Components/Header/Header.jsx";
import { Launchlist } from "./Components/Launchlist/Launchlist.jsx";
import "./styles.css";
// import { Axios } from "./Axios.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Launchlist />
      {/* <Axios /> */}
    </div>
  );
}

export default App;
