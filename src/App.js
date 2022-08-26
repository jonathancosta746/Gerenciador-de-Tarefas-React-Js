import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';

//pages
import Tasks from "./pages/task";
import About from "./pages/about";

//components
import NavBar from './components/NavBar';
import Register from './pages/register';

//context
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

//hooks 
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';



function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  },[auth]);

  if(loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>  
          <div className="container">
            <NavBar />
              <Routes>
                <Route path="/" element={<Tasks />}/>

                <Route path="/register" element={<Register />}/>

                <Route path="/about" element={<About />}/>
              </Routes>
            </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
