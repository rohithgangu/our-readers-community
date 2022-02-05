import Home from './pages/Home'
import './App.css';
import SignUp from './pages/SignUp';
import auth from './firebase'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LogIn from './pages/LogIn';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/LogIn" element={<LogIn/>}/>
      <Route exact path="/SignUp" element={<SignUp/>}/>

      </Routes>
    </div>
  );
}

export default App;
