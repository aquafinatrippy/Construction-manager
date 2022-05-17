import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './features/login/Login';
import { Todo } from './features/todo/Todo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login/>} />
          <Route path='todo' element={<Todo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
