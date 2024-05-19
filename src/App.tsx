import "./App.css";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatOne,
} from "./container";
import { CallToAction, Brand, Navbar, Background } from "./components";

function App() {
  return (
    <div>
      <Background />
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatOne />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
