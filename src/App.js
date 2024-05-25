import Home from "./Components/Home";
import Card from "./Components/Card";
import Contactus from "./Components/Contactus";
import {BrowserRouter,Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/OurServices" element={<Card></Card>}></Route>
        <Route path="/Contactus" element={<Contactus></Contactus>}></Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
