import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
