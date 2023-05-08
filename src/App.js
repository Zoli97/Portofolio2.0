import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Pages from "./pages/Pages";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  return (
    <AnimatePresence mode="wait">
      <ParallaxProvider>
        <div className="App body">
          <Pages />
        </div>
      </ParallaxProvider>
    </AnimatePresence>
  );
}

export default App;
