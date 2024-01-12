import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Moviedetails from "./components/Moviedetails";
import Search from "./components/Search";
import Home from "./components/Home";
const App=()=>{
  return(
<Router>
  <Routes>
    <Route path="/" element={<Frontpage/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/movie/:id" element={<Moviedetails/>}/>
  </Routes>
</Router>
  )
}
export default App