import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';

//pages
import Tasks from "./pages/task";
import About from "./pages/about";

//components
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <div className="container">
          <NavBar />
            <Routes>
              <Route path="/" element={<Tasks />}/>

              <Route path="/about" element={<About />}/>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
