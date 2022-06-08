import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Page1, Page2, Error } from './Pages';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
