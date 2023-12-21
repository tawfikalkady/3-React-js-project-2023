import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Shared Pages/Footer";
import Header from "./Pages/Shared Pages/Header";


function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>


      {/* <h1>hello</h1>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button> */}
    </>
  );
}

export default App;
