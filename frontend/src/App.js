import Home from './pages/Home'
import './App.css';
import SignUp from './pages/SignUp';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LogIn from './pages/LogIn';
import { useAuth,AuthProvider } from './context/AuthContext';
import PrivateHome from './pages/PrivateHome';
import PrivateRoute from './components/privateRoute';
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
      <Route path="/LogIn" element={<LogIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/PrivateHome" element={
        <PrivateRoute>
                    <PrivateHome/>
        </PrivateRoute>
      }/>
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
