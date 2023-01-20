import { Routes, Route } from "react-router-dom";
import "./App.css";

import Banner from "./components/banner/background";
import Home from "./pages/home/home.component";
import Navbar from "./components/navbar/navbar.component";
import About from "./pages/about/about.component";
import Events from "./pages/events/events.component";
import Rides from "./pages/rides/rides.component";
import Sponsors from "./pages/sponsors/sponsors.component";
import Contact from "./pages/contact/contact.component";

const navItems = [
  { text: "Who we are", path: "about" },
  { text: "Past events", path: "events" },
  { text: "Group rides", path: "rides" },
  { text: "Sponsors", path: "sponsors" },
  { text: "Contact", path: "contact" },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Navbar navItems={navItems} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="rides" element={<Rides />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
