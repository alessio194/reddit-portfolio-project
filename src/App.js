import React from "react";
import "./App.css";
import BodyWrapper from "./components/BodyWrapper";
import { Header } from "./components/Header";
import { Posts } from "./features/posts/Posts.js";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyWrapper>
        <Posts />
      </BodyWrapper>
    </div>
  );
}

export default App;
