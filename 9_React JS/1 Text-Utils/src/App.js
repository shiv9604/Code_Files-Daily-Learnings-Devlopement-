import './App.css';
import Navbar from "../src/Components/Navbar";
import TextForm from "../src/Components/TextForm";
function App() {
  return (
  <>
  <Navbar title = "TextUtils"/>
  <div className="container" id='textcontainer'>
  <TextForm heading = "Enter the text here"/>
  </div>
  </>
  );
}

export default App;
