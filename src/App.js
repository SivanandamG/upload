import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Results from './Components/Results';
function App() {
  return (
    <div className="Ap">
       <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/search/:q' element={<Results/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
