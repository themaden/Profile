import './App.css';
import Header from './Header';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Post from './Post';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path='/create' element={<CreatePost />} /> 
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
