import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Layout from './components/Layout';
import { Routes as Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ToastContext, { ToastContextProvider } from './context/ToastContext';

function App() {
  return (
    <>
    <AuthContextProvider>
      <ToastContextProvider>
    <Layout>
      <Switch>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Switch>
    </Layout>
    </ToastContextProvider>
    </AuthContextProvider>
    </>
  );
}

export default App;
