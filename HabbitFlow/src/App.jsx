import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'; 
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import Habbits from './Pages/Habbits.jsx';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Habbits" element={<Habbits />} />
    </Routes>
  );
};

export default App;
