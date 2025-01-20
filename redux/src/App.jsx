import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Header from './component/Header';
import Add from './component/Add';
import Home from './component/Home';
import Edit from './component/Edit';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
