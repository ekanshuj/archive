import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/Footer/Navigation";
import Current from "./Pages/Current/Current";
import Movies from "./Pages/Movies/Movies";
import Tv from "./Pages/TV/Tv";
// import TransitionsModal from "./components/modal/TransitionsModal";

export default function App() {
  return (
    <Router>
      <Header />
      <Container className="app">
        <Routes>
          <Route exact path="/" element={<Current />} />
          <Route exact path="/tv" element={<Tv />} />
          <Route exact path="/movies" element={<Movies />} />
        </Routes>
      </Container>
      {/* <TransitionsModal /> */}
      <SimpleBottomNavigation />
    </Router>
  );
}

