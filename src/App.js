import './App.css';
import Navbar from './components/navbar.js';
import TitleBox from './components/titleBox.js';
import Achievments from './components/achievments.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <TitleBox />
      <Achievments />
    </div>
  );
}

export default App;
