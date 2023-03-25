import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import MovieDetail from "./component/movieDetail/MovieDetail";
import PageNotFound from "./component/pageNotFound/PageNotFound";
import Footer from "./component/footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/movie/:imdbID" element={MovieDetail} />
          <Route element={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
