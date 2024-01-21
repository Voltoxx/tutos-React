import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";

function App() {
  return (
      <div className="App">
              <Router>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/apropos" element={<Apropos />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<h1>404</h1>} />
                </Routes>
                <Footer />
              </Router>
      </div>
  );
}

export default App;
