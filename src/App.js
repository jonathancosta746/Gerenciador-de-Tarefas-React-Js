import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import './App.css';

//pages
import About from "./pages/about";
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

//components
import NavBar from './components/navBar/';

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
                <Route 
                  path="/" 
                  element={user ? <Dashboard /> : <Navigate to="/login" />}
                />
                <Route 
                  path="/register" 
                  element={!user ? <Register /> : <Navigate to="/" />}
                />
                <Route 
                  path="/login" 
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                
                <Route path="/about" element={<About />}/>
              </Routes>
            </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
