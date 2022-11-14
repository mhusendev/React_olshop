import logo from './logo.svg';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Content/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Search from './component/Content/Search/Search';
import Detail from './component/Content/Detail/Detail';

function App() {
  return (
   <>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
  </Routes>
   </>
  );
}
export default App;
