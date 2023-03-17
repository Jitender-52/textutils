import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


let name = "World!"
function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar/>
      <div className="container">
        <TextForm heading="Enter the text below to analyze" />
      </div>
    </>
  );
}

export default App;
