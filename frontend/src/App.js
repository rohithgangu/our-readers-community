import Home from './pages/Home'
import './App.css';
import SignUp from './pages/SignUp';
import {
  Routes,
  Route,
} from "react-router-dom";

import LogIn from './pages/LogIn';
import { AuthProvider } from './context/AuthContext';

function App() {

  /* const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  }; */


  return (
    <AuthProvider>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/LogIn" element={<LogIn/>}/>
      <Route exact path="/SignUp" element={<SignUp/>}/>

      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
