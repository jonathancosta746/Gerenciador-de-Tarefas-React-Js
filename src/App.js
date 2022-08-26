import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import './App.css';

//pages
import Tasks from "./pages/task";
import About from "./pages/about";
import CreateTask from './pages/createTask';

//components
import NavBar from './components/NavBar';
import Register from './pages/register';

//context
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

//hooks 
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
import Login from './pages/login';


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
                  element={user ? <Tasks /> : <Navigate to="/login" />}
                />
                <Route 
                  path="/register" 
                  element={!user ? <Register /> : <Navigate to="/" />}
                />
                <Route 
                  path="/login" 
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                <Route 
                  path="/create" 
                  element={user ? <CreateTask /> : <Navigate to="/login"/>}
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
