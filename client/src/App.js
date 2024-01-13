import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Layout from './components/Layout';
import { Routes as Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Layout>
      <Switch>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Switch>
    </Layout>
    </>
  );
}

export default App;
