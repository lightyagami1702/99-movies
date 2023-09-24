import Header from "./components/Header";
import Cards from "./components/Cards";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { createContext, useState } from "react";
const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{ login, userName, setLogin, setUserName }}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };
