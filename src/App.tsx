import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './features/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
