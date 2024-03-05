import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
    </div>
  );
}

export default App;
