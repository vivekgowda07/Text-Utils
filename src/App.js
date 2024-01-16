import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';



function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/>
    <div className="container my-3">
    {/* <TextForm heading = "Enter the text to Analyze below"/> */}
    <About/>
    </div>
    </>

  );
}

export default App;
