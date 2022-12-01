import { Routes, Route } from "react-router-dom"

import "./App.scss";
import 'draft-js/dist/Draft.css'
import "bootstrap/dist/css/bootstrap.min.css"

import AddProblem from "./components/AddProblem.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import ProblemList from "./components/ProblemList.js";
import ProblemDetail from "./components/ProblemDetail.js";
import Footer from "./components/Footer.js";
import Submit from "./components/Submit.js";
import Help from "./components/Help.js";

function App() {
  return (
    <div className="body">
      <Header />
      <Menu />
      <div className="body-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addProblem" element={<AddProblem />}></Route>
          <Route path="/problemList" element={<ProblemList />}></Route>
          <Route path="/problem/:id" element={<ProblemDetail />}></Route>
          <Route path="/submit" element={<Submit />}></Route>
          <Route path="/help" element={<Help />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
