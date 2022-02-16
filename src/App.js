import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Components/Login';
import Welcome from './Components/Welcome';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? <Welcome /> : <Login />}
    </div>
  );
}

export default App;
