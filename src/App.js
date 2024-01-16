import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/>
    <div className="container my-3">
    <TextForm heading = "Enter the text to Analyze below"/>
    </div>
    </>

  );
}

export default App;
