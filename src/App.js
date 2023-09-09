import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from './components/menu/Menu';
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="menu" element={<Menu />} />
      </Routes>
  </BrowserRouter>
                  {/* <Login /> */}

    </div>
  );
}

export default App;
