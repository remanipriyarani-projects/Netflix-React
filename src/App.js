import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import { action, originals } from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title="NetFlix Originals"/>
      {/*reuse component Rowpost*/}
      <Rowpost url = {action} title="Action" isSmall/>
    </div>
  );
}

export default App;
