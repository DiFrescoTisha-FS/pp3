
import './index.css';
// import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import { Home, Login } from './components';

function App() {
  return (
    <div className="w-screen h-screen bg-[#010606]">
      <Routes>
        <Route path="/login" element={<Login />} />          
        <Route path="/*" element={<Home />} />          
      </Routes>
    </div>
  );
}

export default App;
