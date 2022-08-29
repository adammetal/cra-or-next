import { Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

const About = () => {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Link to="/about">About</Link><br />
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
