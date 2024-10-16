
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './Component/LogInPage';
import SignUpPage from './Component/RegistePage';
import HomePage from './Component/HomePage';


function App() {
  return (
    <Router>
    
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/SignUp-Page" element={<SignUpPage />} />
    <Route path='/Home' element={<HomePage />} />


    </Routes>

    </Router>
    
  );
}

export default App;
