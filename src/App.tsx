import Home from './components/Home/index';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import TodoProvider from './context/TodoProvider';

import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { Signup } from './components/Signup';
import { AboutUs } from './components/AboutUs';

export default function App() {
  return (
    <TodoProvider children={
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/sobre-nosotros' element={<AboutUs />} />
          <Route path='/:any' element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    } />
  );
};