import './App.css';
import Header from './Component/Header';
import Day from './Component/Day';
import Word from './Component/Word';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Day />} />
          <Route path='/word/:word' element={<Word />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
